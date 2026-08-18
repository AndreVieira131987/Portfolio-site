import React from 'react';
import {
  Briefcase,
  Bot,
  Code2,
  Database,
  GraduationCap,
  Layers,
  Lightbulb,
  MessageCircle,
  Package,
  Smile,
  Store,
  Users2,
  Workflow,
  Zap,
} from 'lucide-react';
import { IconKey } from '../types';

const ICONS: Record<IconKey, React.ComponentType<{ size?: number; className?: string }>> = {
  code: Code2,
  server: Code2,
  database: Database,
  bot: Bot,
  users: Users2,
  briefcase: Briefcase,
  graduation: GraduationCap,
  store: Store,
  package: Package,
  lightbulb: Lightbulb,
  zap: Zap,
  message: MessageCircle,
  smile: Smile,
  layers: Layers,
  workflow: Workflow,
};

interface IconProps {
  icon: IconKey;
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ icon, size = 24, className }) => {
  const Component = ICONS[icon];
  return <Component size={size} className={className} />;
};

export default Icon;
