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
const accentBar = {
  green: "bg-neon-green",
  cyan: "bg-neon-cyan",
  magenta: "bg-neon-magenta",
  yellow: "bg-neon-yellow",
};

export function Skills() {
  const copy = usePortfolioCopy();

  return (
    <SectionShell id="skills" label={copy.skills.label} title={copy.skills.title} accent="green">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {copy.skills.groups.map((g) => (
          <div
            key={g.accent}
            className={`reveal-up bg-card p-5 pixel-hover ${accentBorder[g.accent]}`}
          >
            <div className={`font-pixel text-2xl mb-3 ${accentText[g.accent]}`}>{g.icon}</div>
            <div className={`font-pixel text-xs mb-4 ${accentText[g.accent]}`}>{g.title}</div>
            <ul className="space-y-2">
              {g.skills.map((s) => (
                <li key={s} className="font-mono-retro text-base flex items-center gap-2">
                  <span className={`inline-block w-2 h-2 ${accentBar[g.accent]}`} />
                  <span className="text-foreground">{s}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 h-2 w-full bg-muted">
              <div className={`h-full ${accentBar[g.accent]}`} style={{ width: "85%" }} />
            </div>
            <div className="font-pixel text-[8px] text-muted-foreground mt-1">
              {copy.skills.maxLevel}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
