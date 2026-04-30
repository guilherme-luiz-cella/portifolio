import { describe, expect, it } from "vitest";

import { getNextPortfolioLanguage, parsePortfolioLanguage } from "./portfolio-language";

describe("portfolio language", () => {
  it("accepts supported languages", () => {
    expect(parsePortfolioLanguage("en")).toBe("en");
    expect(parsePortfolioLanguage("pt-BR")).toBe("pt-BR");
  });

  it("falls back to English for invalid stored values", () => {
    expect(parsePortfolioLanguage("pt")).toBe("en");
    expect(parsePortfolioLanguage(null)).toBe("en");
  });

  it("toggles between English and Brazilian Portuguese", () => {
    expect(getNextPortfolioLanguage("en")).toBe("pt-BR");
    expect(getNextPortfolioLanguage("pt-BR")).toBe("en");
  });
});
