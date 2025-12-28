import React from 'react';
import { HiOutlineExternalLink, HiOutlineCalendar, HiAcademicCap } from "react-icons/hi";

const EducationCard = ({ title, institution, institutionUrl, date, description, bullets }) => (
  /* Changed bg-white to bg-card and border-slate-100 to border-border */
  <div className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow mb-6 text-left">
    <div className="mb-4">
      <h3 className="text-lg font-bold text-foreground mb-1 flex items-center gap-2">
        <HiAcademicCap className="text-blue-500" /> {title}
        {institutionUrl && (
          <a href={institutionUrl} target="_blank" rel="noreferrer" className="text-foreground/40 hover:text-blue-600">
            <HiOutlineExternalLink size={18} />
          </a>
        )}
      </h3>
      <p className="text-blue-600 font-semibold text-sm mb-1">{institution}</p>
      <div className="flex items-center gap-1 text-xs text-foreground/40 font-medium">
        <HiOutlineCalendar /> {date}
      </div>
    </div>
    {description && <p className="text-sm text-foreground/70 leading-relaxed mb-4">{description}</p>}
    {bullets && (
      <ul className="space-y-2">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-foreground/60">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-400 shrink-0"></span>
            {bullet}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default EducationCard;