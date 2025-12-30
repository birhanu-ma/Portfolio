// FeaturedProjects.jsx
import React from 'react';
import FeaturedProjectCard from './fetureProjectCard';

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Student Mentorship Platform",
      category: "Full-Stack Web",
      description: "Secure university-wide platform connecting AASTU students with verified mentors through structured academic, emotional, and career guidance with real-time features.",
      tech: ["React.js", "Node.js", "Tailwind CSS", "JWT", "RBAC", "Real-time Chat"],
      demoLink: "https://mentorship-hazel.vercel.app/", // Replace with actual Vercel URL
      githubLink: "#" // Optional – add if repo is public
    },
    {
      title: "MindSpace – Mental Wellness Platform",
      category: "Full-Stack Web",
      description: "Responsive mental health application with wellness tracking, anonymous forums, and privacy-focused authentication.",
      tech: ["React.js", "Django", "Vite", "Tailwind CSS", "PostgreSQL"],
      demoLink: "https://mind-space-mu.vercel.app/", // Replace with actual Vercel URL
      githubLink: "#"
    },
    {
      title: "Advanced Fraud Detection System",
      category: "Machine Learning",
      description: "High-precision ensemble models for e-commerce and banking fraud detection with geolocation mapping and SHAP-based explainability for regulatory compliance.",
      tech: ["Python", "XGBoost", "Scikit-learn", "SHAP", "SMOTE", "FastAPI"],
      demoLink: "", // No live demo
      githubLink: "#"
    },
    {
      title: "Credit Risk Scoring (BNPL)",
      category: "Machine Learning",
      description: "Production-ready credit scoring system using alternative data (RFM analysis), deployed with FastAPI, MLflow, Docker, and Basel II-aligned risk framework.",
      tech: ["Python", "Pandas", "MLflow", "Docker", "FastAPI", "PostgreSQL"],
      demoLink: "", // No live demo (API-based)
      githubLink: "#"
    },
    {
      title: "Insurance Risk Analytics & Pricing",
      category: "Machine Learning",
      description: "Analyzed 1M+ auto insurance records to validate risk drivers via hypothesis testing; built XGBoost models for claim probability and severity with SHAP insights.",
      tech: ["Python", "XGBoost", "SHAP", "Pandas", "DVC", "Hypothesis Testing"],
      demoLink: "",
      githubLink: "#"
    },
    {
      title: "Customer Experience Analytics",
      category: "NLP & Sentiment Analysis",
      description: "Analyzed 1,200 Google Play reviews for three Ethiopian banks using DistilBERT; delivered actionable UX and stability recommendations via thematic clustering.",
      tech: ["Python", "DistilBERT", "NLP", "PostgreSQL", "Google Play Scraper"],
      demoLink: "",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="bg-background py-24 px-6 md:px-12 font-sans text-foreground transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-foreground/70 leading-relaxed">
            A showcase of my work spanning full-stack web applications, advanced machine learning systems, data analytics, and NLP all completed during my ongoing KAIM internship and university projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FeaturedProjectCard key={index} {...project} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/birhanu-ma?tab=repositories" // Replace with your actual GitHub profile
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
