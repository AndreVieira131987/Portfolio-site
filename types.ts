export type Language = 'pt' | 'en';

export interface Project {
  id: string;
  title: string;
  category: string;
  problem: string;
  tools: string[];
  methodology: string;
  results: string;
  embedUrl?: string;
  thumbnailUrl: string;
}

export type IconKey =
  | 'code'
  | 'server'
  | 'database'
  | 'bot'
  | 'users'
  | 'briefcase'
  | 'graduation'
  | 'store'
  | 'package'
  | 'lightbulb';

export interface SkillCategory {
  icon: IconKey;
  title: string;
  items: string[];
}

export interface AboutCard {
  icon: IconKey;
  title: string;
  subtitle: string;
  description: string;
}

export interface ExperienceItem {
  icon: IconKey;
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
