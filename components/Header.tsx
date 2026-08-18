import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Menu, X } from 'lucide-react';
import { useContent, useLanguage } from '../i18n/LanguageContext';
import { RESUME_FILES } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { nav } = useContent();
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { name: nav.work, href: '#work' },
    { name: nav.about, href: '#about' },
    { name: nav.skills, href: '#skills' },
    { name: nav.process, href: '#process' },
    { name: nav.contact, href: '#contact' },
  ];

  const LanguageToggle: React.FC<{ className?: string }> = ({ className }) => (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-1 py-1 text-xs font-bold ${className || ''}`}
      aria-label="Toggle language"
    >
      <span className={`px-2 py-1 rounded-full transition-colors ${language === 'pt' ? 'bg-white text-black' : 'text-slate-400'}`}>PT</span>
      <span className={`px-2 py-1 rounded-full transition-colors ${language === 'en' ? 'bg-white text-black' : 'text-slate-400'}`}>EN</span>
    </button>
  );

  return (
    <nav className="fixed top-0 w-full z-40 bg-black/50 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <img src="/logo-mark.png" alt="Andre Vieira" className="h-10 w-10 object-contain" />
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={RESUME_FILES[language]}
              download
              aria-label={nav.resumeAria}
              title={nav.resumeAria}
              className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Download size={18} />
            </a>
            <LanguageToggle />
            <a
              href="#contact"
              className="flex items-center gap-2 bg-white text-black pl-4 pr-3 py-2 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors"
            >
              {nav.hire}
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href={RESUME_FILES[language]}
              download
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              <Download size={16} /> {nav.resumeAria}
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block mt-2 text-center bg-white text-black px-3 py-2 rounded-full text-base font-medium"
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
