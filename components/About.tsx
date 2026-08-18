import React from 'react';
import { useContent } from '../i18n/LanguageContext';
import Icon from './iconMap';

const CODE_PREVIEW = [
  { text: 'class FullStackDeveloper {', color: 'text-slate-300' },
  { text: '  background = "data analytics";', color: 'text-slate-400' },
  { text: '  stack = ["Node.js", "React", "PostgreSQL"];', color: 'text-emerald-400' },
  { text: '  agents = ["Claude Code", "LangChain", "n8n"];', color: 'text-violet-400' },
  { text: '', color: '' },
  { text: '  ship() {', color: 'text-slate-300' },
  { text: '    return "production-ready features";', color: 'text-amber-300' },
  { text: '  }', color: 'text-slate-300' },
  { text: '}', color: 'text-slate-300' },
];

const About: React.FC = () => {
  const { about } = useContent();

  return (
    <section id="about" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">{about.heading}</h2>

        <div className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-4 sm:p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* Code editor mockup */}
            <div className="group rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0f] shadow-2xl shadow-black/50">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs text-slate-500 font-mono">andre.ts</span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                {CODE_PREVIEW.map((line, i) => (
                  <div key={i} className={line.color || 'h-4'}>
                    {line.text || ' '}
                  </div>
                ))}
              </div>
            </div>

            {/* Bio content */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">{about.kicker}</h3>
              <div className="w-16 h-1 bg-white/20 rounded-full mb-6"></div>

              <div className="space-y-4 mb-8">
                {about.paragraphs.map((p, i) => (
                  <p key={i} className="text-slate-400 leading-relaxed text-sm md:text-base">
                    {p}
                  </p>
                ))}
              </div>

              <div className="space-y-3 mb-8">
                {about.traits.map((trait) => (
                  <div key={trait.text} className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-violet-300 flex-shrink-0">
                      <Icon icon={trait.icon} size={16} />
                    </span>
                    <span className="text-sm text-slate-300">{trait.text}</span>
                  </div>
                ))}
              </div>

              <a
                href="#experience"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/20 rounded-full px-5 py-2.5 hover:bg-white/10 transition-colors"
              >
                {about.learnMore} &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
