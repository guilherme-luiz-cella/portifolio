import { usePortfolioCopy } from "@/application/portfolio-language-context";
import { SectionShell } from "./SectionShell";

export function About() {
  const copy = usePortfolioCopy();

  return (
    <SectionShell id="about" label={copy.about.label} title={copy.about.title} accent="cyan">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="reveal-up md:col-span-2 bg-card p-6 sm:p-8 pixel-border-cyan">
          <div className="font-pixel text-[10px] text-neon-yellow mb-4">
            ▮ {copy.about.bioLabel}
          </div>
          {copy.about.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph.highlight}
              className={`font-body text-base sm:text-lg leading-relaxed ${
                index === 0 ? "text-foreground mb-4" : "text-muted-foreground"
              }`}
            >
              {paragraph.before}
              <span className={index === 0 ? "text-neon-green font-semibold" : "text-neon-cyan"}>
                {paragraph.highlight}
              </span>
              {paragraph.after}
            </p>
          ))}
        </div>

        <div className="reveal-up bg-card p-6 pixel-border-magenta">
          <div className="font-pixel text-[10px] text-neon-magenta mb-4">
            ▮ {copy.about.statsLabel}
          </div>
          <ul className="font-mono-retro text-lg space-y-2">
            {copy.about.stats.map((stat, index) => (
              <li key={stat.label} className="flex justify-between gap-4">
                <span>{stat.label}</span>
                <span className={`${statColor[index]} ${stat.pulse ? "animate-pulse" : ""}`}>
                  {stat.pulse ? "● " : ""}
                  {stat.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}

const statColor = [
  "text-neon-green",
  "text-neon-cyan",
  "text-neon-yellow",
  "text-neon-magenta",
  "text-neon-green",
] as const;
