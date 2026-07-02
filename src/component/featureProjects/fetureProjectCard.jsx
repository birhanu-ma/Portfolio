import React from "react";
import { HiOutlineExternalLink, HiLink } from "react-icons/hi";

const FeaturedProjectCard = ({ projects = [], scrollRef }) => {
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center text-foreground/50 py-8">
        No projects found. Check property allocation.
      </div>
    );
  }

  return (
    <div
      ref={scrollRef}
      className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pt-4 pb-6 no-scrollbar scrollbar-none w-full"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {projects.map((project, index) => {
        const {
          title,
          category,
          description,
          tech,
          demoLink,
          githubLink,
          image,
        } = project;
        const hasImage = !!image;

        return (
          <div
            key={index}
            className="w-full shrink-0 snap-start bg-card rounded-xl border border-foreground/10 shadow-sm hover:border-foreground/30 transition-all duration-300 overflow-hidden group flex flex-col"
          >
            {/* Main Info split setup */}
            <div
              className={`flex flex-col ${hasImage ? "md:flex-row md:items-stretch" : "flex-1"}`}
            >
              {/* Main Content Info Panel */}
              <div className="flex flex-col flex-1 p-6 md:p-8 justify-between order-1">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground bg-foreground/5 border border-foreground/5 rounded-md max-w-[70%] truncate">
                      {category}
                    </span>
                    <div className="flex gap-2">
                      {demoLink && (
                        <a
                          href={demoLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-foreground/40 hover:text-foreground transition-colors p-2 bg-foreground/[0.02] border border-foreground/5 rounded-lg flex items-center justify-center"
                        >
                          <HiLink size={16} />
                        </a>
                      )}
                      {githubLink && githubLink !== "#" && (
                        <a
                          href={githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-foreground/40 hover:text-foreground transition-colors p-2 bg-foreground/[0.02] border border-foreground/5 rounded-lg flex items-center justify-center"
                        >
                          <HiOutlineExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-black tracking-tight text-foreground mb-3">
                    {title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed font-normal mb-2">
                    {description}
                  </p>
                </div>
              </div>

              {/* Centered Image Box Panel on Right side */}
              {hasImage && (
                <div className="w-full md:w-[340px] xl:w-[420px] shrink-0 relative bg-foreground/[0.015] border-t md:border-t-0 md:border-l border-foreground/10 flex items-center justify-center p-4 min-h-[240px] order-2">
                  <img
                    src={image}
                    alt={`${title} snapshot`}
                    className="max-w-full max-h-[280px] w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              )}
            </div>

            {/* Bottom Tech Stack Matrix cloud row element */}
            <div className="p-6 md:p-8 bg-foreground/[0.015] border-t border-foreground/10 flex flex-col justify-start w-full">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 mb-3 border-b border-foreground/5 pb-2">
                Technical Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {tech?.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-normal bg-background border border-foreground/10 rounded-md text-foreground/70 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-200 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedProjectCard;
