import React from 'react';
import { HiOutlineExternalLink, HiOutlineCalendar, HiBadgeCheck } from "react-icons/hi";

const CertificationCard = ({ title, institution, institutionUrl, date, credentialId }) => (
  /* Changed bg-white to bg-card and border-slate-100 to border-border */
  <div className="bg-card p-5 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow mb-4 text-left">
    <h3 className="text-md font-bold text-foreground mb-1 flex items-center justify-between">
      <span className="flex items-center gap-2">
        <HiBadgeCheck className="text-blue-500" /> {title}
      </span>
      {institutionUrl && (
        <a href={institutionUrl} target="_blank" rel="noreferrer" className="text-foreground/40 hover:text-blue-600">
          <HiOutlineExternalLink size={16} />
        </a>
      )}
    </h3>
    <p className="text-blue-600 font-semibold text-sm mb-1">{institution}</p>
    <div className="flex items-center justify-between mt-2">
      <div className="flex items-center gap-1 text-[11px] text-foreground/40 font-medium uppercase">
        <HiOutlineCalendar /> {date}
      </div>
      {credentialId && (
        <span className="text-[10px] font-mono text-foreground/30">ID: {credentialId}</span>
      )}
    </div>
  </div>
);

export default CertificationCard;