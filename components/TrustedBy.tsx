import React from 'react';
import { useContent } from '../i18n/LanguageContext';

const TrustedBy: React.FC = () => {
  const { trustedBy } = useContent();
  const loopItems = [...trustedBy.items, ...trustedBy.items];

  return (
    <section className="relative z-10 py-10 border-y border-white/5 bg-black/30">
      <p className="text-center text-xs uppercase tracking-widest text-slate-500 mb-6">{trustedBy.heading}</p>
      <div className="relative overflow-hidden">
        <div className="flex w-max gap-16 animate-marquee">
          {loopItems.map((item, index) => (
            <span key={`${item}-${index}`} className="text-xl font-semibold text-slate-500 whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
      </div>
    </section>
  );
};

export default TrustedBy;
