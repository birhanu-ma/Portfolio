
import React from 'react';
import EducationCard from './EducationCard';

export const Education = ({ data }) => (
  <div className="flex-1">
    <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">🎓 Education</h3>
    {data.map((edu, index) => <EducationCard key={index} {...edu} />)}
  </div>
);