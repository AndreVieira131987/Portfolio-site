import React, { useEffect, useState } from 'react';
import { useContent } from '../i18n/LanguageContext';
import { useInView } from '../hooks/useInView';

const DiscoveryIllustration: React.FC = () => (
  <svg viewBox="0 0 300 160" className="w-full h-full" aria-hidden="true">
    <rect x="10" y="10" width="150" height="100" rx="8" className="fill-white/5 stroke-white/15" strokeWidth="1" />
    <rect x="20" y="24" width="80" height="8" rx="2" className="fill-violet-400/60" />
    <rect x="20" y="40" width="120" height="6" rx="2" className="fill-white/20" />
    <rect x="20" y="52" width="100" height="6" rx="2" className="fill-white/10" />
    <rect x="20" y="64" width="110" height="6" rx="2" className="fill-white/10" />
    <rect x="20" y="86" width="50" height="14" rx="7" className="fill-violet-500/40" />

    <rect x="140" y="50" width="150" height="100" rx="8" className="fill-white/5 stroke-white/15" strokeWidth="1" />
    <circle cx="215" cy="80" r="16" className="fill-blue-400/30" />
    <rect x="155" y="104" width="120" height="6" rx="2" className="fill-white/15" />
    <rect x="155" y="116" width="90" height="6" rx="2" className="fill-white/10" />
    <rect x="155" y="128" width="60" height="10" rx="5" className="fill-blue-500/40" />

    <line x1="160" y1="10" x2="220" y2="50" className="stroke-white/20" strokeWidth="1" strokeDasharray="4 3" />
  </svg>
);

const DeployDashboard: React.FC<{ metrics: { label: string; value: string }[]; title: string }> = ({ metrics, title }) => (
  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
    <p className="text-xs text-slate-400 mb-3">{title}</p>
    <div className="space-y-3 mb-4">
      {metrics.map((m) => (
        <div key={m.label} className="flex items-center justify-between text-xs">
          <span className="text-slate-400">{m.label}</span>
          <span className="font-semibold text-emerald-400">{m.value}</span>
        </div>
      ))}
    </div>
    <svg viewBox="0 0 200 50" className="w-full h-12" aria-hidden="true">
      {[8, 20, 14, 30, 22, 38, 28, 44, 34, 46].map((h, i) => (
        <rect key={i} x={i * 20} y={50 - h} width="10" height={h} rx="2" fill="#10B981" opacity={0.4 + (i / 10) * 0.6} />
      ))}
      <polyline
        points="4,42 24,30 44,36 64,20 84,28 104,12 124,22 144,8 164,18 184,6"
        fill="none"
        stroke="#10B981"
        strokeWidth="2"
      />
    </svg>
  </div>
);

const TypingCode: React.FC<{ lines: string[] }> = ({ lines }) => {
  const { ref, isInView } = useInView<HTMLDivElement>(0.4);
  const [displayed, setDisplayed] = useState<string[]>([]);

  useEffect(() => {
    if (!isInView) return;
    let lineIdx = 0;
    let charIdx = 0;
    const result: string[] = [];
    const interval = setInterval(() => {
      if (lineIdx >= lines.length) {
        clearInterval(interval);
        return;
      }
      const currentLine = lines[lineIdx];
      charIdx++;
      result[lineIdx] = currentLine.slice(0, charIdx);
      setDisplayed([...result]);
      if (charIdx >= currentLine.length) {
        lineIdx++;
        charIdx = 0;
      }
    }, 28);
    return () => clearInterval(interval);
  }, [isInView, lines]);

  return (
    <div ref={ref} className="rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0f]">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
      </div>
      <div className="p-4 font-mono text-[11px] sm:text-xs leading-relaxed min-h-[130px]">
        {lines.map((_, i) => (
          <div key={i} className={i === 0 ? 'text-emerald-400' : 'text-slate-400'}>
            {displayed[i]}
            {displayed[i] !== undefined && displayed[i].length < lines[i].length && (
              <span className="inline-block w-1.5 h-3 bg-slate-400 ml-0.5 animate-pulse" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Process: React.FC = () => {
  const { process } = useContent();

  return (
    <section id="process" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{process.heading}</h2>
          <p className="text-slate-400 max-w-xl mx-auto">{process.subheading}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {process.steps.map((step, index) => (
            <div
              key={step.number}
              className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 flex flex-col relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="h-36 mb-5 flex items-center justify-center">
                  {index === 0 && <DiscoveryIllustration />}
                  {index === 1 && <TypingCode lines={process.codeLines} />}
                  {index === 2 && <DeployDashboard metrics={process.metrics} title={process.dashboardTitle} />}
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-violet-400">{step.category}</span>
                  <span className="text-[11px] text-slate-500">{step.meta}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
