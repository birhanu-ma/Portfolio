import React from "react";
import EducationCard from "./EducationCard";
import CertificationCard from "./CertificationCard";

const EducationAndCertification = () => {
  const certificationData = [
    {
      title: "Kifiya AI Mastery (KAIM) Program Completion",
      institution: "Kifiya Financial Technology & 10 Academy ",
      institutionUrl: "https://kifiya.com",
      certificateUrl:
        "https://drive.google.com/file/d/1jDBklL5OWvRcjiH4zFTmI7wBERaThHAg/view?usp=sharing",
      date: "November 2025 – March 2026",
      bullets: [
        "12-week intensive residency in ML Engineering and Data Engineering for fintech",
        "Graduated with Distinction scored above 90/100 across all twelve industry-grade capstone projects in fraud detection, credit risk, insurance analytics, and customer experience",
      ],
    },
    {
      title: "Advanced Learning Algorithms",
      institution: "Coursera · Andrew Ng / Stanford  ",
      institutionUrl: "https://www.coursera.org",
      certificateUrl:
        "https://www.coursera.org/account/accomplishments/verify/3M766N5BQT1X",
      date: "November 2025 – March 2026",
      bullets: [
        "Topics: Neural Networks, Backpropagation, Gradient Descent, Bias-Variance Tradeoff, Recommender Systems, and Reinforcement Learning",
        "Strengthened theoretical foundation for production-grade ML systems",
      ],
    },
    {
      title: "Wellness Hackathon 2026 – Certificate of Participation",
      institution: "ALX Ethiopia, Kuriftu Resorts & WeVa Sphere",
      institutionUrl: "https://www.alxafrica.com",
      certificateUrl:
        "https://drive.google.com/file/d/1itf17YuSavWdRb-hvkZQTbVDznTcsTJF/view?usp=sharing", // E.g., /assets/Birhanu Matebe (2).pdf
      date: "June 2026",
      bullets: [
        "Actively participated in a high-impact innovation sprint focused on advancing health, beauty, and lifestyle technology in Ethiopia.",
        "Collaborated in a team environment to design and prototype tech-driven solutions addressing real-world personal vitality and wellness challenges.",
      ],
    },
  ];
  const educationData = [
    {
      title: "Bachelor of Science in Electrical and Computer Engineering",
      institution: "Addis Ababa Science and Technology University (AASTU)",
      institutionUrl: "https://aastu.edu.et",
      date: "2022 – 2026",
      bullets: [
        "Relevant Coursework: Database Systems, Object-Oriented Programming (Java), Data Structures, Computational Methods.",
        "Hands-on projects in full-stack development, machine learning, and IoT systems.",
      ],
    },
    {
      title: "Coding Academy",
      institution: "Google Developer Group",
      institutionUrl: "https://developers.google.com/community/gdg",
      recordUrl:
        "https://drive.google.com/file/d/1iN8i-Uf1kqnCbzkuDzKgsIGmwHXo_nKa/view?usp=sharing", // Optional link
      date: "2024 – 2025",
      description:
        "Intensive web development bootcamp focused on modern frontend technologies.",
      bullets: [
        "Relevant Coursework: JavaScript, React.js, Next.js.",
        "Built responsive and performant web applications with industry-standard tools.",
      ],
    },
    {
      title: "Problem Solving & Algorithms",
      institution: "A2SV (Africa to Silicon Valley)",
      institutionUrl: "https://a2sv.org",
      date: "2024 – present",
      bullets: [
        "Intensive cohort-based training in data structures, algorithms, and competitive programming",
        "Selective program focused on preparing engineers for top global tech companies",
      ],
    },
  ];
  return (
    <section
      id="education"
      className="bg-background py-24 px-6 md:px-12 font-sans text-foreground transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-foreground mb-4">
            Education & Certifications
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
              🎓 Education
            </h3>
            {educationData.map((edu, index) => (
              <EducationCard key={index} {...edu} />
            ))}
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
              🏆 Certifications & Achievements
            </h3>
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
