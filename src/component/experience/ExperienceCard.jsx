import React from "react";
import {
  HiOutlineLocationMarker,
  HiOutlineExternalLink,
  HiOutlineCalendar,
} from "react-icons/hi";

const ExperienceCard = ({
  role,
  type,
  company,
  companyUrl,
  location,
  duration,
  achievements,
  isLatest,
}) => {
  return (
    <div className="w-full h-screen sticky top-0 bg-background border-b border-foreground/10 px-6 md:px-12 lg:px-16 flex flex-col justify-center items-center overflow-hidden">
      {/* Centered vertical container expanded to max-w-5xl */}
      <div className="max-w-5xl w-full mx-auto relative z-10 flex flex-col items-center gap-10 py-12 text-center">
        {/* Top Block: Title, Company, and Meta */}
        <div className="flex flex-col items-center text-center space-y-4 w-full">
          <div>
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest bg-foreground/5 border border-foreground/5 text-foreground mb-3">
              {type}
            </span>
            <h3 className="text-3xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
              {role}
            </h3>
          </div>

          {/* Subtitle / Meta information horizontal chain */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm md:text-base text-foreground/50 font-normal">
            <a
              href={companyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-foreground font-bold hover:opacity-70 transition-opacity"
            >
              {company} <HiOutlineExternalLink className="text-sm opacity-50" />
            </a>
            <span className="hidden sm:inline text-foreground/20">|</span>
            <span className="flex items-center gap-1">
              <HiOutlineLocationMarker /> {location}
            </span>
            <span className="hidden sm:inline text-foreground/20">|</span>
            <span className="flex items-center gap-1 font-medium">
              <HiOutlineCalendar /> {duration}
            </span>
          </div>
        </div>

        {/* Bottom Block: Expanded Width Card with Increased Font Size */}
        <div className="w-full">
          <div className="bg-card border border-foreground/10 p-8 md:p-10 rounded-xl shadow-sm space-y-6 text-left">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/40 block border-b border-foreground/5 pb-3 text-center sm:text-left">
              Performance Deliverables & Benchmarks
            </span>

            {/* Boosted text sizing for impact and clean tracking */}
            <ul className="space-y-5">
              {achievements.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-foreground/70 text-base md:text-lg lg:text-xl leading-relaxed font-normal group"
                >
                  <span className="mt-2.5 w-2 h-2 rounded-sm bg-foreground/30 shrink-0 group-hover:bg-foreground transition-colors duration-200" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
