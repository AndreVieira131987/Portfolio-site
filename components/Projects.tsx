import React, { useState } from 'react';
import { Project } from '../types';
import { ExternalLink, X, ChevronRight, BarChart } from 'lucide-react';
import { useContent } from '../i18n/LanguageContext';

const Projects: React.FC = () => {
  const { projects } = useContent();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{projects.heading}</h2>
          <p className="text-slate-400">{projects.subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.items.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900/60 rounded-2xl overflow-hidden border border-slate-800 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/5 transition-all duration-300 flex flex-col h-full cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors z-10" />
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 bg-slate-950/80 backdrop-blur text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider text-violet-300">
                  {project.category}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 line-clamp-3 mb-6 flex-grow">
                  {project.problem}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool) => (
                    <span key={tool} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-md font-medium">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-violet-400 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                  {projects.viewCase} <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-slate-950 bg-opacity-80 transition-opacity backdrop-blur-sm"
              aria-hidden="true"
              onClick={() => setSelectedProject(null)}
            ></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-slate-900 border border-slate-800 rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="absolute top-4 right-4 z-10">
                <button
                  type="button"
                  className="bg-slate-800 rounded-full p-2 text-slate-400 hover:text-white focus:outline-none"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={24} />
                </button>
              </div>

              <div className="bg-slate-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-3xl leading-6 font-bold text-white mb-2" id="modal-title">
                      {selectedProject.title}
                    </h3>
                    <div className="mb-6 flex gap-2">
                       {selectedProject.tools.map(t => (
                         <span key={t} className="text-xs font-mono bg-violet-500/10 text-violet-300 px-2 py-1 rounded">{t}</span>
                       ))}
                    </div>

                    <div className="max-w-none text-slate-400 space-y-6">
                      <div>
                        <h4 className="font-bold text-white text-lg">{projects.problemLabel}</h4>
                        <p>{selectedProject.problem}</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-white text-lg">{projects.methodologyLabel}</h4>
                        <p>{selectedProject.methodology}</p>
                      </div>

                      <div className="bg-emerald-500/10 p-4 rounded-lg border border-emerald-500/20">
                        <h4 className="font-bold text-emerald-300 text-lg">{projects.resultsLabel}</h4>
                        <p className="text-emerald-200 font-medium">{selectedProject.results}</p>
                      </div>
                    </div>

                    {selectedProject.embedUrl && (
                      <div className="mt-8">
                        <h4 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
                          <BarChart size={20} className="text-violet-400"/>
                          {projects.previewLabel}
                        </h4>
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-inner border border-slate-800 bg-slate-950">
                          <iframe
                            title={selectedProject.title}
                            width="100%"
                            height="100%"
                            src={selectedProject.embedUrl}
                            frameBorder="0"
                            allowFullScreen={true}
                            className="absolute inset-0"
                          ></iframe>
                        </div>
                        <div className="mt-2 text-right">
                          <a
                            href={selectedProject.embedUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-violet-400 hover:text-violet-300 inline-flex items-center gap-1"
                          >
                            {projects.openNewTab} <ExternalLink size={14} />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-slate-950/50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse border-t border-slate-800">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-violet-600 text-base font-medium text-white hover:bg-violet-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setSelectedProject(null)}
                >
                  {projects.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
