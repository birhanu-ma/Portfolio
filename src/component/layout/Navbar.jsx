import React from 'react';
import ThemeToggle from '../themeToggler/ThemeToggler';

const Navbar = () => {
  const navItems = [
    { name: "Home", id: "home" }, 
    { name: "About", id: "about" }, 
    { name: "Experience", id: "experience" }, 
    { name: "Education", id: "education" }, 
    { name: "Contact", id: "contact" }
  ];

  return (
    /* 1. bg-background ensures the solid white/black color from your index.css
       2. border-t-[3px] border-foreground adds that sharp solid line at the very top
       3. w-full ensures it spans the entire screen width
    */
    <nav className="fixed top-0 left-0 w-full bg-background border-t-[3px] border-border border-b border-border z-50">
      <div className="w-full max-w-[1440px] mx-auto px-10 h-14 flex items-center justify-between">
        
        {/* Navigation Links */}
        <div className="flex items-center space-x-10">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-foreground/60 hover:text-foreground text-[14px] font-medium transition-all duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Theme Toggler */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;