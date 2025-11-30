import React from 'react';
import { Briefcase, GraduationCap, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Sobre Mim</h2>
          <div className="w-20 h-1.5 bg-brand-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Uma jornada focada em transformar complexidade em clareza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Profissional */}
          <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 transition-all hover:shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-100 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>
            <div className="relative z-10">
              <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm mb-6 text-brand-600">
                <Briefcase size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Experiência</h3>
              <p className="text-sm font-semibold text-brand-600 mb-4">We.Go Smart Business</p>
              <p className="text-slate-600 leading-relaxed text-sm">
                Atuação como Analista de Dados, focado na criação de Dashboards executivos, processos de ETL e integração de múltiplas fontes de dados para suporte à decisão estratégica.
              </p>
            </div>
          </div>

          {/* Card 2: Formação */}
          <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 transition-all hover:shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>
            <div className="relative z-10">
              <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm mb-6 text-purple-600">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Formação</h3>
              <p className="text-sm font-semibold text-purple-600 mb-4">Engenharia de Software</p>
              <p className="text-slate-600 leading-relaxed text-sm">
                Cursando na UniFatecie (2023 - 2027). Uma base técnica sólida em lógica de programação e arquitetura de sistemas que complementa minha visão analítica de dados.
              </p>
            </div>
          </div>

          {/* Card 3: Soft Skills */}
          <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 transition-all hover:shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-pink-100 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>
            <div className="relative z-10">
              <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm mb-6 text-pink-600">
                <Lightbulb size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Diferenciais</h3>
              <p className="text-sm font-semibold text-pink-600 mb-4">Business Owner Mindset</p>
              <p className="text-slate-600 leading-relaxed text-sm">
                Experiência prévia como Sócio Proprietário, garantindo uma visão holística de negócios (Vendas, RH, Compras). Valorizo a criatividade e a pontualidade na entrega.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
