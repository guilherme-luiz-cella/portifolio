import { usePortfolioCopy } from "@/application/portfolio-language-context";
import { SectionShell } from "./SectionShell";

const accentText = {
  green: "text-neon-green text-shadow-glow-green",
  cyan: "text-neon-cyan text-shadow-glow-cyan",
  magenta: "text-neon-magenta text-shadow-glow-magenta",
  yellow: "text-neon-yellow text-shadow-glow-yellow",
};
const accentBorder = {
  green: "pixel-border-green",
  cyan: "pixel-border-cyan",
  magenta: "pixel-border-magenta",
  yellow: "pixel-border-yellow",
};
const accentBg = {
  green: "bg-neon-green text-primary-foreground",
  cyan: "bg-neon-cyan text-primary-foreground",
  magenta: "bg-neon-magenta text-primary-foreground",
  yellow: "bg-neon-yellow text-primary-foreground",
};

export function Projects() {
  const copy = usePortfolioCopy();

  return (
    <SectionShell
      id="projects"
      label={copy.projects.label}
      title={copy.projects.title}
      accent="magenta"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {copy.projects.items.map((p) => (
          <article
            key={p.name}
            className={`reveal-up bg-card p-6 pixel-hover flex flex-col ${accentBorder[p.accent]}`}
          >
            {/* Cartridge header */}
            <header className="flex items-center justify-between mb-4 gap-3">
              <span className={`font-pixel text-[9px] px-2 py-1 ${accentBg[p.accent]}`}>
                {p.code}
              </span>
              <span className="font-pixel text-[9px] text-muted-foreground">★★★★★</span>
            </header>

            <h3 className={`font-pixel text-sm sm:text-base mb-3 ${accentText[p.accent]}`}>
              {p.name}
            </h3>
            <p className="font-body text-sm text-foreground mb-4 leading-relaxed">{p.summary}</p>

            <div className="space-y-3 font-body text-xs sm:text-sm mb-5">
              <div>
                <div className="font-pixel text-[9px] text-neon-yellow mb-1">
                  {copy.projects.problem}
                </div>
                <p className="text-muted-foreground">{p.problem}</p>
              </div>
              <div>
                <div className="font-pixel text-[9px] text-neon-cyan mb-1">
                  {copy.projects.role}
                </div>
                <p className="text-muted-foreground">{p.role}</p>
              </div>
              <div>
                <div className="font-pixel text-[9px] text-neon-green mb-1">
                  {copy.projects.features}
                </div>
                <ul className="grid grid-cols-2 gap-1 text-muted-foreground">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-neon-green inline-block" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono-retro text-sm px-2 py-0.5 bg-muted text-foreground border border-border"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-auto flex gap-2">
              {p.projectUrl ? (
                <a
                  href={p.projectUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-pixel text-[9px] px-3 py-2 bg-card text-neon-green pixel-border-green pixel-hover"
                >
                  ▶ {copy.projects.viewProject}
                </a>
              ) : null}
              {p.codeUrl ? (
                <a
                  href={p.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-pixel text-[9px] px-3 py-2 bg-card text-neon-cyan pixel-border-cyan pixel-hover"
                >
                  &lt;/&gt; {copy.projects.code}
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
