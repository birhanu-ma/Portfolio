import React from 'react';

const TechStack = () => {
  const techData = [
    {
      category: "Frontend",
      titleColor: "text-blue-500",
      skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "Vite"]
    },
    {
      category: "Backend & Full-Stack",
      titleColor: "text-green-500",
      skills: ["Node.js", "Express.js", "REST API"]
    },
    {
      category: "Databases",
      titleColor: "text-purple-500",
      skills: ["MySQL", "MongoDB", "PostgreSQL"]
    },
    {
      category: "Machine Learning & Data Science",
      titleColor: "text-indigo-500",
      skills: ["Scikit-learn", "XGBoost", "Pandas", "NumPy", "SHAP", "Matplotlib", "Seaborn"]
    },
    {
      category: "MLOps & Tools",
      titleColor: "text-orange-500",
      skills: ["Git", "Docker", "MLflow", "REST API", "DVC", "GitHub Actions"]
    },
    {
      category: "Languages & Embedded",
      titleColor: "text-red-500",
      skills: ["Python", "JavaScript", "Java", "C++", "Arduino"]
    },
    {
      category: "Security & Auth",
      titleColor: "text-cyan-500",
      skills: ["JWT", "RBAC", "Data Encryption", "Input Validation"]
    }
  ];

  return (
    <section id="tech" className="bg-background py-20 px-6 md:px-12 font-sans text-foreground transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-foreground flex justify-center items-center gap-3 mb-4">
            🛠️ Birhanu's Tech Stack
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-foreground/70 leading-relaxed">
            The technologies I use to build secure full-stack applications, intelligent machine learning systems, 
            and embedded IoT solutions. Proven across university projects, industry-grade KAIM capstones, 
            and real-world deployments.
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {techData.map((item, index) => (
            <div 
              key={index} 
              className="bg-card p-8 rounded-xl shadow-sm border border-border hover:shadow-md hover:border-primary/50 transition-all duration-300"
            >
              <h3 className={`text-xl font-bold mb-6 ${item.titleColor}`}>
                {item.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {item.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-4 py-1.5 bg-background text-foreground/80 text-sm font-medium rounded-full border border-border hover:border-primary hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;