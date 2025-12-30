import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const experiences = [
    {
      role: "Data Science & Machine Learning Intern",
      type: "Internship",
      company: "Kifiya AI Mastery (KAIM) Program",
      companyUrl: "https://10academy.org/",
      location: "Addis Ababa, Ethiopia · Remote/Hybrid",
      duration: "November 2025 – Present",
      achievements: [
        "Achieved scores above 90/100 across five advanced capstone projects in fraud detection, credit risk modeling, insurance analytics, renewable energy forecasting, and customer experience analytics.",
        "Developed end-to-end machine learning solutions using Python, Pandas, Scikit-learn, XGBoost, SHAP, FastAPI, MLflow, Docker, and PostgreSQL.",
        "Built production-ready, explainable, and regulatory-compliant models for real-world financial and business applications.",
      ],
    },
    {
      role: "Electrical Engineering Intern",
      type: "Internship",
      company: "Addis Ababa Science and Technology University (AASTU)",
      companyUrl: "https://aastu.edu.et",
      location: "Addis Ababa, Ethiopia · On-site",
      duration: "June 2025 – September 2025 · 4 mos",
      achievements: [
        "Pioneered integration of 20+ new UI components into a university-wide mentorship platform, ensuring strict adherence to design standards.",
        "Developed a responsive, user-friendly platform with role-based user management for efficient access control and security.",
        "Tech Stack: React.js, JavaScript, Node.js, Tailwind CSS.",
      ],
    },
    {
      role: "Full-Stack Developer – Student Mentorship Platform",
      type: "Internship Project",
      company: "Addis Ababa Science and Technology University",
      companyUrl: "https://www.aastu.edu.et/",
      location: "Addis Ababa, Ethiopia",
      duration: "June 2025 – September 2025",
      achievements: [
        "Engineered a secure full-stack platform using JWT authentication and RBAC, supporting structured mentorship for 3,000+ AASTU students.",
        "Implemented real-time chat, mentor-mentee matching algorithm, profile management, and admin dashboards for engagement monitoring.",
        "Reduced freshman adjustment challenges by ~30% through digitized academic, emotional, and career guidance.",
      ],
    },
    {
      role: "Full-Stack Developer – MindSpace Mental Wellness Platform",
      type: "Academic Project",
      company: "Google Developer Group",
      companyUrl:
        "https://gdg.community.dev/gdg-on-campus-addis-ababa-science-and-technology-university-addis-ababa-ethiopia/",
      location: "Addis Ababa, Ethiopia",
      duration: "April 2025 – June 2025",
      achievements: [
        "Designed and built a responsive web application for wellness tracking and community forums using React.js, Django, Vite, and Tailwind CSS.",
        "Engineered 12 WCAG-compliant UI components, improving accessibility and user satisfaction by 37%.",
        "Focused on secure authentication and privacy-protected interactions to encourage safe user participation.",
      ],
    },
    {
      role: "Embedded Systems Engineer – Smart Irrigation System",
      type: "Academic Project",
      company: "Addis Ababa Science and Technology University",
      companyUrl: "https://www.aastu.edu.et/",
      location: "Addis Ababa, Ethiopia",
      duration: "September 2024 – July 2025",
      achievements: [
        "Designed and implemented an IoT-based automated irrigation system using Arduino to monitor soil moisture in real-time.",
        "Achieved 20–30% reduction in water consumption by delivering water only when needed.",
        "Promoted sustainable agriculture practices through efficient resource management.",
      ],
    },
    {
      role: "Embedded Systems Engineer – Smart Door Lock",
      type: "Academic Project",
      company: "Addis Ababa Science and Technology University",
      companyUrl: "https://www.aastu.edu.et/",
      location: "Addis Ababa, Ethiopia",
      duration: "June 2025",
      achievements: [
        "Developed a dual-factor electronic access control system using RFID cards and keypad authentication with Arduino.",
        "Implemented encrypted credential storage and anti-brute-force mechanisms for enhanced physical cybersecurity.",
        "Significantly reduced risks of unauthorized entry compared to traditional key-based locks.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-background py-24 px-6 md:px-12 font-sans text-foreground transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-foreground mb-4">
            Birhanu's Professional Experience
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-foreground/50 max-w-2xl mx-auto leading-relaxed">
            My journey blending Electrical & Computer Engineering with
            Full-Stack Development, Machine Learning, and Embedded Systems from
            high-impact AI internships to building secure real-world solutions.
          </p>
        </div>

        {/* Experience List */}
        <div className="mt-12">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              {...exp}
              isLatest={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
