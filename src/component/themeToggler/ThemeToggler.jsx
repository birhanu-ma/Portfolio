import React, { useEffect, useState } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';

const ThemeToggle = () => {
  // Default to light theme (false = light)
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if user has previously saved a theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
    }
    // If no saved preference → stay light (default)
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;

    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button 
      onClick={() => setIsDark(!isDark)}
      className="p-2 cursor-pointer rounded-full hover:bg-foreground/5 text-foreground/60 hover:text-foreground transition-all"
      aria-label="Toggle Theme"
    >
      {isDark ? <HiSun size={22} /> : <HiMoon size={22} />}
    </button>
  );
};

export default ThemeToggle;