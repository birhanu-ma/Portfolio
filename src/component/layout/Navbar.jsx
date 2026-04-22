import React, { useState } from 'react';
import ThemeToggle from '../themeToggler/ThemeToggler';
import { FaBars, FaTimes } from 'react-icons/fa'; // Keeping react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" }, 
    { name: "About", id: "about" }, 
    { name: "Experience", id: "experience" }, 
    { name: "Education", id: "education" }, 
    { name: "Contact", id: "contact" },
    { name: "Project", id: "projects" }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-background border-t-[3px] border-border border-b border-border z-50 transition-colors duration-300">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        
        {/* Hamburger Button: Visible only on mobile (md:hidden) */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-foreground cursor-pointer p-1"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

        {/* Desktop Navigation: Hidden on mobile (hidden md:flex) */}
        <div className="hidden md:flex items-center space-x-10">
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

        {/* Theme Toggler: Always visible */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute left-0 w-full bg-background border-b border-border transition-all duration-300 ease-in-out z-[-1] ${
          isOpen ? 'top-[53px] opacity-100 visible' : 'top-[-300px] opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col p-6 space-y-4 shadow-xl">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
              className="text-foreground/70 hover:text-primary text-[16px] font-medium transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;