import React from 'react';
import { useContent } from '../i18n/LanguageContext';
import Icon from './iconMap';

const ACCENTS = [
  { bg: 'bg-violet-500/10', text: 'text-violet-400', dot: 'bg-violet-500' },
  { bg: 'bg-pink-500/10', text: 'text-pink-400', dot: 'bg-pink-500' },
  { bg: 'bg-blue-500/10', text: 'text-blue-400', dot: 'bg-blue-500' },
  { bg: 'bg-emerald-500/10', text: 'text-emerald-400', dot: 'bg-emerald-500' },
];

const Skills: React.FC = () => {
  const { skills } = useContent();

  return (
    <section id="skills" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{skills.heading}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{skills.subheading}</p>
        </div>

        <p className="text-slate-400 max-w-3xl mx-auto text-center mb-12 leading-relaxed">
          {skills.intro}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.categories.map((category, index) => {
            const accent = ACCENTS[index % ACCENTS.length];
            return (
              <div
                key={category.title}
                className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 hover:border-white/25 transition-colors overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${accent.bg} ${accent.text}`}>
                    <Icon icon={category.icon} size={22} />
                  </div>
                  <h3 className="text-white font-bold mb-4">{category.title}</h3>
                  <ul className="space-y-2.5">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${accent.dot}`}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
