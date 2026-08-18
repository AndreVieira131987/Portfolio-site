import React from 'react';
import { Check } from 'lucide-react';
import { useContent } from '../i18n/LanguageContext';
import Icon from './iconMap';

const Services: React.FC = () => {
  const { services } = useContent();

  return (
    <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{services.heading}</h2>
          <p className="text-slate-400 max-w-xl mx-auto">{services.subheading}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.items.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl p-px bg-gradient-to-b from-white/20 to-white/0 hover:from-violet-500/50 hover:to-blue-500/10 transition-all duration-300 hover:scale-[1.03]"
            >
              <div className="relative h-full rounded-2xl bg-black/60 backdrop-blur-xl p-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6">
                    <Icon icon={service.icon} size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2.5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                        <Check size={14} className="text-emerald-400 flex-shrink-0" />
                        {item}
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

export default Services;
