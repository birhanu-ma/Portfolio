import React from "react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaMicrochip,
  FaBrain,
  FaGraduationCap,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="bg-background min-h-screen pt-24 pb-16 px-6 md:px-12 font-sans text-foreground transition-colors duration-300"
    >
      {/* Main Header with Underline */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold text-foreground mb-2">
          About Birhanu Matebe Gerem
        </h1>
        <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Biography */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6 leading-tight">
              Electrical & Computer Engineer | Data Science & Full-Stack
              Developer
            </h2>
            <div class="space-y-6 text-lg leading-relaxed">
              <p>
                I am{" "}
                <span class="font-bold text-foreground">
                  Birhanu Matebe Gerem
                </span>
                , a final-year Electrical and Computer Engineering student at
                Addis Ababa Science and Technology University. I bridge the gap
                between physical hardware and intelligent software, specializing
                in <strong>Full-Stack Architecture</strong>,{" "}
                <strong>Production AI</strong>, and{" "}
                <strong>Embedded IoT Systems</strong>.
              </p>

              <p>
                My hardware-aware approach is rooted in my engineering
                background, further enhanced by a distinction from the{" "}
                <a
                  href="https://10academy.org/trainings/kaim"
                  class="text-primary underline font-medium"
                  target="_blank"
                >
                  Kifiya AI Mastery (KAIM) Program
                </a>
                . This combination allows me to build robust data pipelines and
                machine learning models that interface seamlessly with physical
                systems and big data environments.
              </p>

              <p>
                Driven by engineering rigor, I am currently refining my
                problem-solving skills at{" "}
                <a
                  href="https://a2sv.org/"
                  class="text-primary underline font-medium"
                  target="_blank"
                >
                  A2SV
                </a>
                . I focus on delivering clean, scalable solutions that leverage{" "}
                <strong>Generative AI</strong> and <strong>MLOps</strong> to
                solve complex, real-world challenges.
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
                  <span className="text-primary">•</span> Full-Stack & Secure
                  Web Development
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span> Machine Learning &
                  MLOps (KAIM Intern)
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
                  <span className="text-primary">•</span>
                  KAIM Graduate – Completed the AI Mastery Program with
                  Distinction 
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span> Built university-wide
                  Student Mentorship Platform at AASTU
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span> Developed
                  production-grade ML systems with FastAPI, Docker & MLflow
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
                desc="Node.js, Express, FastAPI – Secure, scalable server-side solutions"
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
    <div className="mt-1 text-xl">{icon || null}</div>
    <div>
      <h4 className="font-bold text-foreground text-md mb-1 group-hover:text-primary transition-colors">
        {title}
      </h4>
      <p className="text-sm text-foreground/50 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default About;
