import { usePortfolioCopy } from "@/application/portfolio-language-context";
import { SectionShell } from "./SectionShell";

const accentText = {
  green: "text-neon-green text-shadow-glow-green",
  cyan: "text-neon-cyan text-shadow-glow-cyan",
  magenta: "text-neon-magenta text-shadow-glow-magenta",
};
const accentBorder = {
  green: "pixel-border-green",
  cyan: "pixel-border-cyan",
  magenta: "pixel-border-magenta",
};
const accentBg = {
  green: "bg-neon-green",
  cyan: "bg-neon-cyan",
  magenta: "bg-neon-magenta",
};

export function Experience() {
  const copy = usePortfolioCopy();

  return (
    <SectionShell
      id="experience"
      label={copy.experience.label}
      title={copy.experience.title}
      accent="yellow"
    >
      <div className="relative">
        {/* Vertical pixel rail */}
        <div
          className="absolute left-3 sm:left-6 top-2 bottom-2 w-1 bg-neon-yellow/40"
          aria-hidden
        />
        <div className="space-y-8">
          {copy.experience.timeline.map((t) => (
            <div key={t.title} className="reveal-up relative pl-12 sm:pl-20">
              <div
                className={`absolute left-0 sm:left-3 top-3 w-7 h-7 ${accentBg[t.accent]}`}
                aria-hidden
              />
              <div className={`bg-card p-5 sm:p-6 ${accentBorder[t.accent]}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className={`font-pixel text-xs sm:text-sm ${accentText[t.accent]}`}>
                    {t.level} — {t.title}
                  </h3>
                  <span className="font-mono-retro text-base text-muted-foreground">
                    {t.period}
                  </span>
                </div>
                <div className="font-pixel text-[9px] text-neon-yellow mb-3">{t.place}</div>
                <p className="font-body text-sm sm:text-base text-foreground leading-relaxed">
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
