import { useEffect, useState } from "react";

export function VisitorCounter() {
  const [count, setCount] = useState<number>(() => {
    if (typeof window === "undefined") return 0;
    return Number(localStorage.getItem("glc_visitor_count") || "0");
  });

  useEffect(() => {
    let didSet = false;

    // Try server-side counter first
    fetch("/api/visitor", { method: "GET" })
      .then((res) => res.ok ? res.json() : Promise.reject(res))
      .then((data) => {
        if (data && typeof data.count === "number") {
          localStorage.setItem("glc_visitor_count", String(data.count));
          setCount(data.count);
          didSet = true;
        }
      })
      .catch(() => {
        // fallback to local increment
        try {
          const key = "glc_visitor_count";
          const prev = Number(localStorage.getItem(key) || "0");
          const next = prev + 1;
          localStorage.setItem(key, String(next));
          if (!didSet) setCount(next);
        } catch (e) {
          // ignore storage errors
        }
      });
  }, []);

  const padded = String(count).padStart(6, "0");

  return (
    <div className="flex items-center gap-2">
      <div className="font-pixel text-[8px] text-neon-green">VISIT</div>
      <div className="flex gap-1">
        {Array.from(padded).map((d, i) => (
          <div
            key={i}
            className="font-pixel text-[11px] px-2 py-1 bg-background text-neon-green border-2 border-neon-green/60"
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  );
}

export default VisitorCounter;
