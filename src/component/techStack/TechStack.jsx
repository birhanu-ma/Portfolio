import React from 'react';

const TechStack = () => {
  const techData = [
    {
      category: "Frontend",
      titleColor: "text-blue-500", // Adjusted slightly for dark mode visibility
      skills: ["Next.js", "React", "Flutter", "React Native", "Tailwind CSS", "Redux", "Zustand"]
    },
    {
      category: "Backend",
      titleColor: "text-green-500",
      skills: ["Node.js", "Express", "Django", "Flask", "Go"]
    },
    {
      category: "Database",
      titleColor: "text-purple-500",
      skills: ["MongoDB", "SQL", "Mongoose", "Firebase"]
    },
    {
      category: "Tools & DevOps",
      titleColor: "text-orange-500",
      skills: ["Git", "Docker", "REST APIs", "JWT Auth", "WebSockets"]
    },
    {
      category: "Languages",
      titleColor: "text-red-500",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Dart"]
    },
    {
      category: "Machine Learning",
      titleColor: "text-indigo-500",
      skills: ["Scikit-learn", "NumPy", "SciPy", "matplotlib", "TensorFlow"]
    }
  ];

  return (
    /* Changed bg-white to bg-background and text-slate to text-foreground */
    <section id="tech" className="bg-background py-20 px-6 md:px-12 font-sans text-foreground transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-foreground flex justify-center items-center gap-3 mb-4">
            🛠️ Mr Y's Tech Stack
          </h2>
          {/* Using primary variable for the underline */}
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-foreground/70 leading-relaxed">
            <span className="font-bold text-foreground">Birhanu Matebe's</span> comprehensive toolkit for building modern, 
            scalable applications. As Clean Code Academy founder and A2SV educator, 
            these are the technologies I use and teach.
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techData.map((item, index) => (
            <div 
              key={index} 
              /* Swapped bg-white for bg-card and border-slate-100 for border-border */
              className="bg-card p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-all duration-300"
            >
              <h3 className={`text-xl font-bold mb-6 ${item.titleColor}`}>
                {item.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {item.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    /* Swapped bg-slate-50 for bg-background and border colors for border-border */
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