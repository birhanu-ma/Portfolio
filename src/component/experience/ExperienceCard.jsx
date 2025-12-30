import React from 'react';
import { HiOutlineLocationMarker, HiOutlineExternalLink, HiOutlineCalendar } from "react-icons/hi";

const ExperienceCard = ({ role, type, company, companyUrl, location, duration, achievements, isLatest }) => {
  return (
    <div className="relative pl-8 pb-12 group text-left">
      {/* Timeline Vertical Line */}
      {!isLatest && (
        <div className="absolute left-[11px] top-2 h-full w-0.5 bg-border group-last:hidden"></div>
      )}
      
      {/* Timeline Circle */}
      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 border-card bg-primary shadow-sm z-10"></div>

      {/* Main Card Content */}
      <div className="bg-card p-6 md:p-8 rounded-2xl shadow-sm border border-border hover:shadow-md hover:border-primary/50 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl font-bold text-foreground">{role}</h3>
              
              <span className={`px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider 
                ${type === 'Full-time' ? 'bg-green-500/10 text-green-500' : 
                  type === 'Internship' ? 'bg-orange-500/10 text-orange-500' : 
                  'bg-blue-500/10 text-blue-500'}`}>
                {type}
              </span>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/50">
              <a 
                href={companyUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1 text-primary font-semibold hover:underline"
              >
                <HiOutlineExternalLink /> {company}
              </a>
              <span className="flex items-center gap-1">
                <HiOutlineLocationMarker /> {location}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-sm text-foreground/40 font-medium">
            <HiOutlineCalendar className="text-lg" /> {duration}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Key Achievements</p>
          <ul className="space-y-3">
            {achievements.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-foreground/70 leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;