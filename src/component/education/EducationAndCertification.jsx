import React from 'react';
import { Education } from './Education';
import { Certifications } from './Certification';

const EducationAndCertification = () => {
  const educationData = [
    {
      title: "Bachelor of Science - Software Engineering",
      institution: "Adama Science and Technology University",
      date: "Feb 2021 - Jul 2026",
      description: "Pursuing a 5-year degree focusing on software engineering excellence.",
      bullets: [
        "Core Coursework: Java, Python, and C++.",
        "Project-Based Learning: Developed various applications in teams.",
        "Focus on problem-solving, debugging, and performance."
      ]
    },
    {
      title: "Software Engineering Program",
      institution: "Holberton School",
      date: "Jan 2022 - Jan 2023",
      description: "Intensive program focused on technical collaboration.",
      bullets: ["Proficient in C, Python, and React.", "Built APIs and frontend interfaces."]
    }
  ];

  const certificationData = [
    { title: "A2SV's 2024 First Year Education Certification", institution: "A2SV", date: "Dec 2024" },
    { title: "ICPC Ethiopian CPC", institution: "Ethiopian Collegiate Programming Contest", date: "Nov 2024" },
    { title: "Problem Solving (Basic) Certificate", institution: "HackerRank", date: "Dec 2023", credentialId: "23F9D12D7C33" }
  ];


  return (
    /* Changed bg-white to bg-background and text-slate to text-foreground */
    <section id="education" className="bg-background py-24 px-6 md:px-12 font-sans text-foreground transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-foreground mb-4">Education & Certifications</h2>
          {/* Changed bg-blue-600 to bg-primary for the theme line */}
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Education data={educationData} />
          <Certifications data={certificationData} />
        </div>
      </div>
    </section>
  );
};

export default EducationAndCertification;