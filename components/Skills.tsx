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
    <section id="skills" className="py-24 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{skills.heading}</h2>
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
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-violet-500/40 transition-colors"
              >
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
