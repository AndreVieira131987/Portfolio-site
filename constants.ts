import { Project, Skill } from './types';

// Images updated to point to local assets.
// Note: Ensure 'logo.png' and 'profile.png' are placed in your public/assets folder or root public folder.
export const IMAGES = {
  PROFILE: "/profile.png", 
  LOGO: "/logo.png",
  HERO_BG: "https://picsum.photos/1920/1080?blur=5" 
};

export const CONTACT_INFO = {
  EMAIL: "andre.vieira131987@gmail.com",
  PHONE: "(41) 9 9966-9466",
  LOCATION: "Curitiba - PR",
  LINKEDIN: "https://www.linkedin.com/in/andre-vieira-81192b264/", // Placeholder
  GITHUB: "https://github.com/AndreVieira131987" // Placeholder
};

export const SKILLS_DATA: Skill[] = [
  { name: 'Power BI', level: 91, category: 'Hard', fullMark: 100 },
  { name: 'Análise de Dados', level: 84, category: 'Hard', fullMark: 100 },
  { name: 'Excel', level: 79, category: 'Hard', fullMark: 100 },
  { name: 'Python', level: 65, category: 'Tech', fullMark: 100 },
  { name: 'MySQL', level: 70, category: 'Tech', fullMark: 100 },
  { name: 'Storytelling', level: 88, category: 'Soft', fullMark: 100 },
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-01',
    title: 'Dashboard Comercial & Vendas',
    category: 'Business Intelligence',
    problem: 'Necessidade de centralizar indicadores de performance de vendas dispersos em múltiplas planilhas.',
    tools: ['Power BI', 'DAX', 'Excel'],
    methodology: 'ETL realizado no Power Query para unificação das fontes. Modelagem Star Schema para performance. Criação de medidas DAX para YoY e MoM.',
    results: 'Aumento de 20% na velocidade de tomada de decisão da diretoria através de visualização centralizada.',
    thumbnailUrl: 'https://i.ibb.co/bgkbXJ65/image-38.png',
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiODBjOWNjZGUtZmRiNC00YjQ4LTk4MmEtMjEzMGE5MDhkOTkwIiwidCI6Ijk1YzJlNTU0LTY0YWQtNGM2OC05MDVmLTNhOGM2OThiNjc1OCJ9'
  },
  {
    id: 'proj-02',
    title: 'Em Breve',
    category: 'Em Breve',
    problem: '',
    tools: [''],
    methodology: '',
    results: '',
    thumbnailUrl: 'https://picsum.photos/800/600?random=2',
    // No embed for this one, just a case study
  }
];

export const SYSTEM_PROMPT = `
You are an AI assistant for Andre Vieira's portfolio website. 
Andre is a Data Analyst with experience at We.Go Smart Business.
He is currently studying Software Engineering at UniFatecie (2023-2027).
His top skills are Power BI (91%), Data Analysis (84%), and Excel (79%).
He values creativity, punctuality, and transforming raw data into actionable business strategies.
He is based in Curitiba, PR.
Answer questions about his experience, skills, and projects professionally and concisely.
If asked about contact, provide his email: ${CONTACT_INFO.EMAIL}.
`;