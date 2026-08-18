import React from 'react';
import { useContent } from '../i18n/LanguageContext';
import Icon from './iconMap';

const Experience: React.FC = () => {
  const { experience } = useContent();

  return (
    <section id="experience" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{experience.heading}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{experience.subheading}</p>
        </div>

        <div className="relative border-l border-white/10 ml-4 sm:ml-6">
          {experience.items.map((item) => (
            <div key={`${item.company}-${item.period}`} className="relative pl-10 pb-12 last:pb-0">
              <span className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-black border border-white/15 flex items-center justify-center text-violet-400">
                <Icon icon={item.icon} size={18} />
              </span>

              <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 hover:border-white/25 transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white">{item.role}</h3>
                    <span className="text-xs font-semibold text-violet-300 bg-violet-500/10 px-3 py-1 rounded-full self-start sm:self-auto">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-300 mb-1">{item.company}</p>
                  <p className="text-xs text-slate-500 mb-4">{item.location}</p>
                  <ul className="space-y-2">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="text-sm text-slate-400 leading-relaxed flex gap-2">
                        <span className="text-violet-500 mt-1.5">&bull;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
