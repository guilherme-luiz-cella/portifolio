import { SectionShell } from "./SectionShell";

const PROJECTS = [
  {
    name: "TASK MANAGEMENT API",
    code: "LVL 01",
    accent: "green" as const,
    summary: "A Laravel REST API to create, update, complete and delete tasks with full validation and auth.",
    problem: "Teams needed a simple, reliable API to integrate task tracking into multiple front-ends.",
    role: "Designed schema, built endpoints, implemented auth and request validation.",
    tech: ["Laravel", "PHP", "MySQL", "JWT", "Postman"],
    features: ["CRUD endpoints", "Token auth", "Validation rules", "Status filters"],
  },
  {
    name: "SUPPORT TICKET SYSTEM",
    code: "LVL 02",
    accent: "cyan" as const,
    summary: "Ticketing platform inspired by real technical support workflows — categories, priorities and SLAs.",
    problem: "Support teams losing context between channels and missing follow-ups.",
    role: "Built ticket lifecycle, assignment logic and notification triggers.",
    tech: ["Laravel", "MySQL", "Blade", "Eloquent"],
    features: ["Priority queue", "Assignments", "Status timeline", "Comments thread"],
  },
  {
    name: "DOCUMENT MANAGEMENT",
    code: "LVL 03",
    accent: "magenta" as const,
    summary: "Back-end for document uploads with metadata, permissions and status tracking per record.",
    problem: "Files scattered across folders with no audit trail or access control.",
    role: "Implemented storage layer, permissions matrix and metadata indexing.",
    tech: ["Laravel", "MySQL", "Storage", "Policies"],
    features: ["Upload pipeline", "Role permissions", "Versioning", "Audit log"],
  },
  {
    name: "CRM / CLIENT SYSTEM",
    code: "LVL 04",
    accent: "yellow" as const,
    summary: "Lightweight CRM to manage customer records, notes, tags and quick filters for sales teams.",
    problem: "Spreadsheets couldn't keep up with growing client data and team collaboration.",
    role: "Modeled relations, built filters and search, exposed REST endpoints.",
    tech: ["Laravel", "MySQL", "REST", "Tailwind"],
    features: ["Customer CRUD", "Notes & tags", "Advanced filters", "Export"],
  },
];

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
  return (
    <SectionShell id="projects" label="MISSIONS" title="FEATURED PROJECTS" accent="magenta">
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((p) => (
          <article key={p.name} className={`reveal-up bg-card p-6 pixel-hover flex flex-col ${accentBorder[p.accent]}`}>
            {/* Cartridge header */}
            <header className="flex items-center justify-between mb-4 gap-3">
              <span className={`font-pixel text-[9px] px-2 py-1 ${accentBg[p.accent]}`}>{p.code}</span>
              <span className="font-pixel text-[9px] text-muted-foreground">★★★★★</span>
            </header>

            <h3 className={`font-pixel text-sm sm:text-base mb-3 ${accentText[p.accent]}`}>{p.name}</h3>
            <p className="font-body text-sm text-foreground mb-4 leading-relaxed">{p.summary}</p>

            <div className="space-y-3 font-body text-xs sm:text-sm mb-5">
              <div>
                <div className="font-pixel text-[9px] text-neon-yellow mb-1">PROBLEM</div>
                <p className="text-muted-foreground">{p.problem}</p>
              </div>
              <div>
                <div className="font-pixel text-[9px] text-neon-cyan mb-1">ROLE</div>
                <p className="text-muted-foreground">{p.role}</p>
              </div>
              <div>
                <div className="font-pixel text-[9px] text-neon-green mb-1">FEATURES</div>
                <ul className="grid grid-cols-2 gap-1 text-muted-foreground">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-neon-green inline-block" />{f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-5">
              {p.tech.map((t) => (
                <span key={t} className="font-mono-retro text-sm px-2 py-0.5 bg-muted text-foreground border border-border">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-auto flex gap-2">
              <a href="#" className="font-pixel text-[9px] px-3 py-2 bg-card text-neon-green pixel-border-green pixel-hover">
                ▶ VIEW PROJECT
              </a>
              <a href="#" className="font-pixel text-[9px] px-3 py-2 bg-card text-neon-cyan pixel-border-cyan pixel-hover">
                &lt;/&gt; CODE
              </a>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
