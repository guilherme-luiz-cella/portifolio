export default {
  async fetch(request: Request, env: any) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: cors() });
    }

    // Only handle the /api/visitor path when this worker is routed there
    if (url.pathname !== "/api/visitor") {
      return new Response("Not Found", { status: 404 });
    }

    try {
      const key = "global_visitor_count";
      const raw = await env.VISITOR_COUNTER.get(key);
      const prev = Number(raw || "0");
      const next = prev + 1;
      await env.VISITOR_COUNTER.put(key, String(next));

      return new Response(JSON.stringify({ count: next }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...cors() },
      });
    } catch (e) {
      return new Response(JSON.stringify({ error: String(e) }), { status: 500, headers: { "Content-Type": "application/json", ...cors() } });
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
