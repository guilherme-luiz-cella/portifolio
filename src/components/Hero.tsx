import { useEffect, useState } from "react";
import { usePortfolioCopy } from "@/application/portfolio-language-context";
import { profileLinks } from "@/lib/profile-links";

export function Hero() {
  const copy = usePortfolioCopy();
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(copy.hero.typed.slice(0, i));
      if (i >= copy.hero.typed.length) clearInterval(id);
    }, 35);
    return () => clearInterval(id);
  }, [copy.hero.typed]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden pixel-grid-bg"
    >
      <div className="scanline-sweep" />
      {/* Floating 8-bit rune stones */}
      <div className="absolute top-32 left-8 w-7 h-9 bg-neon-magenta rune-stone float-slow hidden sm:block" />
      <div
        className="absolute top-1/2 right-12 w-8 h-10 bg-neon-cyan rune-stone float-slow hidden sm:block"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-24 left-1/4 w-6 h-8 bg-neon-yellow rune-stone float-slow hidden sm:block"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 grid lg:grid-cols-[1fr_auto] gap-10 items-center w-full">
        <div>
          <div className="font-pixel text-[10px] text-neon-cyan text-shadow-glow-cyan mb-4">
            ◆ {copy.hero.status}
          </div>
          <h1 className="font-pixel text-2xl sm:text-4xl lg:text-5xl text-neon-green text-shadow-glow-green mb-6 leading-snug">
            GUILHERME
            <br />
            LUIZ CELLA
          </h1>
          <div className="font-pixel text-sm sm:text-lg text-neon-magenta text-shadow-glow-magenta mb-6">
            {copy.hero.role}
          </div>
          <p className="font-mono-retro text-xl sm:text-2xl text-foreground mb-8 max-w-xl min-h-[3.5rem]">
            &gt; {typed}
            <span className="blink text-neon-green">▮</span>
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="press-start-pulse font-pixel text-[10px] sm:text-xs px-5 py-3 bg-neon-green text-primary-foreground pixel-hover hover:bg-neon-yellow"
            >
              ▶ {copy.hero.primaryAction}
            </a>
            <a
              href="#contact"
              className="font-pixel text-[10px] sm:text-xs px-5 py-3 bg-card text-neon-cyan pixel-border-cyan pixel-hover"
            >
              {copy.hero.contactAction}
            </a>
            <a
              href={profileLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-pixel text-[10px] sm:text-xs px-5 py-3 bg-card text-neon-magenta pixel-border-magenta pixel-hover"
            >
              LINKEDIN
            </a>
            <a
              href={profileLinks.github}
              target="_blank"
              rel="noreferrer"
              className="font-pixel text-[10px] sm:text-xs px-5 py-3 bg-card text-neon-yellow pixel-border-yellow pixel-hover"
            >
              GITHUB
            </a>
          </div>

          <div className="mt-10 flex gap-6 font-mono-retro text-lg text-muted-foreground">
            <div>
              <span className="text-neon-green">HP</span> ████████ 100
            </div>
            <div>
              <span className="text-neon-cyan">XP</span> ██████░░ 75
            </div>
          </div>
        </div>

        {/* Pixel avatar */}
        <div className="hidden lg:block">
          <PixelAvatar label={copy.hero.avatarLabel} />
        </div>
      </div>
    </section>
  );
}

function PixelAvatar({ label }: { label: string }) {
  // Tiny 8-bit Viking dev avatar built from CSS grid pixels.
  // 12x14 grid
  const G = "bg-transparent";
  const S = "bg-[#d2a16f]"; // skin
  const H = "bg-neon-yellow"; // horns/beard
  const E = "bg-foreground"; // eyes
  const C = "bg-neon-cyan"; // armor
  const Y = "bg-neon-magenta"; // helmet/runes

  const grid = [
    [H, H, G, G, G, G, G, G, G, G, H, H],
    [G, H, H, G, G, Y, Y, G, G, H, H, G],
    [G, G, H, H, Y, Y, Y, Y, H, H, G, G],
    [G, G, G, Y, Y, Y, Y, Y, Y, G, G, G],
    [G, G, Y, S, S, S, S, S, S, Y, G, G],
    [G, H, Y, S, E, S, S, E, S, Y, H, G],
    [G, H, S, S, S, S, S, S, S, S, H, G],
    [G, H, H, S, H, S, S, H, S, H, H, G],
    [G, G, H, H, H, H, H, H, H, H, G, G],
    [G, C, C, C, C, C, C, C, C, C, C, G],
    [C, C, Y, C, C, Y, Y, C, C, Y, C, C],
    [C, C, C, C, C, C, C, C, C, C, C, C],
    [C, G, C, C, C, G, G, C, C, C, G, C],
    [G, G, C, C, G, G, G, G, C, C, G, G],
  ];

  return (
    <div
      className="grid p-3 bg-card pixel-border-green"
      style={{ gridTemplateColumns: "repeat(12, 14px)", gridAutoRows: "14px", gap: "0px" }}
      aria-label={label}
    >
      {grid.flat().map((c, i) => (
        <div key={i} className={c} />
      ))}
    </div>
  );
}
