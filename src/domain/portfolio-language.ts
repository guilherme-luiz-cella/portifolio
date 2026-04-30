export const portfolioLanguages = ["en", "pt-BR"] as const;

export type PortfolioLanguage = (typeof portfolioLanguages)[number];

export const defaultPortfolioLanguage: PortfolioLanguage = "en";

export const portfolioLanguageLabels: Record<PortfolioLanguage, string> = {
  en: "EN",
  "pt-BR": "PT",
};

export function isPortfolioLanguage(value: string): value is PortfolioLanguage {
  return portfolioLanguages.includes(value as PortfolioLanguage);
}

export function parsePortfolioLanguage(value: string | null | undefined): PortfolioLanguage {
  return value && isPortfolioLanguage(value) ? value : defaultPortfolioLanguage;
}

export function getNextPortfolioLanguage(language: PortfolioLanguage): PortfolioLanguage {
  return language === "en" ? "pt-BR" : "en";
}
