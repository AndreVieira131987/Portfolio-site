import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="bg-slate-950 text-slate-500 py-8 text-center text-sm border-t border-slate-800">
        <p>&copy; {new Date().getFullYear()} Andre Vieira. Todos os direitos reservados.</p>
        <p className="mt-2 text-xs opacity-50">Desenvolvido com React & TailwindCSS</p>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;