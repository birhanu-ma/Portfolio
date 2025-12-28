import React from 'react';
import { HiOutlineLocationMarker, HiOutlineExternalLink, HiOutlineCalendar } from "react-icons/hi";

const ExperienceCard = ({ role, type, company, companyUrl, location, duration, achievements, isLatest }) => {
  return (
    <div className="relative pl-8 pb-12 group text-left">
      {/* Timeline Vertical Line - Changed bg-slate-200 to border-border */}
      {!isLatest && (
        <div className="absolute left-[11px] top-2 h-full w-0.5 bg-border group-last:hidden"></div>
      )}
      
      {/* Timeline Circle - Changed border-white to border-card and bg-blue-600 to bg-primary */}
      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 border-card bg-primary shadow-sm z-10"></div>

      {/* Main Card Content - Changed bg-white to bg-card and border-slate-100 to border-border */}
      <div className="bg-card p-6 md:p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-1">
              {/* Changed text-slate-900 to text-foreground */}
              <h3 className="text-xl font-bold text-foreground">{role}</h3>
              
              {/* Badge logic remains, but colors adjusted for better contrast in dark mode */}
              <span className={`px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider 
                ${type === 'Full-time' ? 'bg-green-500/10 text-green-500' : 
                  type === 'Part-time' ? 'bg-blue-500/10 text-blue-500' : 'bg-orange-500/10 text-orange-500'}`}>
                {type}
              </span>
            </div>
            
            {/* Changed text-slate-500 to text-foreground/50 */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/50">
              <a 
                href={companyUrl} 
                target="_blank" 
                rel="noreferrer" 
                /* Changed text-blue-600 to text-primary */
                className="flex items-center gap-1 text-primary font-semibold hover:underline"
              >
                <HiOutlineExternalLink /> {company}
              </a>
              <span className="flex items-center gap-1">
                <HiOutlineLocationMarker /> {location}
              </span>
            </div>
          </div>

          {/* Changed text-slate-400 to text-foreground/40 */}
          <div className="flex items-center gap-1 text-sm text-foreground/40 font-medium">
            <HiOutlineCalendar className="text-lg" /> {duration}
          </div>
        </div>

        <div className="space-y-3">
          {/* Changed text-slate-400 to text-foreground/40 */}
          <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Key Achievements</p>
          <ul className="space-y-3">
            {achievements.map((item, index) => (
              /* Changed text-slate-600 to text-foreground/70 */
              <li key={index} className="flex items-start gap-3 text-foreground/70 leading-relaxed">
                {/* Changed bg-blue-500 to bg-primary */}
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