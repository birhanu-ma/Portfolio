import React from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork, SiLeetcode } from "react-icons/si";
import { HiHeart } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com", label: "GitHub" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com", label: "LinkedIn" },
    { icon: <SiUpwork />, link: "https://upwork.com", label: "Upwork" },
    { icon: <SiLeetcode />, link: "https://leetcode.com", label: "LeetCode" }
  ];

  return (
    /* Changed bg-white to bg-background and border-slate-100 to border-border */
    <footer className="bg-background border-t border-border py-12 px-6 md:px-12 font-sans transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Branding/Copyright Section */}
        <div className="text-center md:text-left">
          {/* Changed text-slate-900 to text-foreground */}
          <h2 className="text-xl font-extrabold text-foreground tracking-tight mb-2">
            Mr Y
          </h2>
          {/* Changed text-slate-500 to text-foreground/50 */}
          <p className="text-sm text-foreground/50 flex items-center justify-center md:justify-start gap-1">
            © {currentYear} | Built with <HiHeart className="text-red-500 animate-pulse" /> by Tamirat
          </p>
        </div>

        {/* Quick Links Section - Changed text-slate-600 to text-foreground/70 */}
        <nav className="flex gap-6 text-sm font-medium text-foreground/70">
          {/* Changed hover:text-blue-600 to hover:text-primary */}
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>

        {/* Minimal Social Icons */}
        <div className="flex gap-5">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              /* Changed text-slate-400 to text-foreground/40 and hover to text-foreground */
              className="text-foreground/40 hover:text-foreground text-xl transition-all duration-300 hover:-translate-y-1"
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>
      
      {/* Bottom Sub-footer - Changed border-slate-50 to border-border/50 */}
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-border/50 text-center">
        {/* Changed text-slate-300 to text-foreground/30 */}
        <p className="text-[10px] text-foreground/30 uppercase tracking-[0.2em]">
          Clean Code Academy • A2SV Education • Full Stack Development
        </p>
      </div>
    </footer>
  );
};

export default Footer;