import { useEffect, useState } from "react";

const LINKS = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "skills", label: "SKILLS" },
  { id: "projects", label: "PROJECTS" },
  { id: "experience", label: "EXP" },
  { id: "contact", label: "CONTACT" },
];

export function NavBar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + 120;
      let current = "home";
      for (const l of LINKS) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= y) current = l.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/90 backdrop-blur border-b-4 border-neon-green/40">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <a
          href="#home"
          className="font-pixel text-[10px] sm:text-xs text-neon-green text-shadow-glow-green flex items-center gap-2"
        >
          <span className="inline-block w-3 h-3 bg-neon-green animate-pulse" />
          GLC.dev
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`font-pixel text-[10px] px-3 py-2 transition-colors ${
                  active === l.id
                    ? "text-neon-yellow text-shadow-glow-yellow bg-muted"
                    : "text-foreground hover:text-neon-cyan hover:bg-muted/60"
                }`}
              >
                {active === l.id ? `▶ ${l.label}` : l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden font-pixel text-[10px] text-neon-cyan px-3 py-2 pixel-border-cyan"
          aria-label="Toggle menu"
        >
          {open ? "X" : "MENU"}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden border-t-2 border-neon-green/30 bg-background">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`block font-pixel text-[10px] px-6 py-4 border-b border-border ${
                  active === l.id ? "text-neon-yellow bg-muted" : "text-foreground"
                }`}
              >
                {active === l.id ? `▶ ${l.label}` : `· ${l.label}`}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
