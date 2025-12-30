
// FeaturedProjectCard.jsx (Updated to support Live Demo link)
import React from 'react';
import { HiOutlineExternalLink, HiLink } from 'react-icons/hi';

const FeaturedProjectCard = ({ title, category, description, tech, demoLink, githubLink }) => {
  return (
    <div className="bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Category Badge + Links */}
      <div className="px-6 pt-6 flex justify-between items-start">
        <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
          {category}
        </span>
        <div className="flex gap-3">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="text-foreground/40 hover:text-primary transition-colors"
              title="Live Demo"
            >
              <HiLink size={20} />
            </a>
          )}
          {githubLink !== "#" && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="text-foreground/40 hover:text-primary transition-colors"
              title="Source Code"
            >
              <HiOutlineExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-4">
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-foreground/70 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {tech.map((item, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium bg-background border border-border rounded-full text-foreground/80"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;