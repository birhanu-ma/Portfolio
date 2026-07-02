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
      duration: "November 2025 – March",
      achievements: [
        "Graduated with Distinction from a 12-week, project-based residency in Machine Learning Engineering and Data Engineering for the fintech sector",
        "Built a fraud detection model reaching 0.9995 AUC-PR and a Credit Risk / BNPL scoring system using advanced Python, SQL, and statistical modeling",
        "Developed and deployed Generative AI solutions, including RAG, LLM fine-tuning, and prompt engineering for intelligent chatbots",
        "Engineered end-to-end MLOps pipelines with DVC for data versioning and MLflow for experiment tracking, containerized with Docker and deployed via CI/CD",
        "Architected ETL/ELT frameworks using DBT for large-scale data transformation and warehousing",
        "Applied time series analysis and design thinking to deliver client-ready reports and interactive dashboards",
      ],
    },
    {
      role: "Full-Stack Developer Intern Student Mentorship Platform",
      type: "Internship",
      company: "Addis Ababa Science and Technology University (AASTU)",
      companyUrl: "https://aastu.edu.et",
      location: "Addis Ababa, Ethiopia · On-site",
      duration: "June 2025 – September 2025 · 4 mos",
      achievements: [
        "Engineered a secure full-stack platform using JWT authentication and RBAC, supporting structured mentorship for 3,000+ AASTU students",
        "Integrated 20+ new UI components and built real-time chat, mentor-mentee matching, and admin dashboards using React.js, Node.js, and Tailwind CSS",
        "Reduced freshman adjustment challenges by ~30% through digitized academic, emotional, and career guidance",
        "Stack: React.js · Node.js · JavaScript · Tailwind CSS · JWT · RBAC",
      ],
    },
    {
      role: "AI Research Intern, AI Talent Program",
      type: "Internship",
      company: "iCog Labs · Addis Ababa, Ethiopia",
      companyUrl: "https://icog-labs.com/",
      location: "Addis Ababa, Ethiopia · Hybrid",
      duration: "july 2025 – September 2025 · 3 mos",
      achievements: [
        "Reviewed and synthesized AGI research papers (including Economic Attention Networks within the OpenCog/Hyperon framework), producing written technical articles on system architecture and optimization strategies",
        "Contributed to the migration of core ECAN logic from C++ to MeTTa as part of OpenCog's transition to the Hyperon framework",
        "Built a Transformer-based handwritten alphabet recognition model using TensorFlow, achieving 85%+ accuracy",
        "Implemented a Hopfield network for associative memory, successfully retrieving correct stored images from distorted inputs",
      ],
    },
    {
      role: "Software Developer Intern",
      type: "Internship",
      company:
        "Addis Ababa City Administration Innovation and Technology Development Bureau (ITDB) ",
      companyUrl: "https://aaitdb.gov.et/directorates/services/detail/10",
      location: "Addis Ababa, Ethiopia · Hybrid",
      duration: "july 2025 – September 2025 · 3 mos",
      achievements: [
        "Built the frontend of a government employment platform using React.js, enabling unemployed citizens to register, apply for jobs, and request startup business support from the Ministry of Skill and Labor",
        "Designed role-specific dashboards for citizens, Ministry of Skill and Labor, and Ministry of Labor officials each with tailored views to track applicant status from registration through support disbursement",
        "Designed the database schema to support end-to-end workflow tracking across multiple ministries and user roles",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="w-full bg-background font-sans text-foreground transition-colors duration-300 relative"
    >
      {/* Structural full-screen Title Entry Header */}
      <div className="w-full h-screen px-6 md:px-12 lg:px-16 flex flex-col justify-center items-center text-center border-b border-foreground/10">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 font-semibold block mb-3">
            Professional Timeline
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground mb-4">
            Professional Experience
          </h2>
          <div className="h-[2px] w-16 bg-foreground/40 rounded-full mb-6"></div>
          <p className="text-foreground/60 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-normal">
            A background blending Electrical & Computer Engineering concepts
            with full-stack development, applied machine learning, and hardware
            deployment constraints.
          </p>
        </div>
      </div>

      {/* Expanded Width Sequential Scroll Module */}
      <div className="w-full max-w-none">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            {...exp}
            isLatest={index === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
