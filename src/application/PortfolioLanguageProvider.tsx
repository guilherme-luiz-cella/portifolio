import { useEffect, useMemo, useState, type ReactNode } from "react";

import { getPortfolioCopy } from "@/domain/portfolio-copy";
import {
  defaultPortfolioLanguage,
  getNextPortfolioLanguage,
  parsePortfolioLanguage,
  type PortfolioLanguage,
} from "@/domain/portfolio-language";
import {
  PortfolioLanguageContext,
  type PortfolioLanguageContextValue,
} from "./portfolio-language-context";

const storageKey = "glc-portfolio-language";

function readStoredLanguage(): PortfolioLanguage {
  if (typeof window === "undefined") return defaultPortfolioLanguage;

  try {
    return parsePortfolioLanguage(window.localStorage.getItem(storageKey));
  } catch {
    return defaultPortfolioLanguage;
  }
}

export function PortfolioLanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<PortfolioLanguage>(readStoredLanguage);

  useEffect(() => {
    document.documentElement.lang = language;

    try {
      window.localStorage.setItem(storageKey, language);
    } catch {
      // Language switching should keep working even when storage is blocked.
    }
  }, [language]);

  const value = useMemo<PortfolioLanguageContextValue>(
    () => ({
      language,
      copy: getPortfolioCopy(language),
      setLanguage,
      toggleLanguage: () => setLanguage((current) => getNextPortfolioLanguage(current)),
    }),
    [language],
  );

  return (
    <PortfolioLanguageContext.Provider value={value}>{children}</PortfolioLanguageContext.Provider>
  );
}
