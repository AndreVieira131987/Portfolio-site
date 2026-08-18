import React, { useEffect, useState } from 'react';

const GlobalBackground: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-0 overflow-hidden pointer-events-none transition-opacity duration-[2000ms] ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-700/30 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-violet-700/30 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-indigo-700/30 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default GlobalBackground;
