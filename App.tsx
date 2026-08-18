import React from 'react';
import { LanguageProvider, useContent } from './i18n/LanguageContext';
import GlobalBackground from './components/GlobalBackground';
import StatusIndicator from './components/StatusIndicator';
import GoToTop from './components/GoToTop';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Process from './components/Process';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';

const Footer: React.FC = () => {
  const { footer } = useContent();
  return (
    <footer className="relative z-10 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-8">
        <div>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white font-extrabold text-sm mb-4">
            AV
          </span>
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} Andre Vieira. {footer.rights}</p>
          <p className="text-slate-600 text-xs mt-1">{footer.builtWith}</p>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold mb-3">{footer.quickLinksHeading}</h4>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            {footer.quickLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-black font-sans text-white antialiased relative">
      <GlobalBackground />
      <StatusIndicator />
      <Header />
      <main className="relative z-10">
        <Hero />
        <TrustedBy />
        <Services />
        <Projects />
        <About />
        <Process />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <Footer />
      <ChatWidget />
      <GoToTop />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
