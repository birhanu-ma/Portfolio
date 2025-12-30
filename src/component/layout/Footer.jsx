import React from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiHeart } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/birhanu-ma", label: "GitHub" }, // Replace with your GitHub
    { icon: <FaLinkedinIn />, link: "#", label: "LinkedIn" }, // Replace with your LinkedIn
  ];

  return (
    <footer className="bg-background border-t border-border py-12 px-6 md:px-12 font-sans transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Branding/Copyright Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-extrabold text-foreground tracking-tight mb-2">
            Birhanu Matebe Gerem
          </h2>
          <p className="text-sm text-foreground/50 flex items-center justify-center md:justify-start gap-1">
            © {currentYear} | Built with <HiHeart className="text-red-500 animate-pulse" /> by Birhanu
          </p>
        </div>

        {/* Quick Links Section */}
        <nav className="flex gap-6 text-sm font-medium text-foreground/70">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#tech" className="hover:text-primary transition-colors">Tech Stack</a>
          <a href="#education" className="hover:text-primary transition-colors">Education</a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-5">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="text-foreground/40 hover:text-foreground text-xl transition-all duration-300 hover:-translate-y-1"
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>
      
      {/* Bottom Sub-footer */}
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-border/50 text-center">
        <p className="text-[10px] text-foreground/30 uppercase tracking-[0.2em]">
          Electrical & Computer Engineering • Data Science Intern @ KAIM • Full-Stack & Machine Learning
        </p>
      </div>
    </footer>
  );
};

export default Footer;