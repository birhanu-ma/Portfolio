import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Install react-icons if you haven't
import ThemeToggle from '../themeToggler/ThemeToggler';

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

  return (
    <nav className="fixed top-0 left-0 w-full bg-background border-t-[3px] border-border border-b border-border z-50">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 h-14 flex items-center justify-between">
        
        {/* Desktop Navigation Links - Hidden on Mobile */}
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

        {/* Right Side: Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          {/* Mobile Menu Toggle Button - Visible only on small screens */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-foreground/80 focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col space-y-4 px-6 py-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)} // Close menu when a link is clicked
                className="text-foreground/70 hover:text-foreground text-lg font-medium border-l-2 border-transparent hover:border-[#4285F4] pl-2 transition-all"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;