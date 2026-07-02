import React, { useRef } from "react";
import FeaturedProjectCard from "./fetureProjectCard"; // Ensure this matches your exact filename spelling

// Import your project images directly
import hospitalImg from "/public/hospital.png";
import mentorshipImg from "/public/mentorship.png";
import mindspaceImg from "/public/mindspace.png";
import fraudImg from "/public/fraud.png";
import creditRiskImg from "/public/creaditRisk.png";
import insuranceImg from "/public/insurance.png";
import customerImg from "/public/customer.png";

const FeaturedProjects = () => {
  const cardContainerRef = useRef(null);

  const projects = [
    {
      title: "Blockchain-Based Clinical Record Management System",
      category: "Full-Stack Web · Blockchain · AI",
      description:
        "A distributed clinical management platform combining a hybrid blockchain architecture, multi-role clinical workflows, and a RAG-powered AI chatbot to eliminate tamper risk and digitize end-to-end patient care across hospital departments.",
      tech: ["MongoDB", "RAG", "n8n", "JWT RBAC", "Ethers.js", "Solidity", "React.js", "Node.js"],
      demoLink: "https://med-seven-pi.vercel.app/",
      githubLink: "#",
      image: hospitalImg,
    },
    {
      title: "Student Mentorship Platform",
      category: "Full-Stack Web",
      description:
        "Secure university-wide platform connecting AASTU students with verified mentors through structured academic, emotional, and career guidance with real-time features.",
      tech: ["React.js", "Node.js", "Tailwind CSS", "JWT", "RBAC", "Real-time Chat"],
      demoLink: "https://mentorship-hazel.vercel.app/",
      githubLink: "#",
      image: mentorshipImg,
    },
    {
      title: "MindSpace – Mental Wellness Platform",
      category: "Full-Stack Web",
      description:
        "Responsive mental health application with wellness tracking, anonymous forums, and privacy-focused authentication.",
      tech: ["React.js", "Django", "Vite", "Tailwind CSS", "PostgreSQL"],
      demoLink: "https://mind-space-mu.vercel.app/",
      githubLink: "#",
      image: mindspaceImg,
    },
    {
      title: "Advanced Fraud Detection System",
      category: "Machine Learning",
      description:
        "High-precision ensemble models for e-commerce and banking fraud detection with geolocation mapping and SHAP-based explainability for regulatory compliance.",
      tech: ["Python", "XGBoost", "Scikit-learn", "SHAP", "SMOTE", "FastAPI"],
      demoLink: "",
      githubLink: "#",
      image: fraudImg,
    },
    {
      title: "Credit Risk Scoring (BNPL)",
      category: "Machine Learning",
      description:
        "Production-ready credit scoring system using alternative data (RFM analysis), deployed with FastAPI, MLflow, Docker, and Basel II-aligned risk framework.",
      tech: ["Python", "Pandas", "MLflow", "Docker", "FastAPI", "PostgreSQL"],
      demoLink: "",
      githubLink: "#",
      image: creditRiskImg,
    },
    {
      title: "Insurance Risk Analytics & Pricing",
      category: "Machine Learning",
      description:
        "Analyzed 1M+ auto insurance records to validate risk drivers via hypothesis testing; built XGBoost models for claim probability and severity with SHAP insights.",
      tech: ["Python", "XGBoost", "SHAP", "Pandas", "DVC", "Hypothesis Testing"],
      demoLink: "",
      githubLink: "#",
      image: insuranceImg,
    },
    {
      title: "Customer Experience Analytics",
      category: "NLP & Sentiment Analysis",
      description:
        "Analyzed 1,200 Google Play reviews for three Ethiopian banks using DistilBERT; delivered actionable UX and stability recommendations via thematic clustering.",
      tech: ["Python", "DistilBERT", "NLP", "PostgreSQL", "Google Play Scraper"],
      demoLink: "",
      githubLink: "#",
      image: customerImg,
    },
  ];

  const handleParentScroll = (direction) => {
    if (cardContainerRef.current) {
      const { clientWidth, scrollLeft } = cardContainerRef.current;
      const scrollAmount =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      cardContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="bg-background py-24 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block Container */}
        <div className="flex flex-col mb-16 w-full text-center md:text-left">
          <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 font-semibold block mb-3 md:text-center">
            Explore My Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground mb-4 md:text-center">
            Featured Projects
          </h2>
          <div className="h-[2px] w-16 bg-foreground/40 rounded-full mb-6 mx-auto"></div>
          
          {/* Flex Row to position description and buttons side-by-side */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 w-full max-w-6xl mx-auto">
            <p className="max-w-3xl text-base text-foreground/60 leading-relaxed font-normal text-center md:text-left">
              A showcase of my work spanning full-stack web applications, advanced
              machine learning systems, data analytics, and NLP.
            </p>

            {/* Navigation Buttons placed at bottom-right of header section */}
            <div className="hidden md:flex items-center gap-2 shrink-0 pb-1">
              <button
                onClick={() => handleParentScroll("left")}
                className="p-2.5 bg-card cursor-pointer border border-foreground/10 text-foreground hover:bg-foreground hover:text-background rounded-lg shadow-sm transition-all duration-300 flex items-center justify-center"
                aria-label="Scroll Left"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => handleParentScroll("right")}
                className="p-2.5 bg-card cursor-pointer border border-foreground/10 text-foreground hover:bg-foreground hover:text-background rounded-lg shadow-sm transition-all duration-300 flex items-center justify-center"
                aria-label="Scroll Right"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Card Component Tracking List */}
        <FeaturedProjectCard projects={projects} scrollRef={cardContainerRef} />

        {/* Mobile Fallback controls at the bottom */}
        <div className="flex items-center justify-center gap-4 mt-8 md:hidden">
          <button
            onClick={() => handleParentScroll("left")}
            className="p-3 bg-card border border-foreground/10 text-foreground rounded-lg"
            aria-label="Scroll Left"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => handleParentScroll("right")}
            className="p-3 bg-card border border-foreground/10 text-foreground rounded-lg"
            aria-label="Scroll Right"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* GitHub View Button Footer */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/birhanu-ma?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;