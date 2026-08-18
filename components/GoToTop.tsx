import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const GoToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Go to top"
      className="fixed bottom-6 left-6 z-40 p-3 rounded-full glass-panel text-slate-200 hover:text-white hover:border-white/30 transition-all shadow-lg shadow-black/40"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default GoToTop;
