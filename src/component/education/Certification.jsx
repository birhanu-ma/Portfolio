import React from 'react';
import CertificationCard from './CertificationCard';

export const Certifications = ({ data }) => (
  <div className="flex-1 text-left">
    {/* Swapped text-slate-900 for text-foreground */}
    <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
      🏆 Certifications
    </h3>
    {data.map((cert, index) => <CertificationCard key={index} {...cert} />)}
  </div>
);