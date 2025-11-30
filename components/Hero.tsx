import React from 'react';
import { IMAGES } from '../constants';
import { ArrowRight, Database, Code, LineChart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-slate-50">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-sm font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Disponível para projetos
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Transformando <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">
                Dados Brutos
              </span> <br />
              em Estratégias.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Olá, sou <strong>Andre Vieira</strong>. Ajudo empresas a descomplicar a tomada de decisão através de Dashboards intuitivos, ETL robusto e Storytelling de dados.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a href="#projects" className="group flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-brand-500/40 hover:-translate-y-1">
                Ver Projetos
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold transition-all hover:border-brand-300">
                Sobre Mim
              </a>
            </div>

            {/* Tech Stack Mini-Showcase */}
            <div className="pt-8 flex items-center justify-center md:justify-start gap-8 text-slate-400">
              <div className="flex flex-col items-center gap-1 hover:text-brand-600 transition-colors">
                <LineChart size={24} />
                <span className="text-xs font-medium">Power BI</span>
              </div>
              <div className="flex flex-col items-center gap-1 hover:text-brand-600 transition-colors">
                <Code size={24} />
                <span className="text-xs font-medium">Python</span>
              </div>
              <div className="flex flex-col items-center gap-1 hover:text-brand-600 transition-colors">
                <Database size={24} />
                <span className="text-xs font-medium">SQL</span>
              </div>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="flex-1 relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* Decorative Circle */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-brand-200 animate-spin-slow"></div>
              
              {/* Profile Image with modern clipping */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src={IMAGES.PROFILE} 
                  alt="Andre Vieira" 
                  className="w-full h-full object-cover transform transition-transform hover:scale-110 duration-700" 
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -right-9 top-10 bg-white p-3 rounded-lg shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce-slow">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <LineChart size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Insights</p>
                  <p className="text-sm font-bold text-slate-800">+20% Eficiência</p>
                </div>
              </div>

              <div className="absolute -left-8 bottom-20 bg-white p-3 rounded-lg shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce-slow delay-700">
                <div className="bg-blue-100 p-2 rounded-full text-brand-600">
                  <Database size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Dados</p>
                  <p className="text-sm font-bold text-slate-800">100% Tratados</p>
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
