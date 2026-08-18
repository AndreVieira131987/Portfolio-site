import React, { useEffect, useRef, useState } from 'react';
import { Play, User } from 'lucide-react';
import { IMAGES } from '../constants';
import { useContent } from '../i18n/LanguageContext';

const Hero: React.FC = () => {
  const { hero } = useContent();
  const heroRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const el = heroRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / Math.max(rect.height, 1), 0), 1);
      setScale(1 + progress * 0.2);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    const mask = maskRef.current;
    if (!el || !mask) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mask.style.left = `${e.clientX - rect.left}px`;
      mask.style.top = `${e.clientY - rect.top}px`;
      mask.style.opacity = '1';
    };
    const handleLeave = () => { mask.style.opacity = '0'; };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  const words = hero.headline.split(' ');
  let letterIndex = 0;

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden md:cursor-none"
    >
      {/* Cursor-invert mask */}
      <div
        ref={maskRef}
        className="hidden md:block absolute w-[200px] h-[200px] rounded-full bg-white pointer-events-none opacity-0 transition-opacity duration-300 z-20"
        style={{ mixBlendMode: 'difference', transform: 'translate(-50%, -50%)' }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-4xl">
        <div className="relative w-28 h-28 md:w-36 md:h-36 mb-8 rounded-full overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
          <img
            src={IMAGES.PROFILE}
            alt="Andre Vieira"
            className="w-full h-full object-cover transition-transform duration-300 ease-out"
            style={{ transform: `scale(${scale})` }}
          />
        </div>

        <h1 className="flex flex-wrap justify-center gap-x-3 sm:gap-x-4 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-none mb-6">
          {words.map((word, wi) => (
            <span key={wi} className="inline-flex">
              {word.split('').map((char, ci) => {
                const idx = letterIndex++;
                return (
                  <span
                    key={ci}
                    className="inline-block transition-all duration-500 ease-out"
                    style={{
                      transitionDelay: `${idx * 35}ms`,
                      opacity: revealed ? 1 : 0,
                      transform: revealed ? 'translateY(0)' : 'translateY(24px)',
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </span>
          ))}
        </h1>

        <p className="text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed mb-10">
          {hero.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <a
            href="#work"
            className="flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-semibold hover:bg-slate-200 transition-all hover:-translate-y-0.5"
          >
            <Play size={16} fill="currentColor" /> {hero.ctaPrimary}
          </a>
          <a
            href="#about"
            className="flex items-center gap-2 bg-white/5 text-white border border-white/10 px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-all"
          >
            <User size={16} /> {hero.ctaSecondary}
          </a>
        </div>

        <div className="grid grid-cols-3 gap-6 sm:gap-16">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
              <p className="text-[11px] md:text-sm text-slate-500 mt-1 leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
