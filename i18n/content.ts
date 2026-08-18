import { AboutCard, ExperienceItem, Language, Project, SkillCategory } from '../types';

interface NavContent {
  home: string;
  about: string;
  skills: string;
  experience: string;
  projects: string;
  contact: string;
  hire: string;
}

interface HeroContent {
  badge: string;
  titleLine1: string;
  titleHighlight: string;
  titleLine2: string;
  subtitle: string;
  ctaProjects: string;
  ctaAbout: string;
  stack: string[];
  cardDeployLabel: string;
  cardDeployValue: string;
  cardAiLabel: string;
  cardAiValue: string;
}

interface AboutContent {
  heading: string;
  subheading: string;
  cards: AboutCard[];
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
  viewCase: string;
  close: string;
  problemLabel: string;
  methodologyLabel: string;
  resultsLabel: string;
  previewLabel: string;
  openNewTab: string;
  items: Project[];
}

interface ContactContent {
  heading: string;
  subheading: string;
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
  hero: HeroContent;
  about: AboutContent;
  experience: ExperienceContent;
  skills: SkillsContent;
  projects: ProjectsContent;
  contact: ContactContent;
  footer: FooterContent;
  chat: ChatContent;
  systemPrompt: string;
}

export const CONTENT: Record<Language, Content> = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      skills: 'Habilidades',
      experience: 'Experiência',
      projects: 'Projetos',
      contact: 'Contato',
      hire: 'Contrate-me',
    },
    hero: {
      badge: 'Disponível para novos projetos',
      titleLine1: 'Da análise de dados',
      titleHighlight: 'ao Full Stack',
      titleLine2: 'orquestrando IA.',
      subtitle:
        'Olá, sou o André Vieira. Desenvolvedor Full Stack que evoluiu da análise de dados para produtos digitais completos — dirigindo agentes de IA (Claude Code, LangChain) para arquitetar, construir e revisar soluções de ponta a ponta.',
      ctaProjects: 'Ver Projetos',
      ctaAbout: 'Sobre Mim',
      stack: ['React', 'Node.js', 'PostgreSQL'],
      cardDeployLabel: 'Deploy',
      cardDeployValue: 'Node.js + VPS',
      cardAiLabel: 'IA',
      cardAiValue: 'Agentes orquestrados',
    },
    about: {
      heading: 'Sobre Mim',
      subheading: 'Uma trajetória que começou nos dados e evoluiu para o desenvolvimento full stack.',
      cards: [
        {
          icon: 'briefcase',
          title: 'Experiência',
          subtitle: 'We.Go Smart Business',
          description:
            'Evoluí de Analista de Dados para Desenvolvedor Full Stack em menos de um ano, construindo aplicações completas com Node.js, React e PostgreSQL, do levantamento de requisitos ao deploy em VPS.',
        },
        {
          icon: 'bot',
          title: 'Orquestração de IA',
          subtitle: 'Claude Code & LangChain',
          description:
            'Diferencial: dirijo agentes de IA para arquitetar, implementar e revisar funcionalidades full stack, atuando como responsável técnico do processo — foco em arquitetura, integração e qualidade.',
        },
        {
          icon: 'graduation',
          title: 'Formação',
          subtitle: 'Engenharia de Software',
          description:
            'Cursando na UniFatecie, com previsão de conclusão em 2027. Uma base sólida em lógica de programação e arquitetura de sistemas que sustenta minha atuação full stack.',
        },
        {
          icon: 'store',
          title: 'Diferenciais',
          subtitle: 'Visão de negócio',
          description:
            'Experiência prévia como Sócio-Proprietário de negócio próprio, com gestão financeira, operacional e de equipe — uma visão de produto que vai além do código.',
        },
      ],
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
      heading: 'Projetos em Destaque',
      subheading: 'Estudos de caso reais demonstrando resolução de problemas de negócio.',
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
      ],
    },
    contact: {
      heading: 'Vamos trabalhar juntos?',
      subheading:
        'Estou pronto para ajudar sua empresa a construir produtos digitais completos. Entre em contato para uma conversa.',
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
É baseado em Curitiba, PR, e está aberto a oportunidades remotas e internacionais.
Responda perguntas sobre sua experiência, habilidades e projetos de forma profissional e concisa.
Se perguntarem sobre contato, informe o email: andre.vieira131987@gmail.com.
`,
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
      hire: 'Hire Me',
    },
    hero: {
      badge: 'Available for new opportunities',
      titleLine1: 'From data analysis',
      titleHighlight: 'to Full Stack',
      titleLine2: 'with AI orchestration.',
      subtitle:
        "Hi, I'm Andre Vieira. A Full Stack Developer who evolved from data analytics into end-to-end digital products — directing AI coding agents (Claude Code, LangChain) to architect, build, and review production-ready solutions.",
      ctaProjects: 'View Projects',
      ctaAbout: 'About Me',
      stack: ['React', 'Node.js', 'PostgreSQL'],
      cardDeployLabel: 'Deploy',
      cardDeployValue: 'Node.js + VPS',
      cardAiLabel: 'AI',
      cardAiValue: 'Agents orchestrated',
    },
    about: {
      heading: 'About Me',
      subheading: 'A journey that started in data and evolved into full-stack development.',
      cards: [
        {
          icon: 'briefcase',
          title: 'Experience',
          subtitle: 'We.Go Smart Business',
          description:
            'I progressed from Data Analyst to Full Stack Developer in under a year, building end-to-end applications with Node.js, React, and PostgreSQL — from requirements gathering to VPS deployment.',
        },
        {
          icon: 'bot',
          title: 'AI Orchestration',
          subtitle: 'Claude Code & LangChain',
          description:
            'My differentiator: I direct AI coding agents to architect, implement, and review full-stack features, acting as the technical lead of the build process — focused on architecture, integration, and quality.',
        },
        {
          icon: 'graduation',
          title: 'Education',
          subtitle: 'Software Engineering',
          description:
            'Currently pursuing a B.S. in Software Engineering at UniFatecie, expected to graduate in 2027 — a solid foundation in programming logic and systems architecture behind my full-stack work.',
        },
        {
          icon: 'store',
          title: 'Differentiators',
          subtitle: 'Business ownership mindset',
          description:
            'Prior experience as co-owner of my own business, handling financial, operational, and team management — a product mindset that goes beyond code.',
        },
      ],
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
      heading: 'Featured Projects',
      subheading: 'Real case studies demonstrating business problem-solving.',
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
      ],
    },
    contact: {
      heading: "Let's work together?",
      subheading:
        "I'm ready to help your company build complete digital products. Reach out for a conversation.",
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
