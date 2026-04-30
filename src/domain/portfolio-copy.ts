import type { PortfolioLanguage } from "./portfolio-language";

type SectionCopy = {
  label: string;
  title: string;
};

export type PortfolioCopy = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  notFound: {
    title: string;
    description: string;
    action: string;
  };
  nav: Array<{ id: string; label: string }>;
  languageSwitch: {
    ariaLabel: string;
    title: string;
  };
  boot: {
    title: string;
    line: string;
    detail: string;
    loadingLabel: string;
    ready: string;
  };
  hero: {
    status: string;
    role: string;
    typed: string;
    primaryAction: string;
    contactAction: string;
    avatarLabel: string;
  };
  about: SectionCopy & {
    bioLabel: string;
    paragraphs: Array<{
      before?: string;
      highlight?: string;
      after?: string;
    }>;
    statsLabel: string;
    stats: Array<{ label: string; value: string; pulse?: boolean }>;
  };
  skills: SectionCopy & {
    groups: Array<{
      title: string;
      accent: "green" | "cyan" | "magenta" | "yellow";
      icon: string;
      skills: string[];
    }>;
    maxLevel: string;
  };
  projects: SectionCopy & {
    problem: string;
    role: string;
    features: string;
    viewProject: string;
    code: string;
    items: Array<{
      name: string;
      code: string;
      accent: "green" | "cyan" | "magenta" | "yellow";
      summary: string;
      problem: string;
      role: string;
      tech: string[];
      features: string[];
      projectUrl?: string;
      codeUrl?: string;
    }>;
  };
  experience: SectionCopy & {
    timeline: Array<{
      level: string;
      title: string;
      place: string;
      period: string;
      desc: string;
      accent: "green" | "cyan" | "magenta";
    }>;
  };
  contact: SectionCopy & {
    transmission: string;
    heading: string;
    body: string;
    facts: Array<{ label: string; value: string; highlight?: boolean }>;
    cards: {
      email: string;
      linkedin: string;
      github: string;
    };
  };
  footer: {
    stack: string;
    rights: string;
    gameOver: string;
  };
};

