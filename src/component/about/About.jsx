import React from 'react';
import { FaCode, FaServer, FaDatabase, FaMobileAlt, FaBrain, FaGraduationCap } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const About = () => {
  return (
    /* Changed bg-white to bg-background and text-slate-800 to text-foreground */
    <section id="about" className="bg-background min-h-screen pt-24 pb-16 px-6 md:px-12 font-sans text-foreground transition-colors duration-300">
      
      {/* Main Header with Underline */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold text-foreground mb-2">About Birhanu Matebe</h1>
        {/* Changed bg-blue-600 to bg-primary */}
        <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Biography */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6 leading-tight">
              Mr Y - Full-Stack Developer & Clean Code Academy Founder
            </h2>
            {/* Changed text-slate-600 to text-foreground/70 */}
            <div className="space-y-5 text-lg text-foreground/70 leading-relaxed">
              <p>
                I'm <span className="font-semibold text-foreground">Birhanu Matebe</span>, a passionate Full-Stack Developer specializing in building scalable and user-friendly web and mobile applications. As the <span className="font-semibold text-foreground">founder of Clean Code Academy</span>, I'm dedicated to teaching clean code practices.
              </p>
              <p>
                Currently serving as <span className="font-semibold text-primary">Head of Education at A2SV</span>, I combine full-stack development with AI to create smarter, more efficient, and data-driven applications.
              </p>
              <p>
                Whether you're launching a startup MVP or refactoring legacy code, <span className="font-semibold text-foreground">Birhanu Matebe</span> delivers clean, maintainable, and well-tested code fast.
              </p>
            </div>
          </div>

          {/* Focus & Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div>
              <h3 className="flex items-center gap-2 font-bold text-foreground mb-4">
                <span className="text-red-500">🎯</span> Current Focus
              </h3>
              <ul className="space-y-3 text-foreground/60">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span> Building scalable web applications
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span> Leading Clean Code Academy
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span> Solving LeetCode challenges
                </li>
              </ul>
            </div>

            <div>
              <h3 className="flex items-center gap-2 font-bold text-foreground mb-4">
                <span className="text-yellow-500">🏆</span> Achievements
              </h3>
              <ul className="space-y-3 text-foreground/60">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span> 1000+ LeetCode problems solved
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span> Clean Code Academy founder
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span> A2SV Head of Education
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Core Competencies */}
        <div className="lg:col-span-5 text-left">
          {/* Changed bg-slate-50 to bg-card and border-slate-100 to border-border */}
          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
            <h3 className="flex items-center gap-2 font-bold text-xl text-foreground mb-8">
              💡 MR Y's Core Competencies
            </h3>

            <div className="space-y-6">
              <CompetencyItem 
                title="Frontend Development" 
                desc="Next.js, React, Flutter - Building responsive user interfaces" 
              />
              <CompetencyItem 
                title="Backend Development" 
                desc="Node.js, Express, Django, Flask, Go - Scalable server solutions" 
              />
              <CompetencyItem 
                title="Database & Storage" 
                desc="MongoDB, SQL, Firebase - Efficient data management" 
              />
              <CompetencyItem 
                title="Mobile Development" 
                desc="Flutter, React Native - Cross-platform mobile apps" 
              />
              <CompetencyItem 
                title="AI & Machine Learning" 
                desc="Scikit-learn, NumPy, SciPy, TensorFlow - Intelligent systems" 
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const CompetencyItem = ({ title, desc }) => (
  <div className="group">
    {/* Changed text-slate-800 to text-foreground and hover to text-primary */}
    <h4 className="font-bold text-foreground text-md mb-1 group-hover:text-primary transition-colors">
      {title}
    </h4>
    {/* Changed text-slate-500 to text-foreground/50 */}
    <p className="text-sm text-foreground/50 leading-relaxed">
      {desc}
    </p>
  </div>
);

export default About;