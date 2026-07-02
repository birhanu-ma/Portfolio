import React from "react";
import EducationCard from "./EducationCard";

export const Education = ({ data }) => {
  return (
    <div className="w-full">
      {/* Editorial Tracking Header */}
      <div className="mb-10 text-left border-b border-foreground/5 pb-4">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 block mb-2">
          Academic Track
        </span>
        <h3 className="text-2xl md:text-3xl font-black tracking-tight text-foreground flex items-center gap-3">
          Education
        </h3>
      </div>

      {/* Sequential Education Flow */}
      <div className="space-y-6 md:space-y-8">
        {data.map((edu, index) => (
          <EducationCard key={index} {...edu} />
        ))}
      </div>
    </div>
  );
};

export default Education;
