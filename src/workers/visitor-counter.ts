type WorkerEnv = {
  VISITOR_COUNT: {
    get(key: string): Promise<string | null>;
    put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
  };
};

export default {
  async fetch(request: Request, env: WorkerEnv) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: cors() });
    }

    // Only handle the /api/visitor path when this worker is routed theree
    if (url.pathname !== "/api/visitor") {
      return new Response("Not Found", { status: 404 });
    }

    try {
      const countKey = "global_visitor_count";
      const cookies = parseCookies(request.headers.get("Cookie"));
      const visitorId = cookies.visitor_id;

      const raw = await env.VISITOR_COUNT.get(countKey);
      const currentCount = Number(raw || "0");

      if (visitorId) {
        return jsonResponse({ count: currentCount, counted: false });
      }

      const next = currentCount + 1;
      await env.VISITOR_COUNT.put(countKey, String(next));

      return jsonResponse(
        { count: next, counted: true },
        {
          "Set-Cookie": buildVisitorCookie(url.protocol === "https:"),
        },
      );
    } catch (e) {
      return new Response(JSON.stringify({ error: String(e) }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...cors() },
      });
    }
  },
};

function cors() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function parseCookies(cookieHeader: string | null) {
  if (!cookieHeader) return {} as Record<string, string>;

  return cookieHeader.split(";").reduce<Record<string, string>>((accumulator, part) => {
    const [rawName, ...rawValue] = part.trim().split("=");
    if (!rawName) return accumulator;
    accumulator[rawName] = rawValue.join("=");
    return accumulator;
  }, {});
}

function buildVisitorCookie(isSecure: boolean) {
  const visitorId = crypto.randomUUID();
  return `visitor_id=${visitorId}; Path=/; Max-Age=${60 * 60 * 24 * 365}; SameSite=Lax${isSecure ? "; Secure" : ""}`;
}

function jsonResponse(body: unknown, extraHeaders: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      ...cors(),
      ...extraHeaders,
    },
  });
}
