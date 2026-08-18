import React from 'react';
import { useContent } from '../i18n/LanguageContext';

const StatusIndicator: React.FC = () => {
  const { status } = useContent();

  return (
    <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 items-center gap-2 pl-2 pr-4 py-2 rounded-full glass-panel shadow-lg shadow-black/40">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 animate-pulse-glow"></span>
      </span>
      <span className="text-xs font-medium text-slate-200 whitespace-nowrap">{status.badge}</span>
    </div>
  );
};

export default StatusIndicator;
