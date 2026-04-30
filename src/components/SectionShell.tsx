import { useEffect, useRef, type ReactNode } from "react";

interface Props {
  id: string;
  label: string;
  title: string;
  accent?: "green" | "cyan" | "magenta" | "yellow";
  children: ReactNode;
}

export function SectionShell({ id, label, title, accent = "cyan", children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const revealed = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const revealNodes = () => {
      el.querySelectorAll<HTMLElement>(".reveal-up").forEach((n, i) => {
        setTimeout(() => n.classList.add("in-view"), i * 80);
      });
    };

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            revealed.current = true;
            revealNodes();
            obs.disconnect();
          }
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!revealed.current) return;

    ref.current?.querySelectorAll<HTMLElement>(".reveal-up").forEach((node) => {
      node.classList.add("in-view");
    });
  });

  const accentMap = {
    green: "text-neon-green text-shadow-glow-green",
    cyan: "text-neon-cyan text-shadow-glow-cyan",
    magenta: "text-neon-magenta text-shadow-glow-magenta",
    yellow: "text-neon-yellow text-shadow-glow-yellow",
  } as const;

  const dividerMap = {
    green: "bg-neon-green",
    cyan: "bg-neon-cyan",
    magenta: "bg-neon-magenta",
    yellow: "bg-neon-yellow",
  } as const;

  return (
    <section id={id} ref={ref} className="relative py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="reveal-up mb-3">
          <div className={`font-pixel text-[10px] ${accentMap[accent]}`}>◆ {label}</div>
        </div>
        <h2 className={`reveal-up font-pixel text-xl sm:text-3xl mb-4 ${accentMap[accent]}`}>
          {title}
        </h2>
        <div className="reveal-up flex gap-1 mb-12" aria-hidden>
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className={`block w-2 h-2 ${dividerMap[accent]}`}
              style={{ opacity: 1 - i * 0.04 }}
            />
          ))}
        </div>
        {children}
      </div>
    </section>
  );
}
