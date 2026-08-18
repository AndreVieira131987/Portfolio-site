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
  | 'lightbulb'
  | 'zap'
  | 'message'
  | 'smile'
  | 'layers'
  | 'workflow';

export interface SkillCategory {
  icon: IconKey;
  title: string;
  items: string[];
}

export interface AboutTrait {
  icon: IconKey;
  text: string;
}

export interface ExperienceItem {
  icon: IconKey;
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface ServiceItem {
  icon: IconKey;
  title: string;
  description: string;
  items: string[];
}

export interface ProcessStep {
  number: string;
  category: string;
  title: string;
  description: string;
  meta: string;
}

export interface QuickLink {
  label: string;
  href: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
