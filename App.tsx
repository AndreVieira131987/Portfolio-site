import React from 'react';
import { LanguageProvider, useContent } from './i18n/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';

const Footer: React.FC = () => {
  const { footer } = useContent();
  return (
    <footer className="bg-slate-950 text-slate-500 py-8 text-center text-sm border-t border-slate-800">
      <p>&copy; {new Date().getFullYear()} Andre Vieira. {footer.rights}</p>
      <p className="mt-2 text-xs opacity-50">{footer.builtWith}</p>
    </footer>
  );
};

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />

      <ChatWidget />
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
