import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ExternalLink, X, ChevronRight, BarChart, ArrowUpRight } from 'lucide-react';
import { useContent } from '../i18n/LanguageContext';
import { CONTACT_INFO } from '../constants';

const CARD_TRACK_PX = 65; // target scroll speed, in pixels per second
const APPROX_CARD_WIDTH = 400; // card width + gap, used only to estimate how many repeats are needed

const Projects: React.FC = () => {
  const { projects } = useContent();
  // Store just the id (not the localized object) so the modal keeps showing the
  // right project, in the right language, if the visitor toggles PT/EN while it's open.
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const selectedProject = projects.items.find((p) => p.id === selectedProjectId) ?? null;
  const [isPaused, setIsPaused] = useState(false);
  const [repeats, setRepeats] = useState(1);
  const [duration, setDuration] = useState(30);
  const rowRef = useRef<HTMLDivElement>(null);

  // One "set" must be wider than the viewport, or the looping track runs out of
  // cards mid-scroll and shows a gap of empty space before it wraps around.
  useEffect(() => {
    const computeRepeats = () => {
      const targetWidth = Math.max(2400, window.innerWidth * 1.3);
      const perSet = projects.items.length * APPROX_CARD_WIDTH;
      setRepeats(Math.max(1, Math.ceil(targetWidth / perSet)));
    };
    computeRepeats();
    window.addEventListener('resize', computeRepeats);
    return () => window.removeEventListener('resize', computeRepeats);
  }, [projects.items.length]);

  const oneSet = Array.from({ length: repeats }, () => projects.items).flat();
  const loopItems = [...oneSet, ...oneSet];

  // Measure the actual rendered width so the translateX(-50%) loop lines up
  // exactly with the real card/gap sizes, and to derive a consistent speed.
  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const halfWidth = el.scrollWidth / 2;
    if (halfWidth > 0) setDuration(halfWidth / CARD_TRACK_PX);
  }, [loopItems.length]);

  return (
    <section id="work" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{projects.heading}</h2>
            <p className="text-slate-400">{projects.subheading}</p>
          </div>
          <a
            href={CONTACT_INFO.GITHUB}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white border border-white/10 rounded-full px-4 py-2 flex-shrink-0 hover:bg-white/5 transition-colors"
          >
            {projects.seeAll} <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div
          ref={rowRef}
          className="flex w-max gap-6 animate-marquee"
          style={{ animationDuration: `${duration}s`, animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {loopItems.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="group relative rounded-2xl overflow-hidden border border-white/10 w-[300px] sm:w-[380px] aspect-[4/3] flex-shrink-0 cursor-pointer"
              onClick={() => setSelectedProjectId(project.id)}
            >
              <img
                src={project.thumbnailUrl}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider text-violet-300">
                {project.category}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <div className="flex items-center text-slate-300 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {projects.viewCase} <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-black to-transparent" />
      </div>

      {/* Project Modal — portalled to <body> so it isn't trapped inside this
          section's stacking context (created by its own relative+z-index),
          which would otherwise let the fixed header paint on top of it. */}
      {selectedProject && createPortal(
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-black bg-opacity-80 transition-opacity backdrop-blur-sm"
              aria-hidden="true"
              onClick={() => setSelectedProjectId(null)}
            ></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-black/90 border border-white/10 rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full backdrop-blur-xl">
              <div className="absolute top-4 right-4 z-10">
                <button
                  type="button"
                  className="bg-white/10 rounded-full p-2 text-slate-300 hover:text-white focus:outline-none"
                  onClick={() => setSelectedProjectId(null)}
                >
                  <X size={24} />
                </button>
              </div>

              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
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
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-inner border border-white/10 bg-black">
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
              <div className="bg-white/5 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse border-t border-white/10">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-black hover:bg-slate-200 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setSelectedProjectId(null)}
                >
                  {projects.close}
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Projects;
