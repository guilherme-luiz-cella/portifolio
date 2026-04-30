import { createContext, useContext } from "react";

import type { PortfolioCopy } from "@/domain/portfolio-copy";
import type { PortfolioLanguage } from "@/domain/portfolio-language";

export type PortfolioLanguageContextValue = {
  language: PortfolioLanguage;
  copy: PortfolioCopy;
  setLanguage: (language: PortfolioLanguage) => void;
  toggleLanguage: () => void;
};

export const PortfolioLanguageContext = createContext<PortfolioLanguageContextValue | null>(null);

export function usePortfolioLanguage() {
  const context = useContext(PortfolioLanguageContext);
  if (!context) {
    throw new Error("usePortfolioLanguage must be used inside PortfolioLanguageProvider");
  }

  return context;
}

export function usePortfolioCopy() {
  return usePortfolioLanguage().copy;
}
