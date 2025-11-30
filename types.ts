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

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Hard' | 'Soft' | 'Tech';
  fullMark: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
