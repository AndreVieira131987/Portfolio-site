import React from 'react';
import { SKILLS_DATA } from '../constants';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

const Skills: React.FC = () => {
  const hardSkills = SKILLS_DATA.filter(s => s.category === 'Hard' || s.category === 'Tech');

  // Custom colors for bars based on skill name or index
  const getBarColor = (index: number) => {
    const colors = ['#2563eb', '#3b82f6', '#60a5fa', '#1d4ed8', '#1e40af', '#93c5fd'];
    return colors[index % colors.length];
  };

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Text & Intro */}
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Stack Tecnológico</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Minha caixa de ferramentas combina o poder analítico do <strong>Power BI</strong> e <strong>Python</strong> com a estruturação sólida do <strong>SQL</strong>. 
              <br /><br />
              Não apenas gero gráficos, eu construo narrativas de dados que impulsionam resultados.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 font-bold text-xs">BI</div>
                <div>
                  <h4 className="font-bold text-slate-800">Power BI & DAX</h4>
                  <p className="text-xs text-slate-500">Modelagem avançada e visualização</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs">PY</div>
                <div>
                  <h4 className="font-bold text-slate-800">Python & ETL</h4>
                  <p className="text-xs text-slate-500">Automação e tratamento de dados</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="w-full md:w-2/3 bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100">
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={hardSkills}
                  margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                >
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    width={100} 
                    tick={{fill: '#475569', fontSize: 14, fontWeight: 500}}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="level" barSize={24} radius={[0, 4, 4, 0]}>
                    {hardSkills.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={getBarColor(index)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            {/* Custom Legend / Value indicators */}
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              {hardSkills.slice(0, 3).map((skill) => (
                <div key={skill.name} className="flex flex-col">
                  <span className="text-2xl font-bold text-slate-900">{skill.level}%</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
