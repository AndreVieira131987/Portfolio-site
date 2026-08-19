import {
  AboutTrait,
  ExperienceItem,
  Language,
  Project,
  ProcessStep,
  QuickLink,
  ServiceItem,
  SkillCategory,
} from '../types';

interface NavContent {
  work: string;
  about: string;
  skills: string;
  process: string;
  contact: string;
  resumeAria: string;
  hire: string;
}

interface StatusContent {
  badge: string;
}

interface HeroContent {
  headline: string;
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  stats: { value: string; label: string }[];
}

interface TrustedByContent {
  heading: string;
  items: string[];
}

interface ServicesContent {
  heading: string;
  subheading: string;
  items: ServiceItem[];
}

interface AboutContent {
  heading: string;
  kicker: string;
  paragraphs: string[];
  traits: AboutTrait[];
  learnMore: string;
}

interface ExperienceContent {
  heading: string;
  subheading: string;
  items: ExperienceItem[];
}

interface SkillsContent {
  heading: string;
  subheading: string;
  intro: string;
  categories: SkillCategory[];
}

interface ProjectsContent {
  heading: string;
  subheading: string;
  seeAll: string;
  viewCase: string;
  close: string;
  problemLabel: string;
  methodologyLabel: string;
  resultsLabel: string;
  previewLabel: string;
  openNewTab: string;
  items: Project[];
}

interface ProcessContent {
  heading: string;
  subheading: string;
  steps: ProcessStep[];
  codeLines: string[];
  dashboardTitle: string;
  metrics: { label: string; value: string }[];
}

interface ContactContent {
  finalCtaHeading: string;
  finalCtaSubtext: string;
  scheduleCall: string;
  sendMessage: string;
  emailLabel: string;
  phoneLabel: string;
  locationLabel: string;
  location: string;
  formTitle: string;
  formName: string;
  formEmail: string;
  formMessage: string;
  formMessagePlaceholder: string;
  formNamePlaceholder: string;
  formEmailPlaceholder: string;
  formSubmit: string;
}

interface FooterContent {
  rights: string;
  builtWith: string;
  quickLinksHeading: string;
  quickLinks: QuickLink[];
}

interface ChatContent {
  title: string;
  poweredBy: string;
  greeting: string;
  placeholder: string;
  demoMode: string;
  genericError: string;
}

export interface Content {
  nav: NavContent;
  status: StatusContent;
  hero: HeroContent;
  trustedBy: TrustedByContent;
  services: ServicesContent;
  about: AboutContent;
  experience: ExperienceContent;
  skills: SkillsContent;
  projects: ProjectsContent;
  process: ProcessContent;
  contact: ContactContent;
  footer: FooterContent;
  chat: ChatContent;
  systemPrompt: string;
}

