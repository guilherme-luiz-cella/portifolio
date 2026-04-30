import { usePortfolioLanguage } from "@/application/portfolio-language-context";
import { portfolioLanguageLabels } from "@/domain/portfolio-language";

export function LanguageSwitch() {
  const { language, copy, setLanguage } = usePortfolioLanguage();

  return (
    <div
      className="flex items-center gap-1 bg-card px-1 py-1 pixel-border-cyan"
      aria-label={copy.languageSwitch.ariaLabel}
      title={copy.languageSwitch.title}
    >
      {Object.entries(portfolioLanguageLabels).map(([value, label]) => {
        const selected = value === language;

        return (
          <button
            key={value}
            type="button"
            onClick={() => setLanguage(value as keyof typeof portfolioLanguageLabels)}
            aria-pressed={selected}
            className={`font-pixel text-[8px] px-2 py-2 transition-colors ${
              selected
                ? "bg-neon-cyan text-primary-foreground"
                : "text-neon-cyan hover:bg-muted hover:text-neon-yellow"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
