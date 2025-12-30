

// CertificationCard.jsx
import React from 'react';
import { HiOutlineExternalLink, HiOutlineCalendar, HiBadgeCheck } from "react-icons/hi";

const CertificationCard = ({ title, institution, institutionUrl, date, description }) => (
  <div className="bg-card p-5 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow mb-4 text-left">
    <h3 className="text-md font-bold text-foreground mb-1 flex items-center justify-between">
      <span className="flex items-center gap-2">
        <HiBadgeCheck className="text-primary" /> {title}
      </span>
      {institutionUrl && (
        <a href={institutionUrl} target="_blank" rel="noreferrer" className="text-foreground/40 hover:text-primary">
          <HiOutlineExternalLink size={16} />
        </a>
      )}
    </h3>
    <p className="text-primary font-semibold text-sm mb-1">{institution}</p>
    {description && <p className="text-xs text-foreground/60 mt-2 mb-3">{description}</p>}
    <div className="flex items-center gap-1 text-[11px] text-foreground/40 font-medium uppercase">
      <HiOutlineCalendar /> {date}
    </div>
  </div>
);

export default CertificationCard;