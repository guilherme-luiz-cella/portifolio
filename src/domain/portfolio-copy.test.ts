import { describe, expect, it } from "vitest";

import { getPortfolioCopy } from "./portfolio-copy";
import { portfolioLanguages } from "./portfolio-language";

describe("portfolio copy", () => {
  it("keeps required navigation ids available for every language", () => {
    for (const language of portfolioLanguages) {
      expect(getPortfolioCopy(language).nav.map((link) => link.id)).toEqual([
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ]);
    }
  });

  it("returns translated labels for Brazilian Portuguese", () => {
    const copy = getPortfolioCopy("pt-BR");

    expect(copy.hero.primaryAction).toBe("APERTE START");
    expect(copy.projects.problem).toBe("PROBLEMA");
    expect(copy.footer.rights).toBe("Todos os direitos reservados");
  });
});
