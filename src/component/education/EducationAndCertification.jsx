import React from 'react';
import EducationCard from './EducationCard';
import CertificationCard from './CertificationCard';

const EducationAndCertification = () => {
  const educationData = [
    {
      title: "Bachelor of Science in Electrical and Computer Engineering",
      institution: "Addis Ababa Science and Technology University (AASTU)",
      institutionUrl: "https://aastu.edu.et",
      date: "2022 – Present",
      description: "Final-year student specializing in software systems, embedded design, and data-driven solutions.",
      bullets: [
        "Relevant Coursework: Database Systems, Object-Oriented Programming (Java), Data Structures, Computational Methods.",
        "Hands-on projects in full-stack development, machine learning, and IoT systems."
      ]
    },
    {
      title: "Coding Academy",
      institution: "Google Developer Group",
      institutionUrl: "https://developers.google.com/community/gdg",
      date: "2024 – 2025",
      description: "Intensive web development bootcamp focused on modern frontend technologies.",
      bullets: [
        "Relevant Coursework: JavaScript, React.js, Next.js.",
        "Built responsive and performant web applications with industry-standard tools."
      ]
    },
    {
      title: "Advanced Learning Algorithms",
      institution: "Coursera (Andrew Ng)",
      institutionUrl: "https://www.coursera.org",
      date: "September 2025 – Present",
      description: "Deep dive into neural networks and advanced machine learning techniques.",
      bullets: [
        "Topics: Neural Networks, Backpropagation, Gradient Descent, Bias-Variance Tradeoff, Model Evaluation.",
        "Strengthening theoretical foundation for production-grade ML systems."
      ]
    }
  ];

  const certificationData = [
    {
      title: "Kifiya AI Mastery (KAIM) Program Completion",
      institution: "Kifiya",
      institutionUrl: "https://kifiya.com",
      date: "December 2025",
      description: "Scored >90/100 across all five industry-grade capstone projects in Data Science & Machine Learning."
    }
  ];

  return (
    <section id="education" className="bg-background py-24 px-6 md:px-12 font-sans text-foreground transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-foreground mb-4">Education & Certifications</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">🎓 Education</h3>
            {educationData.map((edu, index) => (
              <EducationCard key={index} {...edu} />
            ))}
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">🏆 Certifications & Achievements</h3>
            {certificationData.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationAndCertification;

