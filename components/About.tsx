import React from 'react';
import { useContent } from '../i18n/LanguageContext';
import Icon from './iconMap';

const ACCENTS = [
  { bg: 'bg-violet-500/10', text: 'text-violet-400', blob: 'bg-violet-500/10' },
  { bg: 'bg-purple-500/10', text: 'text-purple-400', blob: 'bg-purple-500/10' },
  { bg: 'bg-blue-500/10', text: 'text-blue-400', blob: 'bg-blue-500/10' },
  { bg: 'bg-pink-500/10', text: 'text-pink-400', blob: 'bg-pink-500/10' },
];

const About: React.FC = () => {
  const { about } = useContent();

  return (
    <section id="about" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{about.heading}</h2>
          <div className="w-20 h-1.5 bg-violet-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            {about.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {about.cards.map((card, index) => {
            const accent = ACCENTS[index % ACCENTS.length];
            return (
              <div
                key={card.title}
                className="group p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-violet-500/40 transition-all hover:shadow-xl hover:shadow-violet-500/5 relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 ${accent.blob} rounded-bl-full -mr-4 -mt-4 group-hover:scale-110 transition-transform`}></div>
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-sm mb-6 ${accent.bg} ${accent.text}`}>
                    <Icon icon={card.icon} size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                  <p className={`text-sm font-semibold mb-4 ${accent.text}`}>{card.subtitle}</p>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
