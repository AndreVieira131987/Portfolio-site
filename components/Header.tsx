import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useContent, useLanguage } from '../i18n/LanguageContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { nav } = useContent();
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: nav.home, href: '#hero' },
    { name: nav.about, href: '#about' },
    { name: nav.skills, href: '#skills' },
    { name: nav.experience, href: '#experience' },
    { name: nav.projects, href: '#projects' },
    { name: nav.contact, href: '#contact' },
  ];

  const LanguageToggle: React.FC<{ className?: string }> = ({ className }) => (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-1 rounded-full border border-slate-700 bg-slate-800/60 px-1 py-1 text-xs font-bold ${className || ''}`}
      aria-label="Toggle language"
    >
      <span className={`px-2 py-1 rounded-full transition-colors ${language === 'pt' ? 'bg-violet-600 text-white' : 'text-slate-400'}`}>PT</span>
      <span className={`px-2 py-1 rounded-full transition-colors ${language === 'en' ? 'bg-violet-600 text-white' : 'text-slate-400'}`}>EN</span>
    </button>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-lg shadow-black/20 py-2 border-b border-slate-800' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white font-extrabold text-sm shadow-lg shadow-violet-500/30">
              AV
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="text-slate-100 font-bold text-sm">Andre Vieira</span>
              <span className="text-slate-400 text-[11px] font-medium tracking-wide">Full Stack Developer</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-violet-400 px-2 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <LanguageToggle className="ml-4" />
            <a
              href="#contact"
              className="ml-2 bg-violet-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-violet-700 transition-transform hover:scale-105 shadow-lg shadow-violet-500/30"
            >
              {nav.hire}
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-violet-400 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-violet-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block mt-2 text-center bg-violet-600 text-white px-3 py-2 rounded-full text-base font-medium"
            >
              {nav.hire}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
