import { useEffect, useState } from "react";

const FULL = "Building reliable systems with Laravel, PHP, MySQL, and APIs.";

export function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(FULL.slice(0, i));
      if (i >= FULL.length) clearInterval(id);
    }, 35);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden pixel-grid-bg"
    >
      <div className="scanline-sweep" />
      {/* Floating pixel decorations */}
      <div className="absolute top-32 left-8 w-4 h-4 bg-neon-magenta float-slow hidden sm:block" />
      <div className="absolute top-1/2 right-12 w-6 h-6 bg-neon-cyan float-slow hidden sm:block" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-24 left-1/4 w-3 h-3 bg-neon-yellow float-slow hidden sm:block" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-6xl mx-auto px-4 grid lg:grid-cols-[1fr_auto] gap-10 items-center w-full">
        <div>
          <div className="font-pixel text-[10px] text-neon-cyan text-shadow-glow-cyan mb-4">
            ◆ PLAYER 1 — READY
          </div>
          <h1 className="font-pixel text-2xl sm:text-4xl lg:text-5xl text-neon-green text-shadow-glow-green mb-6 leading-snug">
            GUILHERME<br />LUIZ CELLA
          </h1>
          <div className="font-pixel text-sm sm:text-lg text-neon-magenta text-shadow-glow-magenta mb-6">
            &lt; BACK-END DEVELOPER /&gt;
          </div>
          <p className="font-mono-retro text-xl sm:text-2xl text-foreground mb-8 max-w-xl min-h-[3.5rem]">
            &gt; {typed}
            <span className="blink text-neon-green">▮</span>
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="press-start-pulse font-pixel text-[10px] sm:text-xs px-5 py-3 bg-neon-green text-primary-foreground pixel-hover hover:bg-neon-yellow">
              ▶ PRESS START
            </a>
            <a href="#contact" className="font-pixel text-[10px] sm:text-xs px-5 py-3 bg-card text-neon-cyan pixel-border-cyan pixel-hover">
              CONTACT ME
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="font-pixel text-[10px] sm:text-xs px-5 py-3 bg-card text-neon-magenta pixel-border-magenta pixel-hover">
              LINKEDIN
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="font-pixel text-[10px] sm:text-xs px-5 py-3 bg-card text-neon-yellow pixel-border-yellow pixel-hover">
              GITHUB
            </a>
          </div>

          <div className="mt-10 flex gap-6 font-mono-retro text-lg text-muted-foreground">
            <div><span className="text-neon-green">HP</span> ████████ 100</div>
            <div><span className="text-neon-cyan">XP</span> ██████░░ 75</div>
          </div>
        </div>

        {/* Pixel avatar */}
        <div className="hidden lg:block">
          <PixelAvatar />
        </div>
      </div>
    </section>
  );
}

function PixelAvatar() {
  // Tiny 8-bit dev avatar built from CSS grid pixels
  // 12x14 grid
  const G = "bg-transparent";
  const S = "bg-neon-green/90"; // skin/outline
  const H = "bg-neon-magenta"; // hair
  const E = "bg-foreground"; // eyes
  const C = "bg-neon-cyan"; // shirt
  const Y = "bg-neon-yellow"; // accent

  const grid = [
    [G,G,G,H,H,H,H,H,H,G,G,G],
    [G,G,H,H,H,H,H,H,H,H,G,G],
    [G,H,H,H,H,H,H,H,H,H,H,G],
    [G,H,S,S,S,S,S,S,S,S,H,G],
    [G,H,S,E,S,S,S,S,E,S,H,G],
    [G,H,S,S,S,S,S,S,S,S,H,G],
    [G,H,S,S,Y,S,S,Y,S,S,H,G],
    [G,H,S,S,S,Y,Y,S,S,S,H,G],
    [G,G,H,S,S,S,S,S,S,H,G,G],
    [G,C,C,C,C,C,C,C,C,C,C,G],
    [C,C,Y,C,C,C,C,C,C,Y,C,C],
    [C,C,C,C,C,C,C,C,C,C,C,C],
    [C,G,C,C,C,G,G,C,C,C,G,C],
    [C,G,C,C,G,G,G,G,C,C,G,C],
  ];

  return (
    <div
      className="grid p-3 bg-card pixel-border-green"
      style={{ gridTemplateColumns: "repeat(12, 14px)", gridAutoRows: "14px", gap: "0px" }}
      aria-label="Pixel art avatar of Guilherme"
    >
      {grid.flat().map((c, i) => (
        <div key={i} className={c} />
      ))}
    </div>
  );
}
