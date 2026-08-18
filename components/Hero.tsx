import React from 'react';
import { IMAGES } from '../constants';
import { ArrowRight, Bot, Code2, Database, Server } from 'lucide-react';
import { useContent } from '../i18n/LanguageContext';

const STACK_ICONS = [Code2, Server, Database];

const Hero: React.FC = () => {
  const { hero } = useContent();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-slate-950">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-violet-700 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-700 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-700 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-sm font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              {hero.badge}
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              {hero.titleLine1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                {hero.titleHighlight}
              </span> <br />
              {hero.titleLine2}
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              {hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a href="#projects" className="group flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-violet-500/40 hover:-translate-y-1">
                {hero.ctaProjects}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 px-8 py-4 rounded-full font-semibold transition-all hover:border-violet-500/50">
                {hero.ctaAbout}
              </a>
            </div>

            {/* Tech Stack Mini-Showcase */}
            <div className="pt-8 flex items-center justify-center md:justify-start gap-8 text-slate-500">
              {hero.stack.map((name, index) => {
                const StackIcon = STACK_ICONS[index % STACK_ICONS.length];
                return (
                  <div key={name} className="flex flex-col items-center gap-1 hover:text-violet-400 transition-colors">
                    <StackIcon size={24} />
                    <span className="text-xs font-medium">{name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="flex-1 relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* Decorative Circle */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-violet-500/30 animate-spin-slow"></div>

              {/* Profile Image with modern clipping */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
                <img
                  src={IMAGES.PROFILE}
                  alt="Andre Vieira"
                  className="w-full h-full object-cover transform transition-transform hover:scale-110 duration-700"
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -right-9 top-10 bg-slate-900 p-3 rounded-lg shadow-xl border border-slate-800 flex items-center gap-3 animate-bounce-slow">
                <div className="bg-violet-500/10 p-2 rounded-full text-violet-400">
                  <Server size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400">{hero.cardDeployLabel}</p>
                  <p className="text-sm font-bold text-slate-100">{hero.cardDeployValue}</p>
                </div>
              </div>

              <div className="absolute -left-8 bottom-20 bg-slate-900 p-3 rounded-lg shadow-xl border border-slate-800 flex items-center gap-3 animate-bounce-slow delay-700">
                <div className="bg-purple-500/10 p-2 rounded-full text-purple-400">
                  <Bot size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400">{hero.cardAiLabel}</p>
                  <p className="text-sm font-bold text-slate-100">{hero.cardAiValue}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