export const CONTENT: Record<Language, Content> = {
  pt: {
    nav: {
      work: 'Trabalhos',
      about: 'Sobre',
      skills: 'Habilidades',
      process: 'Processo',
      contact: 'Contato',
      resumeAria: 'Baixar currículo',
      hire: 'Vamos conversar',
    },
    status: {
      badge: 'Disponível para trabalho',
    },
    hero: {
      headline: 'Full Stack Developer',
      subheadline:
        'Construo aplicações completas — de interfaces em React a APIs em Node.js — e dirijo agentes de IA (Claude Code, LangChain) para arquitetar e entregar produtos com mais velocidade e qualidade.',
      ctaPrimary: 'Ver meus projetos',
      ctaSecondary: 'Sobre mim',
      stats: [
        { value: '1+', label: 'Ano como Full Stack' },
        { value: '2', label: 'Projetos entregues' },
        { value: '4+', label: 'Ferramentas de IA orquestradas' },
      ],
    },
    trustedBy: {
      heading: 'Ferramentas que oriento no dia a dia',
      items: ['Claude Code', 'LangChain', 'n8n', 'React', 'Node.js', 'PostgreSQL', 'Power BI', 'TypeScript'],
    },
    services: {
      heading: 'No que posso ajudar',
      subheading: 'Da ideia ao produto no ar, cobrindo o ciclo completo de um projeto digital.',
      items: [
        {
          icon: 'layers',
          title: 'Sites & Landing Pages',
          description: 'Presença digital profissional, rápida e pensada para converter visitantes em clientes.',
          items: ['Design responsivo', 'Otimização para SEO', 'Formulários e integrações', 'Deploy e domínio próprio'],
        },
        {
          icon: 'code',
          title: 'Aplicações Web',
          description: 'Sistemas sob medida, do painel administrativo ao banco de dados.',
          items: ['Painéis e dashboards', 'Autenticação e permissões', 'Integração com APIs', 'Deploy em VPS'],
        },
        {
          icon: 'workflow',
          title: 'Automação de Processos',
          description: 'Fluxos automatizados que eliminam tarefas manuais e repetitivas.',
          items: ['Integrações com n8n', 'Automação de planilhas e relatórios', 'Web scraping', 'Conexão entre sistemas'],
        },
        {
          icon: 'bot',
          title: 'Chatbots & Assistentes de IA',
          description: 'Assistentes virtuais que atendem, qualificam e respondem automaticamente.',
          items: ['Atendimento via WhatsApp', 'Agentes com Claude & LangChain', 'Respostas com base em dados próprios', 'Qualificação de leads'],
        },
      ],
    },
    about: {
      heading: 'Sobre Mim',
      kicker: 'Curioso sobre minha trajetória?',
      paragraphs: [
        'Sou um Desenvolvedor Full Stack que evoluiu da análise de dados para a construção de produtos digitais completos em menos de um ano. Hoje atuo na We.Go Smart Business, onde uni a base sólida em dados a um novo domínio: Node.js, React e PostgreSQL.',
        'Meu diferencial é dirigir agentes de IA — Claude Code, LangChain, n8n — para arquitetar, implementar e revisar funcionalidades, atuando como responsável técnico do processo em vez de codificar linha a linha. Isso acelera a entrega sem abrir mão de arquitetura sólida e qualidade.',
      ],
      traits: [
        { icon: 'zap', text: 'Buscando oportunidades remotas e internacionais' },
        { icon: 'message', text: 'Aberto a colaborações assíncronas com times distribuídos' },
        { icon: 'smile', text: 'Direto, comunicativo e sempre disponível para conversar' },
      ],
      learnMore: 'Ver experiência completa',
    },
    experience: {
      heading: 'Experiência Profissional',
      subheading: 'Uma jornada de evolução constante, da logística à orquestração de agentes de IA.',
      items: [
        {
          icon: 'code',
          role: 'Desenvolvedor Full Stack (evoluiu de Analista de Dados)',
          company: 'We.Go Smart Business',
          period: 'Abril de 2025 – Presente',
          location: 'Remoto',
          bullets: [
            'Evoluiu de Analista de Dados para Desenvolvedor Full Stack em menos de um ano, ampliando o escopo de dashboards analíticos para o desenvolvimento de aplicações completas para clientes.',
            'Orquestra agentes de IA (Claude Code, LangChain) para arquitetar, implementar e revisar funcionalidades full stack, atuando na definição de requisitos e na garantia de qualidade em vez de codificação manual linha a linha.',
            'Desenvolveu backend em Node.js e frontend em React integrados a banco de dados PostgreSQL, com deploy e manutenção em ambiente VPS.',
            'Construiu pipelines de ETL para integração de múltiplas fontes de dados e dashboards Power BI utilizados em decisões estratégicas.',
            'Integrou APIs REST, bancos de dados e ferramentas de BI em soluções unificadas, com levantamento de requisitos junto a clientes e áreas de negócio.',
          ],
        },
        {
          icon: 'package',
          role: 'Almoxarifado / Logística',
          company: 'FRS – Flowthec Engenharia de Ar Condicionado',
          period: '2023 – 2025',
          location: 'Curitiba, PR',
          bullets: [
            'Gestão de estoque, planejamento logístico e controle de materiais.',
            'Organização e padronização de processos internos do almoxarifado.',
          ],
        },
        {
          icon: 'store',
          role: 'Sócio-Proprietário',
          company: 'Padaria Lovi',
          period: '2021 – 2023',
          location: 'Curitiba, PR',
          bullets: [
            'Gestão financeira e operacional de negócio próprio, com liderança de equipe.',
            'Negociação com fornecedores e planejamento estratégico do ponto comercial.',
          ],
        },
      ],
    },
    skills: {
      heading: 'Stack Tecnológico',
      subheading: 'As ferramentas que uso para construir produtos completos, do banco de dados à interface.',
      intro:
        'Combino desenvolvimento full stack com orquestração de agentes de IA para acelerar a entrega sem perder qualidade — complementado pela bagagem sólida em dados que deu início à minha carreira.',
      categories: [
        {
          icon: 'code',
          title: 'Desenvolvimento Full Stack',
          items: ['Node.js', 'React', 'JavaScript / TypeScript', 'PostgreSQL', 'APIs REST', 'Deploy em VPS'],
        },
        {
          icon: 'bot',
          title: 'Orquestração de IA & Automação',
          items: ['Claude Code', 'LangChain', 'n8n', 'OpenAI API', 'Streamlit', 'Prompt Engineering'],
        },
        {
          icon: 'database',
          title: 'Dados & Business Intelligence',
          items: ['Power BI', 'SQL', 'Python (Pandas, NumPy)', 'Processos de ETL', 'Web Scraping'],
        },
        {
          icon: 'users',
          title: 'Gestão & Soft Skills',
          items: ['Liderança de equipes', 'Negociação', 'Planejamento estratégico', 'Comunicação com stakeholders'],
        },
      ],
    },
    projects: {
      heading: 'Trabalhos Selecionados',
      subheading: 'Estudos de caso reais demonstrando resolução de problemas de negócio.',
      seeAll: 'Ver perfil no GitHub',
      viewCase: 'Ver Estudo de Caso',
      close: 'Fechar',
      problemLabel: 'O Problema',
      methodologyLabel: 'Metodologia',
      resultsLabel: 'Resultados',
      previewLabel: 'Prévia do projeto',
      openNewTab: 'Abrir em nova aba',
      items: [
        {
          id: 'proj-01',
          title: 'Dashboard Comercial & Vendas',
          category: 'Business Intelligence',
          problem: 'Necessidade de centralizar indicadores de performance de vendas dispersos em múltiplas planilhas.',
          tools: ['Power BI', 'DAX', 'Excel'],
          methodology:
            'ETL realizado no Power Query para unificação das fontes. Modelagem Star Schema para performance. Criação de medidas DAX para YoY e MoM.',
          results: 'Aumento de 20% na velocidade de tomada de decisão da diretoria através de visualização centralizada.',
          thumbnailUrl: 'https://i.ibb.co/bgkbXJ65/image-38.png',
          embedUrl:
            'https://app.powerbi.com/view?r=eyJrIjoiODBjOWNjZGUtZmRiNC00YjQ4LTk4MmEtMjEzMGE5MDhkOTkwIiwidCI6Ijk1YzJlNTU0LTY0YWQtNGM2OC05MDVmLTNhOGM2OThiNjc1OCJ9',
        },
        {
          id: 'proj-02',
          title: 'Página institucional para Oficina de Lataria e Pintura',
          category: 'Desenvolvimento Web',
          problem: 'Necessidade de uma presença digital profissional para a oficina.',
          tools: ['HTML', 'CSS', 'JavaScript', 'React'],
          methodology:
            'Desenvolvimento responsivo com foco em usabilidade e SEO. Implementação de contato por Whatsapp e localização.',
          results: 'Aumento da visibilidade online e geração de leads através do site.',
          thumbnailUrl: 'https://i.ibb.co/xKsd16qd/Captura-de-tela-2026-01-24-102842.png',
          embedUrl: 'https://oficinamclaren.netlify.app/',
        },
        {
          id: 'proj-03',
          title: 'Mario Kart.JS — Simulador de Corridas',
          category: 'Lógica de Jogos',
          problem:
            'Desafio de programação para simular corridas de Mario Kart, aplicando regras de jogo, aleatoriedade e atributos de personagens em uma lógica de partida completa.',
          tools: ['JavaScript', 'Node.js', 'React', 'Vite'],
          methodology:
            'Motor de jogo em JavaScript puro simulando 5 rodadas de pista aleatória (reta, curva ou confronto), cruzando os atributos de Velocidade, Manobrabilidade e Poder de cada personagem com rolagens de dado — incluindo penalidades (casco, bomba) e bônus de turbo nos confrontos. Depois envolvi a lógica em uma interface React com seleção de personagens e placar em tempo real.',
          results:
            'Projeto de estudo consolidando lógica de programação e regras de jogo, disponibilizado publicamente com interface jogável para dois jogadores.',
          thumbnailUrl: '/projects/mario-kart-thumbnail.png',
          embedUrl: 'https://andrevieiramariokart.netlify.app/',
        },
      ],
    },
    process: {
      heading: 'Como Eu Trabalho',
      subheading: 'Do requisito ao deploy, um fluxo pensado para entregar rápido sem perder qualidade.',
      steps: [
        {
          number: '01',
          category: 'Descoberta & Arquitetura',
          title: 'Entendendo requisitos e desenhando a solução',
          description:
            'Levanto requisitos com clientes e áreas de negócio e desenho a arquitetura — banco de dados, APIs e integrações — antes de escrever a primeira linha de código.',
          meta: 'Semana 1',
        },
        {
          number: '02',
          category: 'Construção & Orquestração',
          title: 'Direcionando agentes de IA para construir',
          description:
            'Oriento o Claude Code e LangChain para implementar as funcionalidades, revisando cada etapa — arquitetura, testes e integração — como responsável técnico do processo.',
          meta: 'Semana 2-3',
        },
        {
          number: '03',
          category: 'Deploy & Monitoramento',
          title: 'Entregando e acompanhando em produção',
          description:
            'Deploy em VPS, documentação técnica da solução e acompanhamento de métricas para garantir estabilidade após o lançamento.',
          meta: 'Semana 4',
        },
      ],
      codeLines: [
        '$ claude-code "implementar API de checkout"',
        '> planejando alterações em 4 arquivos',
        '> escrevendo testes...',
        '> revisão de arquitetura ✓',
        '> todos os testes passaram ✓',
      ],
      dashboardTitle: 'Painel de Deploy',
      metrics: [
        { label: 'Build', value: '100%' },
        { label: 'Uptime', value: '99.9%' },
        { label: 'Tempo de resposta', value: '-35%' },
      ],
    },
    contact: {
      finalCtaHeading: 'Vamos criar algo incrível juntos?',
      finalCtaSubtext:
        'Estou pronto para ajudar sua empresa a construir produtos digitais completos. Entre em contato para uma conversa.',
      scheduleCall: 'Falar no WhatsApp',
      sendMessage: 'Enviar mensagem',
      emailLabel: 'Email',
      phoneLabel: 'WhatsApp / Telefone',
      locationLabel: 'Localização',
      location: 'Curitiba, PR - Brasil',
      formTitle: 'Envie uma mensagem',
      formName: 'Nome',
      formEmail: 'Email',
      formMessage: 'Mensagem',
      formNamePlaceholder: 'Seu nome',
      formEmailPlaceholder: 'seu@email.com',
      formMessagePlaceholder: 'Como posso ajudar no seu projeto?',
      formSubmit: 'Enviar Mensagem',
    },
    footer: {
      rights: 'Todos os direitos reservados.',
      builtWith: 'Desenvolvido com React & TailwindCSS',
      quickLinksHeading: 'Links Rápidos',
      quickLinks: [
        { label: 'Trabalhos', href: '#work' },
        { label: 'Sobre', href: '#about' },
        { label: 'Habilidades', href: '#skills' },
        { label: 'Processo', href: '#process' },
        { label: 'Experiência', href: '#experience' },
        { label: 'Contato', href: '#contact' },
      ],
    },
    chat: {
      title: "Assistente de IA do André",
      poweredBy: 'Powered by Gemini 2.5',
      greeting:
        'Olá! Sou o assistente de IA do André. Posso responder perguntas sobre a experiência dele como Desenvolvedor Full Stack, orquestração de agentes de IA (Claude Code, LangChain) ou sua trajetória em dados. Como posso ajudar?',
      placeholder: 'Pergunte sobre minha experiência...',
      demoMode: 'Modo Demo: Chave de API não configurada. Configure a variável de ambiente API_KEY para conversar com a IA.',
      genericError: 'Desculpe, ocorreu um erro ao conectar com a inteligência artificial. Tente novamente mais tarde.',
    },
    systemPrompt: `
Você é um assistente de IA para o portfólio do André Vieira.
André é um Desenvolvedor Full Stack pleno, com trajetória iniciada na análise de dados (Power BI, SQL, ETL) e evolução acelerada para o desenvolvimento de produtos digitais completos.
Ele atua na We.Go Smart Business, onde evoluiu de Analista de Dados para Desenvolvedor Full Stack em menos de um ano.
Seu diferencial é orquestrar agentes de IA (Claude Code, LangChain, n8n) para arquitetar, construir e revisar soluções full stack, atuando como responsável técnico do processo de desenvolvimento.
Suas principais competências técnicas: Node.js, React, JavaScript/TypeScript, PostgreSQL, APIs REST, deploy em VPS, além de Power BI, SQL e Python vindos da sua base em dados.
Está cursando Engenharia de Software na UniFatecie (previsão de conclusão em 2027).
Está baseado em Curitiba, PR, e está aberto a oportunidades remotas e internacionais.
Responda perguntas sobre sua experiência, habilidades e projetos de forma profissional e concisa.
Se perguntarem sobre contato, informe o email: andre.vieira131987@gmail.com.
`,
  },
  en: {
    nav: {
      work: 'Work',
      about: 'About',
      skills: 'Skills',
      process: 'Process',
      contact: 'Contact',
      resumeAria: 'Download resume',
      hire: "Let's connect",
    },
    status: {
      badge: 'Available for work',
    },
    hero: {
      headline: 'Full Stack Developer',
      subheadline:
        "I build complete applications — from React interfaces to Node.js APIs — and direct AI agents (Claude Code, LangChain) to architect and ship products faster without sacrificing quality.",
      ctaPrimary: 'View my work',
      ctaSecondary: 'About me',
      stats: [
        { value: '1+', label: 'Year as Full Stack' },
        { value: '2', label: 'Projects shipped' },
        { value: '4+', label: 'AI tools orchestrated' },
      ],
    },
    trustedBy: {
      heading: 'Tools I orchestrate daily',
      items: ['Claude Code', 'LangChain', 'n8n', 'React', 'Node.js', 'PostgreSQL', 'Power BI', 'TypeScript'],
    },
    services: {
      heading: 'What I Do',
      subheading: 'From idea to a live product, covering the full cycle of a digital project.',
      items: [
        {
          icon: 'layers',
          title: 'Websites & Landing Pages',
          description: 'A professional, fast digital presence designed to turn visitors into customers.',
          items: ['Responsive design', 'SEO optimization', 'Forms & integrations', 'Deployment & custom domain'],
        },
        {
          icon: 'code',
          title: 'Web Applications',
          description: 'Custom-built systems, from the admin panel to the database.',
          items: ['Dashboards & panels', 'Authentication & permissions', 'API integration', 'VPS deployment'],
        },
        {
          icon: 'workflow',
          title: 'Process Automation',
          description: 'Automated workflows that eliminate manual, repetitive tasks.',
          items: ['n8n integrations', 'Spreadsheet & report automation', 'Web scraping', 'System-to-system connections'],
        },
        {
          icon: 'bot',
          title: 'Chatbots & AI Assistants',
          description: 'Virtual assistants that respond, qualify, and support customers automatically.',
          items: ['WhatsApp support', 'Claude & LangChain-based agents', 'Answers grounded in your own data', 'Lead qualification'],
        },
      ],
    },
    about: {
      heading: 'About Me',
      kicker: 'Curious about my journey?',
      paragraphs: [
        "I'm a Full Stack Developer who evolved from data analytics into building complete digital products in under a year. Today I work at We.Go Smart Business, where I combined a solid data background with a new domain: Node.js, React, and PostgreSQL.",
        'My differentiator is directing AI agents — Claude Code, LangChain, n8n — to architect, implement, and review features, acting as the technical lead of the process rather than coding line by line. This accelerates delivery without giving up solid architecture and quality.',
      ],
      traits: [
        { icon: 'zap', text: 'Looking for remote and international opportunities' },
        { icon: 'message', text: 'Open to asynchronous collaboration with distributed teams' },
        { icon: 'smile', text: 'Direct, communicative, and always up for a conversation' },
      ],
      learnMore: 'See full experience',
    },
    experience: {
      heading: 'Professional Experience',
      subheading: 'A journey of constant growth, from logistics to AI agent orchestration.',
      items: [
        {
          icon: 'code',
          role: 'Full Stack Developer (promoted from Data Analyst)',
          company: 'We.Go Smart Business',
          period: 'April 2025 – Present',
          location: 'Remote',
          bullets: [
            'Progressed from Data Analyst to Full Stack Developer in under a year, expanding scope from analytics dashboards to end-to-end application development for clients.',
            'Direct AI coding agents (Claude Code, LangChain) to architect, implement, and review full-stack features, focusing on requirements definition and quality assurance rather than manual line-by-line coding.',
            'Build and maintain Node.js backend services and React front ends integrated with PostgreSQL, including deployment and upkeep on VPS infrastructure.',
            'Design ETL pipelines to integrate multiple data sources, feeding Power BI dashboards used for executive-level, strategic decisions.',
            'Integrate REST APIs, databases, and BI tools into unified client solutions, gathering requirements directly from stakeholders and business teams.',
          ],
        },
        {
          icon: 'package',
          role: 'Warehouse / Logistics',
          company: 'FRS – Flowthec Air Conditioning Engineering',
          period: '2023 – 2025',
          location: 'Curitiba, Brazil',
          bullets: [
            'Managed inventory, logistics planning, and materials control.',
            'Organized and standardized internal warehouse processes.',
          ],
        },
        {
          icon: 'store',
          role: 'Co-Owner',
          company: 'Padaria Lovi',
          period: '2021 – 2023',
          location: 'Curitiba, Brazil',
          bullets: [
            'Ran financial and operational management of an owned business, leading a small team.',
            'Negotiated with suppliers and led strategic planning for the business.',
          ],
        },
      ],
    },
    skills: {
      heading: 'Technical Stack',
      subheading: 'The tools I use to build complete products, from the database to the interface.',
      intro:
        'I combine full-stack development with AI agent orchestration to accelerate delivery without compromising quality — backed by the solid data background that started my career.',
      categories: [
        {
          icon: 'code',
          title: 'Full Stack Development',
          items: ['Node.js', 'React', 'JavaScript / TypeScript', 'PostgreSQL', 'REST APIs', 'VPS Deployment'],
        },
        {
          icon: 'bot',
          title: 'AI Orchestration & Automation',
          items: ['Claude Code', 'LangChain', 'n8n', 'OpenAI API', 'Streamlit', 'Prompt Engineering'],
        },
        {
          icon: 'database',
          title: 'Data & Business Intelligence',
          items: ['Power BI', 'SQL', 'Python (Pandas, NumPy)', 'ETL Processes', 'Web Scraping'],
        },
        {
          icon: 'users',
          title: 'Management & Soft Skills',
          items: ['Team leadership', 'Negotiation', 'Strategic planning', 'Stakeholder communication'],
        },
      ],
    },
    projects: {
      heading: 'Selected Work',
      subheading: 'Real case studies demonstrating business problem-solving.',
      seeAll: 'See GitHub profile',
      viewCase: 'View Case Study',
      close: 'Close',
      problemLabel: 'The Problem',
      methodologyLabel: 'Methodology',
      resultsLabel: 'Results',
      previewLabel: 'Project preview',
      openNewTab: 'Open in new tab',
      items: [
        {
          id: 'proj-01',
          title: 'Sales & Commercial Dashboard',
          category: 'Business Intelligence',
          problem: 'Need to centralize sales performance indicators scattered across multiple spreadsheets.',
          tools: ['Power BI', 'DAX', 'Excel'],
          methodology:
            'ETL performed in Power Query to unify sources. Star Schema modeling for performance. Created DAX measures for YoY and MoM comparisons.',
          results: 'Increased leadership decision-making speed by 20% through centralized visualization.',
          thumbnailUrl: 'https://i.ibb.co/bgkbXJ65/image-38.png',
          embedUrl:
            'https://app.powerbi.com/view?r=eyJrIjoiODBjOWNjZGUtZmRiNC00YjQ4LTk4MmEtMjEzMGE5MDhkOTkwIiwidCI6Ijk1YzJlNTU0LTY0YWQtNGM2OC05MDVmLTNhOGM2OThiNjc1OCJ9',
        },
        {
          id: 'proj-02',
          title: 'Business Website for an Auto Body & Paint Shop',
          category: 'Web Development',
          problem: 'Need for a professional digital presence for the shop.',
          tools: ['HTML', 'CSS', 'JavaScript', 'React'],
          methodology:
            'Responsive development focused on usability and SEO. Implemented WhatsApp contact and location integration.',
          results: 'Increased online visibility and lead generation through the site.',
          thumbnailUrl: 'https://i.ibb.co/xKsd16qd/Captura-de-tela-2026-01-24-102842.png',
          embedUrl: 'https://oficinamclaren.netlify.app/',
        },
        {
          id: 'proj-03',
          title: 'Mario Kart.JS — Race Simulator',
          category: 'Game Logic',
          problem:
            'A coding challenge to simulate Mario Kart races, applying game rules, randomness, and character attributes in a complete match logic.',
          tools: ['JavaScript', 'Node.js', 'React', 'Vite'],
          methodology:
            "Game engine in plain JavaScript simulating 5 rounds of randomized track segments (straight, curve, or duel), combining each character's Speed, Handling, and Power stats with dice rolls — including duel penalties (shell, bomb) and a turbo bonus chance. Wrapped the engine in a React interface with character selection and a live scoreboard.",
          results:
            'A study project consolidating programming logic and game rules, published with a playable two-player interface.',
          thumbnailUrl: '/projects/mario-kart-thumbnail.png',
          embedUrl: 'https://andrevieiramariokart.netlify.app/',
        },
      ],
    },
    process: {
      heading: 'How I Work',
      subheading: 'From requirement to deploy, a flow built to ship fast without losing quality.',
      steps: [
        {
          number: '01',
          category: 'Discovery & Architecture',
          title: 'Understanding requirements and designing the solution',
          description:
            'I gather requirements with clients and business teams and design the architecture — database, APIs, and integrations — before writing the first line of code.',
          meta: 'Week 1',
        },
        {
          number: '02',
          category: 'Build & Orchestration',
          title: 'Directing AI agents to build',
          description:
            "I direct Claude Code and LangChain to implement features, reviewing every step — architecture, tests, integration — as the technical lead of the process.",
          meta: 'Week 2-3',
        },
        {
          number: '03',
          category: 'Deploy & Monitoring',
          title: 'Shipping and tracking in production',
          description:
            'Deployment on VPS, technical documentation of the solution, and metrics tracking to ensure stability after launch.',
          meta: 'Week 4',
        },
      ],
      codeLines: [
        '$ claude-code "implement checkout API"',
        '> planning changes across 4 files',
        '> writing tests...',
        '> architecture review ✓',
        '> all tests passed ✓',
      ],
      dashboardTitle: 'Deploy Dashboard',
      metrics: [
        { label: 'Build', value: '100%' },
        { label: 'Uptime', value: '99.9%' },
        { label: 'Response time', value: '-35%' },
      ],
    },
    contact: {
      finalCtaHeading: "Let's create something great together",
      finalCtaSubtext:
        "I'm ready to help your company build complete digital products. Reach out for a conversation.",
      scheduleCall: 'Chat on WhatsApp',
      sendMessage: 'Send a message',
      emailLabel: 'Email',
      phoneLabel: 'WhatsApp / Phone',
      locationLabel: 'Location',
      location: 'Curitiba, Brazil (GMT-3) · Open to remote roles',
      formTitle: 'Send a message',
      formName: 'Name',
      formEmail: 'Email',
      formMessage: 'Message',
      formNamePlaceholder: 'Your name',
      formEmailPlaceholder: 'you@email.com',
      formMessagePlaceholder: 'How can I help with your project?',
      formSubmit: 'Send Message',
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Built with React & TailwindCSS',
      quickLinksHeading: 'Quick Links',
      quickLinks: [
        { label: 'Work', href: '#work' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Process', href: '#process' },
        { label: 'Experience', href: '#experience' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    chat: {
      title: "Andre's AI Assistant",
      poweredBy: 'Powered by Gemini 2.5',
      greeting:
        "Hi! I'm Andre's AI assistant. I can answer questions about his experience as a Full Stack Developer, AI agent orchestration (Claude Code, LangChain), or his background in data. How can I help?",
      placeholder: 'Ask about my experience...',
      demoMode: 'Demo Mode: API Key not configured. Please set the API_KEY environment variable to chat with the AI.',
      genericError: 'Sorry, an error occurred while connecting to the AI. Please try again later.',
    },
    systemPrompt: `
You are an AI assistant for Andre Vieira's portfolio website.
Andre is a mid-level Full Stack Developer who started his career in data analytics (Power BI, SQL, ETL) and rapidly evolved into building complete digital products.
He works at We.Go Smart Business, where he progressed from Data Analyst to Full Stack Developer in under a year.
His differentiator is directing AI coding agents (Claude Code, LangChain, n8n) to architect, build, and review full-stack solutions, acting as the technical lead of the development process.
His core technical skills: Node.js, React, JavaScript/TypeScript, PostgreSQL, REST APIs, VPS deployment, plus Power BI, SQL, and Python from his data background.
He is pursuing a B.S. in Software Engineering at UniFatecie (expected graduation in 2027).
He is based in Curitiba, Brazil, and is open to remote and international opportunities.
Answer questions about his experience, skills, and projects professionally and concisely.
If asked about contact, provide his email: andre.vieira131987@gmail.com.
`,
  },
};