export const portfolioCopy: Record<PortfolioLanguage, PortfolioCopy> = {
  en: {
    meta: {
      title: "Guilherme Luiz Cella - Back-End Developer Portfolio",
      description:
        "Back-End Developer building reliable systems with Laravel, PHP, MySQL and APIs. Explore projects, skills and experience.",
      ogTitle: "Guilherme Luiz Cella - Back-End Developer",
      ogDescription:
        "8-bit Viking portfolio of a Back-End Developer forging reliable Laravel, PHP, MySQL and API systems.",
    },
    notFound: {
      title: "Page not found",
      description: "The page you're looking for doesn't exist or has been moved.",
      action: "Go home",
    },
    nav: [
      { id: "home", label: "HOME" },
      { id: "about", label: "ABOUT" },
      { id: "skills", label: "SKILLS" },
      { id: "projects", label: "PROJECTS" },
      { id: "experience", label: "EXP" },
      { id: "contact", label: "CONTACT" },
    ],
    languageSwitch: {
      ariaLabel: "Switch portfolio language",
      title: "Language",
    },
    boot: {
      title: "GLC-RUNE OS v1.0",
      line: "Lighting the longhouse",
      detail: "Sharpening APIs... raising sails... ok",
      loadingLabel: "Loading",
      ready: "RAISE SHIELD WHEN READY",
    },
    hero: {
      status: "JARL 1 - READY",
      role: "< BACK-END DEVELOPER />",
      typed: "Forging reliable systems with Laravel, PHP, MySQL, and APIs.",
      primaryAction: "RAISE SHIELD",
      contactAction: "CONTACT ME",
      avatarLabel: "8-bit Viking avatar of Guilherme",
    },
    about: {
      label: "RUNE 01",
      title: "ABOUT THE JARL",
      bioLabel: "SAGA LOG",
      paragraphs: [
        {
          before: "I'm a ",
          highlight: "Back-End Developer",
          after:
            " passionate about building clean, efficient, and reliable systems. I work mainly with Laravel, PHP, MySQL, and APIs - crafting the invisible engines that make web products actually work.",
        },
        {
          before: "I also bring practical ",
          highlight: "technical support",
          after:
            " experience, which helps me understand real user problems and design solutions that hold up in production - not just in theory.",
        },
      ],
      statsLabel: "STATS",
      stats: [
        { label: "CLASS", value: "Back-End Dev" },
        { label: "WEAPON", value: "Laravel" },
        { label: "SHIELD", value: "MySQL" },
        { label: "SPECIAL", value: "APIs" },
        { label: "STATUS", value: "ONLINE", pulse: true },
      ],
    },
    skills: {
      label: "INVENTORY",
      title: "EQUIPPED TECH STACK",
      groups: [
        {
          title: "BACK-END",
          accent: "green",
          icon: "⚙",
          skills: ["PHP", "Laravel", "REST APIs", "MVC", "Auth", "Validation"],
        },
        {
          title: "DATABASE",
          accent: "cyan",
          icon: "▤",
          skills: ["MySQL", "Relational Modeling", "Migrations", "Queries", "Indexing"],
        },
        {
          title: "TOOLS",
          accent: "yellow",
          icon: "✦",
          skills: ["Git", "GitHub", "Postman", "Composer", "Docker"],
        },
        {
          title: "SOFT SKILLS",
          accent: "magenta",
          icon: "❖",
          skills: [
            "Debugging",
            "Problem Solving",
            "Tech Support",
            "Documentation",
            "Communication",
          ],
        },
      ],
      maxLevel: "LV. MAX",
    },
    projects: {
      label: "MISSIONS",
      title: "FEATURED PROJECTS",
      problem: "PROBLEM",
      role: "ROLE",
      features: "FEATURES",
      viewProject: "VIEW PROJECT",
      code: "CODE",
      items: [
        {
          name: "OWLPINE",
          code: "LVL 01",
          accent: "green",
          summary:
            "A web platform for Owlpine with a focused public presence and clear service positioning.",
          problem:
            "The business needed a professional online touchpoint that made the brand easy to discover and contact.",
          role: "Built the web experience, structured the project presentation and connected the public project link.",
          tech: ["React", "TypeScript", "Vite", "Tailwind"],
          features: [
            "Public landing page",
            "Responsive layout",
            "Brand presentation",
            "External project link",
          ],
          projectUrl: "https://owlpine.app/",
        },
        {
          name: "AUTENTIQUE",
          code: "LVL 02",
          accent: "cyan",
          summary:
            "Digital signature and document workflow platform for secure, legally valid online agreements.",
          problem:
            "Companies need to send, sign and manage documents without manual paperwork or fragmented tracking.",
          role: "Worked on production web systems around document workflows, API behavior and user-facing reliability.",
          tech: ["Laravel", "PHP", "MySQL", "Angular", "APIs"],
          features: [
            "Document workflows",
            "Digital signatures",
            "API integrations",
            "Production support",
          ],
          projectUrl: "https://www.autentique.com.br/",
        },
        {
          name: "TASK MANAGEMENT API",
          code: "LVL 03",
          accent: "magenta",
          summary:
            "A Laravel REST API to create, update, complete and delete tasks with full validation and auth.",
          problem:
            "Teams needed a simple, reliable API to integrate task tracking into multiple front-ends.",
          role: "Designed schema, built endpoints, implemented auth and request validation.",
          tech: ["Laravel", "PHP", "MySQL", "JWT", "Postman"],
          features: ["CRUD endpoints", "Token auth", "Validation rules", "Status filters"],
        },
        {
          name: "SUPPORT TICKET SYSTEM",
          code: "LVL 04",
          accent: "yellow",
          summary:
            "Ticketing platform inspired by real technical support workflows - categories, priorities and SLAs.",
          problem: "Support teams losing context between channels and missing follow-ups.",
          role: "Built ticket lifecycle, assignment logic and notification triggers.",
          tech: ["Laravel", "MySQL", "Blade", "Eloquent"],
          features: ["Priority queue", "Assignments", "Status timeline", "Comments thread"],
        },
        {
          name: "DOCUMENT MANAGEMENT",
          code: "LVL 05",
          accent: "green",
          summary:
            "Back-end for document uploads with metadata, permissions and status tracking per record.",
          problem: "Files scattered across folders with no audit trail or access control.",
          role: "Implemented storage layer, permissions matrix and metadata indexing.",
          tech: ["Laravel", "MySQL", "Storage", "Policies"],
          features: ["Upload pipeline", "Role permissions", "Versioning", "Audit log"],
        },
        {
          name: "CRM / CLIENT SYSTEM",
          code: "LVL 06",
          accent: "cyan",
          summary:
            "Lightweight CRM to manage customer records, notes, tags and quick filters for sales teams.",
          problem: "Spreadsheets couldn't keep up with growing client data and team collaboration.",
          role: "Modeled relations, built filters and search, exposed REST endpoints.",
          tech: ["Laravel", "MySQL", "REST", "Tailwind"],
          features: ["Customer CRUD", "Notes & tags", "Advanced filters", "Export"],
        },
      ],
    },
    experience: {
      label: "JOURNEY",
      title: "LEVEL PROGRESSION",
      timeline: [
        {
          level: "LV. 03",
          title: "Back-End Developer",
          place: "Current Focus",
          period: "2024 - Present",
          desc: "Building APIs, web systems and database-driven apps with Laravel, PHP and MySQL. Designing reliable architectures and improving system performance.",
          accent: "green",
        },
        {
          level: "LV. 02",
          title: "Development & Technical Support",
          place: "Hybrid Role",
          period: "Earlier",
          desc: "Worked across development and tech support - diagnosing real user issues, writing fixes and shipping improvements that closed tickets at the source.",
          accent: "cyan",
        },
        {
          level: "LV. 01",
          title: "Foundations & Self-Study",
          place: "Continuous Learning",
          period: "Ongoing",
          desc: "Deep study of PHP, Laravel ecosystem, REST API design, relational databases and clean code practices through projects and documentation.",
          accent: "magenta",
        },
      ],
    },
    contact: {
      label: "FROST GATE",
      title: "START THE NEXT RAID",
      transmission: "RUNE MESSAGE",
      heading: "LET'S BUILD\nSOMETHING GREAT",
      body: "Open to back-end roles, freelance missions and collaboration on ambitious systems. Reach out - I respond fast.",
      facts: [
        { label: "loc", value: "Brazil - Remote OK" },
        { label: "status", value: "Available", highlight: true },
        { label: "reply", value: "< 24h" },
      ],
      cards: {
        email: "EMAIL",
        linkedin: "LINKEDIN",
        github: "GITHUB",
      },
    },
    footer: {
      stack: "Back-End Developer - Laravel - PHP - MySQL",
      rights: "All rights reserved",
      gameOver: "SAGA SAVED - INSERT RUNE TO CONTINUE",
    },
  },
  "pt-BR": {
    meta: {
      title: "Guilherme Luiz Cella - Portfolio de Desenvolvedor Back-End",
      description:
        "Desenvolvedor Back-End criando sistemas confiaveis com Laravel, PHP, MySQL e APIs. Explore projetos, habilidades e experiencia.",
      ogTitle: "Guilherme Luiz Cella - Desenvolvedor Back-End",
      ogDescription:
        "Portfolio Viking 8-bit de um Desenvolvedor Back-End forjando sistemas confiaveis com Laravel, PHP, MySQL e APIs.",
    },
    notFound: {
      title: "Pagina nao encontrada",
      description: "A pagina que voce procura nao existe ou foi movida.",
      action: "Voltar ao inicio",
    },
    nav: [
      { id: "home", label: "INICIO" },
      { id: "about", label: "SOBRE" },
      { id: "skills", label: "SKILLS" },
      { id: "projects", label: "PROJETOS" },
      { id: "experience", label: "EXP" },
      { id: "contact", label: "CONTATO" },
    ],
    languageSwitch: {
      ariaLabel: "Alternar idioma do portfolio",
      title: "Idioma",
    },
    boot: {
      title: "GLC-RUNE OS v1.0",
      line: "Acendendo a longhouse",
      detail: "Afiando APIs... erguendo velas... ok",
      loadingLabel: "Carregando",
      ready: "ERGA O ESCUDO QUANDO PRONTO",
    },
    hero: {
      status: "JARL 1 - PRONTO",
      role: "< DESENVOLVEDOR BACK-END />",
      typed: "Forjando sistemas confiaveis com Laravel, PHP, MySQL e APIs.",
      primaryAction: "ERGA O ESCUDO",
      contactAction: "FALE COMIGO",
      avatarLabel: "Avatar Viking 8-bit do Guilherme",
    },
    about: {
      label: "RUNE 01",
      title: "SOBRE O JARL",
      bioLabel: "REGISTRO DA SAGA",
      paragraphs: [
        {
          before: "Sou ",
          highlight: "Desenvolvedor Back-End",
          after:
            " focado em criar sistemas limpos, eficientes e confiaveis. Trabalho principalmente com Laravel, PHP, MySQL e APIs - construindo os motores invisiveis que fazem produtos web funcionarem de verdade.",
        },
        {
          before: "Tambem trago experiencia pratica em ",
          highlight: "suporte tecnico",
          after:
            " o que me ajuda a entender problemas reais de usuarios e desenhar solucoes que se sustentam em producao - nao apenas na teoria.",
        },
      ],
      statsLabel: "STATUS",
      stats: [
        { label: "CLASSE", value: "Back-End Dev" },
        { label: "ARMA", value: "Laravel" },
        { label: "ESCUDO", value: "MySQL" },
        { label: "ESPECIAL", value: "APIs" },
        { label: "ESTADO", value: "ONLINE", pulse: true },
      ],
    },
    skills: {
      label: "INVENTARIO",
      title: "STACK EQUIPADA",
      groups: [
        {
          title: "BACK-END",
          accent: "green",
          icon: "⚙",
          skills: ["PHP", "Laravel", "REST APIs", "MVC", "Auth", "Validacao"],
        },
        {
          title: "BANCO DE DADOS",
          accent: "cyan",
          icon: "▤",
          skills: ["MySQL", "Modelagem relacional", "Migrations", "Queries", "Indexacao"],
        },
        {
          title: "FERRAMENTAS",
          accent: "yellow",
          icon: "✦",
          skills: ["Git", "GitHub", "Postman", "Composer", "Docker"],
        },
        {
          title: "SOFT SKILLS",
          accent: "magenta",
          icon: "❖",
          skills: [
            "Debug",
            "Resolucao de problemas",
            "Suporte tecnico",
            "Documentacao",
            "Comunicacao",
          ],
        },
      ],
      maxLevel: "LV. MAX",
    },
    projects: {
      label: "MISSOES",
      title: "PROJETOS EM DESTAQUE",
      problem: "PROBLEMA",
      role: "PAPEL",
      features: "RECURSOS",
      viewProject: "VER PROJETO",
      code: "CODIGO",
      items: [
        {
          name: "OWLPINE",
          code: "LVL 01",
          accent: "green",
          summary:
            "Uma plataforma web para a Owlpine com presenca publica focada e posicionamento claro de servicos.",
          problem:
            "O negocio precisava de um ponto de contato profissional que tornasse a marca facil de encontrar e acionar.",
          role: "Construi a experiencia web, organizei a apresentacao do projeto e conectei o link publico.",
          tech: ["React", "TypeScript", "Vite", "Tailwind"],
          features: [
            "Landing page publica",
            "Layout responsivo",
            "Apresentacao da marca",
            "Link externo",
          ],
          projectUrl: "https://owlpine.app/",
        },
        {
          name: "AUTENTIQUE",
          code: "LVL 02",
          accent: "cyan",
          summary:
            "Plataforma de assinatura digital e fluxo de documentos para acordos online seguros e validos.",
          problem:
            "Empresas precisam enviar, assinar e gerenciar documentos sem papelada manual ou acompanhamento fragmentado.",
          role: "Atuei em sistemas web de producao ligados a fluxos de documentos, APIs e confiabilidade para usuarios.",
          tech: ["Laravel", "PHP", "MySQL", "Angular", "APIs"],
          features: [
            "Fluxos de documentos",
            "Assinaturas digitais",
            "Integracoes via API",
            "Suporte em producao",
          ],
          projectUrl: "https://www.autentique.com.br/",
        },
        {
          name: "TASK MANAGEMENT API",
          code: "LVL 03",
          accent: "magenta",
          summary:
            "Uma API REST em Laravel para criar, atualizar, concluir e remover tarefas com validacao e auth.",
          problem:
            "Times precisavam de uma API simples e confiavel para integrar controle de tarefas em multiplos front-ends.",
          role: "Modelei o schema, construi endpoints, implementei autenticacao e validacao de requests.",
          tech: ["Laravel", "PHP", "MySQL", "JWT", "Postman"],
          features: [
            "Endpoints CRUD",
            "Auth por token",
            "Regras de validacao",
            "Filtros de status",
          ],
        },
        {
          name: "SUPPORT TICKET SYSTEM",
          code: "LVL 04",
          accent: "yellow",
          summary:
            "Sistema de tickets inspirado em fluxos reais de suporte tecnico - categorias, prioridades e SLAs.",
          problem: "Times de suporte perdiam contexto entre canais e deixavam follow-ups passar.",
          role: "Construi ciclo de vida do ticket, logica de atribuicao e gatilhos de notificacao.",
          tech: ["Laravel", "MySQL", "Blade", "Eloquent"],
          features: [
            "Fila por prioridade",
            "Atribuicoes",
            "Timeline de status",
            "Thread de comentarios",
          ],
        },
        {
          name: "DOCUMENT MANAGEMENT",
          code: "LVL 05",
          accent: "green",
          summary:
            "Back-end para uploads de documentos com metadados, permissoes e status por registro.",
          problem:
            "Arquivos ficavam espalhados em pastas, sem trilha de auditoria ou controle de acesso.",
          role: "Implementei camada de storage, matriz de permissoes e indexacao de metadados.",
          tech: ["Laravel", "MySQL", "Storage", "Policies"],
          features: ["Pipeline de upload", "Permissoes por papel", "Versionamento", "Auditoria"],
        },
        {
          name: "CRM / CLIENT SYSTEM",
          code: "LVL 06",
          accent: "cyan",
          summary:
            "CRM leve para gerenciar clientes, notas, tags e filtros rapidos para times comerciais.",
          problem:
            "Planilhas nao acompanhavam o crescimento dos dados de clientes e da colaboracao do time.",
          role: "Modelei relacoes, construi filtros e busca, e expus endpoints REST.",
          tech: ["Laravel", "MySQL", "REST", "Tailwind"],
          features: ["CRUD de clientes", "Notas e tags", "Filtros avancados", "Exportacao"],
        },
      ],
    },
    experience: {
      label: "JORNADA",
      title: "PROGRESSAO DE LEVEL",
      timeline: [
        {
          level: "LV. 03",
          title: "Desenvolvedor Back-End",
          place: "Foco atual",
          period: "2024 - Presente",
          desc: "Construindo APIs, sistemas web e apps orientados por banco de dados com Laravel, PHP e MySQL. Desenhando arquiteturas confiaveis e melhorando performance.",
          accent: "green",
        },
        {
          level: "LV. 02",
          title: "Desenvolvimento & Suporte Tecnico",
          place: "Papel hibrido",
          period: "Anterior",
          desc: "Atuei entre desenvolvimento e suporte tecnico - diagnosticando problemas reais de usuarios, escrevendo correcoes e entregando melhorias que fechavam tickets na origem.",
          accent: "cyan",
        },
        {
          level: "LV. 01",
          title: "Fundamentos & Autoestudo",
          place: "Aprendizado continuo",
          period: "Continuo",
          desc: "Estudo profundo de PHP, ecossistema Laravel, design de APIs REST, bancos relacionais e clean code por meio de projetos e documentacao.",
          accent: "magenta",
        },
      ],
    },
    contact: {
      label: "PORTAO DE GELO",
      title: "INICIE A PROXIMA RAID",
      transmission: "MENSAGEM RUNICA",
      heading: "VAMOS CONSTRUIR\nALGO GRANDE",
      body: "Aberto a vagas back-end, missoes freelance e colaboracao em sistemas ambiciosos. Entre em contato - respondo rapido.",
      facts: [
        { label: "loc", value: "Brasil - Remoto OK" },
        { label: "status", value: "Disponivel", highlight: true },
        { label: "resposta", value: "< 24h" },
      ],
      cards: {
        email: "EMAIL",
        linkedin: "LINKEDIN",
        github: "GITHUB",
      },
    },
    footer: {
      stack: "Desenvolvedor Back-End - Laravel - PHP - MySQL",
      rights: "Todos os direitos reservados",
      gameOver: "SAGA SALVA - INSIRA RUNA PARA CONTINUAR",
    },
  },
};

export function getPortfolioCopy(language: PortfolioLanguage): PortfolioCopy {
  return portfolioCopy[language];
}
