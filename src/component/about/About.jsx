import React from 'react';
import { FaCode, FaServer, FaDatabase, FaMicrochip, FaBrain, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="bg-background min-h-screen pt-24 pb-16 px-6 md:px-12 font-sans text-foreground transition-colors duration-300">
      
      {/* Main Header with Underline */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold text-foreground mb-2">About Birhanu Matebe Gerem</h1>
        <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Biography */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6 leading-tight">
              Electrical & Computer Engineer | Data Science & Full-Stack Developer
            </h2>
            <div className="space-y-5 text-lg text-foreground/70 leading-relaxed">
              <p>
                I'm <span className="font-semibold text-foreground">Birhanu Matebe Gerem</span>, a final-year Electrical and Computer Engineering student at Addis Ababa Science and Technology University with a strong passion for building intelligent, secure, and scalable systems that solve real-world problems.
              </p>
              <p>
                I blend hardware and software expertise from embedded IoT systems to full-stack web applications and advanced machine learning models. Currently, I am an active intern in the prestigious <span className="font-semibold text-primary">Kifiya AI Mastery (KAIM) Program</span>, consistently scoring above 90/100 on industry-grade capstone projects in fraud detection, credit risk modeling, insurance analytics, renewable energy forecasting, and customer experience analytics.
              </p>
              <p>
                Whether it's engineering smart devices, developing secure full-stack platforms, or building production-ready ML systems, I deliver clean, efficient, and impactful solutions with a focus on security, performance, and user experience.
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
                  <span className="text-primary">•</span> Full-Stack & Secure Web Development
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span> Machine Learning & MLOps (KAIM Intern)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span> Embedded Systems & IoT
                </li>
              </ul>
            </div>

            <div>
              <h3 className="flex items-center gap-2 font-bold text-foreground mb-4">
                <span className="text-yellow-500">🏆</span> Key Achievements
              </h3>
              <ul className="space-y-3 text-foreground/60">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span> KAIM Intern – Scoring &gt;90/100 on all ongoing capstones
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span> Built university-wide Student Mentorship Platform at AASTU
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span> Developed production-grade ML systems with FastAPI, Docker & MLflow
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Core Competencies */}
        <div className="lg:col-span-5 text-left">
          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
            <h3 className="flex items-center gap-2 font-bold text-xl text-foreground mb-8">
              💡 Birhanu's Core Competencies
            </h3>

            <div className="space-y-6">
              <CompetencyItem 
                icon={<FaCode className="text-primary" />}
                title="Frontend Development" 
                desc="React.js, Next.js, Tailwind CSS – Building responsive and intuitive user interfaces" 
              />
              <CompetencyItem 
                icon={<FaServer className="text-primary" />}
                title="Backend & Full-Stack" 
                desc="Node.js, Express, Django, FastAPI – Secure, scalable server-side solutions" 
              />
              <CompetencyItem 
                icon={<FaDatabase className="text-primary" />}
                title="Databases & Tools" 
                desc="MySQL, MongoDB, PostgreSQL, Git, REST API – Efficient data management" 
              />
              <CompetencyItem 
                icon={<FaMicrochip className="text-primary" />}
                title="Embedded & IoT Systems" 
                desc="Arduino, Sensors, RFID – Smart hardware solutions for automation and security" 
              />
              <CompetencyItem 
                icon={<FaBrain className="text-primary" />}
                title="AI & Machine Learning" 
                desc="Scikit-learn, XGBoost, SHAP, NLP, MLflow, Docker – End-to-end intelligent systems" 
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const CompetencyItem = ({ icon, title, desc }) => (
  <div className="group flex items-start gap-4">
    <div className="mt-1 text-xl">
      {icon || null}
    </div>
    <div>
      <h4 className="font-bold text-foreground text-md mb-1 group-hover:text-primary transition-colors">
        {title}
      </h4>
      <p className="text-sm text-foreground/50 leading-relaxed">
        {desc}
      </p>
    </div>
  </div>
);

export default About;