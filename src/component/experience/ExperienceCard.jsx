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
    <div className="w-full min-h-screen md:h-screen md:sticky md:top-0 bg-background border-b border-foreground/10 px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col justify-center items-center">
      {/* Centered vertical container */}
      <div className="max-w-5xl w-full mx-auto relative z-10 flex flex-col items-center gap-6 md:gap-10 py-12 md:py-0 text-center">
        {/* Top Block: Title, Company, and Meta */}
        <div className="flex flex-col items-center text-center space-y-3 md:space-y-4 w-full">
          <div>
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest bg-foreground/5 border border-foreground/5 text-foreground mb-2 md:mb-3">
              {type}
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
              {role}
            </h3>
          </div>

          {/* Subtitle / Meta information horizontal chain */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-xs sm:text-sm md:text-base text-foreground/50 font-normal">
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

        {/* Bottom Block: Expanded Width Card with Responsive Font Size */}
        <div className="w-full">
          <div className="bg-card border border-foreground/10 p-5 sm:p-8 md:p-10 rounded-xl shadow-sm space-y-4 md:space-y-6 text-left">
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/40 block border-b border-foreground/5 pb-3 text-center sm:text-left">
              Performance Deliverables & Benchmarks
            </span>

            {/* Scale font sizes smoothly from mobile up to desktop */}
            <ul className="space-y-3 md:space-y-5">
              {achievements.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 md:gap-4 text-foreground/70 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-normal group"
                >
                  <span className="mt-2 w-1.5 h-1.5 md:mt-2.5 md:w-2 md:h-2 rounded-sm bg-foreground/30 shrink-0 group-hover:bg-foreground transition-colors duration-200" />
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
