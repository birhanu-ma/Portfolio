import React from 'react';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  const experiences = [
    {
      role: "Head of Education",
      type: "Full-time",
      company: "A2SV | Africa to Silicon Valley",
      companyUrl: "#",
      location: "California, United States · Remote",
      duration: "Feb 2025 - Present · 6 mos",
      achievements: [
        "Developed customized educational curriculums for A2SV students, focusing on clean code practices and software engineering excellence.",
        "Provided personalized mentorship through one-on-one sessions, helping students master LeetCode problems and competitive programming.",
        "Empowered students in a growth-oriented learning environment, emphasizing continuous improvement and clean code academy principles."
      ]
    },
    {
      role: "Software Engineer Trainee | Competitive Programmer",
      type: "Part-time",
      company: "A2SV | Africa to Silicon Valley",
      companyUrl: "#",
      location: "Adama, Oromia Region, Ethiopia · On-site",
      duration: "Feb 2024 - Present · 1 yr 6 mos",
      achievements: [
        "Mastered Data Structures and Algorithms (DSA) by solving 1000+ LeetCode problems, becoming Tamirat LeetCode expert.",
        "Collaborated with skilled A2SV engineers on real-world software projects for impactful solutions.",
        "Developed strong communication skills through team discussions and clean code problem-solving sessions."
      ]
    },
    {
      role: "Back End Developer",
      type: "Internship",
      company: "Eskalate",
      companyUrl: "#",
      location: "California, United States · Remote",
      duration: "Aug 2024 - Nov 2024 · 4 mos",
      achievements: [
        "Designed and implemented APIs for Eskalate's backend systems to enhance functionality and user experience.",
        "Collaborated with front-end developers and product managers to deliver robust and scalable solutions.",
        "Optimized server-side logic to improve performance and efficiency."
      ]
    }
  ];

  return (
    /* Changed bg-slate-50 to bg-background and added text-foreground */
    <section id="experience" className="bg-background py-24 px-6 md:px-12 font-sans text-foreground transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-foreground mb-4">
            Mr Y's Professional Experience
          </h2>
          {/* Swapped bg-blue-600 for bg-primary */}
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-foreground/50 max-w-2xl mx-auto leading-relaxed">
            <span className="font-bold text-foreground">Tamirat Kebede's</span> 4+ years of professional experience in software development, 
            education, and mentorship. From A2SV leadership to Clean Code Academy founding, here's my journey.
          </p>
        </div>

        {/* Experience List */}
        <div className="mt-12">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index} 
              {...exp} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;