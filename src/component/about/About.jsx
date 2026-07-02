import React, { useEffect, useRef, useState } from "react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaMicrochip,
  FaBrain,
} from "react-icons/fa";

// Component wrapper to animate an individual element dynamically when scrolled into view
const ScrollAnimateItem = ({
  children,
  className = "",
  delayClass = "delay-0",
}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.05,
        rootMargin: "-20px 0px -20px 0px",
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isIntersecting ? `!opacity-100 !translate-y-0 ${delayClass}` : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-transparent font-sans text-foreground transition-colors duration-300 overflow-hidden"
    >
      {/* Inline Core Micro-Animations matching the Hero component style */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-0 { transition-delay: 0ms; }
        .delay-fast-1 { transition-delay: 100ms; }
        .delay-fast-2 { transition-delay: 200ms; }
      `}</style>

      {/* Subtle backdrop architecture blurring paths */}
      <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-foreground/5 rounded-full -z-10 blur-[130px] pointer-events-none" />

      {/* =========================================================
          SECTION 1: TITLE & INTRO PARAGRAPH (FULL SCREEN)
         ========================================================= */}
      <div className="w-full h-screen pt-24 pb-16 px-6 md:px-12 lg:px-16 flex flex-col justify-center items-center text-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center opacity-0 animate-fade-in-up">
          <ScrollAnimateItem className="mb-6" delayClass="delay-0">
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 font-semibold block mb-3">
              Background Statement
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground mb-4">
              About <span className="font-light text-foreground/60">Birhanu</span> Matebe
            </h1>
            <div className="h-[2px] w-16 bg-foreground/40 rounded-full mx-auto"></div>
          </ScrollAnimateItem>

          <div className="max-w-5xl w-full space-y-6 text-center lg:text-left mx-auto pt-4">
            <ScrollAnimateItem delayClass="delay-fast-1">
              <h2 className="text-xl md:text-3xl font-bold text-foreground tracking-tight leading-tight text-center">
                Electrical and Computer Engineer 
                <span className="hidden md:inline text-foreground/30 mx-3">|</span>
                <br className="md:hidden" />
                Data Science and Full-Stack Developer
              </h2>
            </ScrollAnimateItem>

            <ScrollAnimateItem delayClass="delay-fast-2">
              <p className="text-base md:text-xl leading-relaxed text-foreground/60 text-center font-normal max-w-4xl mx-auto">
                I build systems that function smoothly across screens, datasets, and circuits. 
                As an Electrical and Computer Engineer from <strong>Addis Ababa Science and Technology University</strong>, 
                I map complex real-world challenges into structural software architecture, resilient production data models, and scalable code bases.
              </p>
            </ScrollAnimateItem>
          </div>
        </div>
      </div>

      {/* =========================================================
          SECTION 2: FULL-STACK PARAGRAPH (FULL SCREEN)
         ========================================================= */}
      <div className="w-full h-screen px-6 md:px-12 lg:px-16 bg-foreground/[0.02] border-y border-foreground/10 flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          <div className="max-w-5xl w-full space-y-6 mx-auto">
            <ScrollAnimateItem delayClass="delay-0">
              <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight text-center lg:text-left">
                Full Stack Architecture
              </h2>
            </ScrollAnimateItem>

            <ScrollAnimateItem delayClass="delay-fast-1" className="text-left">
              <p className="text-base md:text-lg leading-relaxed text-foreground/60 font-normal">
                On the full-stack layout, I design end-to-end applications that prioritize absolute security. My 
                <strong> Blockchain-based clinical record system with AI chatbot assistant</strong> integrated React, Node.js, and Solidity smart contracts with an off-chain SHA-256 hash architecture to secure 100% tamper detection accuracy. This platform applies layered RBAC validation protocols verified comprehensively across 154 unique workflow test cases. I extend these systems into cloud-native boundaries through container orchestration, service meshes, and hardened infrastructure safety.
              </p>
            </ScrollAnimateItem>
          </div>
        </div>
      </div>

      {/* =========================================================
          SECTION 3: DATA SCIENCE PARAGRAPH (FULL SCREEN)
         ========================================================= */}
      <div className="w-full h-screen px-6 md:px-12 lg:px-16 flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          <div className="max-w-5xl w-full space-y-6 mx-auto">
            <ScrollAnimateItem delayClass="delay-0">
              <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight text-center lg:text-left">
                Data Science & Intelligent Infrastructure
              </h2>
            </ScrollAnimateItem>

            <ScrollAnimateItem delayClass="delay-fast-1" className="text-left">
              <p className="text-base md:text-lg leading-relaxed text-foreground/60 font-normal">
                Transitioning deep data into applied intelligence forms the center of my ML engineering methodology. 
                I completed an intensive residency track in machine learning and data engineering for fintech environments. 
                I construct robust fraud detection systems reaching 0.9995 AUC PR, credit rating risk models, and generative 
                AI products driven by custom RAG setups and LLM refinement. Every implementation is grounded in professional MLOps systems: DVC for asset control, MLflow for lifecycle visibility, and robust CI/CD execution patterns.
              </p>
            </ScrollAnimateItem>
          </div>
        </div>
      </div>

      {/* =========================================================
          SECTION 4: HARDWARE PARAGRAPH (FULL SCREEN)
         ========================================================= */}
      <div className="w-full h-screen px-6 md:px-12 lg:px-16 bg-foreground/[0.02] border-t border-foreground/10 flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          <div className="max-w-5xl w-full space-y-6 mx-auto">
            <ScrollAnimateItem delayClass="delay-0">
              <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight text-center lg:text-left">
                Hardware Foundations
              </h2>
            </ScrollAnimateItem>

            <ScrollAnimateItem delayClass="delay-fast-1" className="text-left">
              <p className="text-base md:text-lg leading-relaxed text-foreground/60 font-normal">
                The core logic originates at the hardware layer. My engineering training shapes how I evaluate constraints, 
                compute loads, and unexpected system failure vectors. It introduces a calculated architectural precision that 
                influences every framework deployment whether writing secure smart code pipelines, auditing a high-dimensional neural layer, or establishing high-availability production clusters.
              </p>
            </ScrollAnimateItem>
          </div>
        </div>
      </div>

      {/* =========================================================
          SECTION 5: COMPETENCIES & SUMMARY (DASHBOARD METRICS)
         ========================================================= */}
      <div className="w-full min-h-screen px-6 md:px-12 lg:px-16 border-t border-foreground/10 flex items-center py-20 justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
            
            {/* Left Block: Core Competencies */}
            <div className="lg:col-span-7 bg-card border border-foreground/10 p-8 rounded-xl flex flex-col justify-between shadow-sm">
              <div>
                <ScrollAnimateItem delayClass="delay-0">
                  <h3 className="text-lg font-bold uppercase tracking-wider text-foreground mb-6 flex items-center gap-2">
                    💡 Core Capabilities
                  </h3>
                </ScrollAnimateItem>

                <div className="space-y-6">
                  <ScrollAnimateItem delayClass="delay-fast-1">
                    <CompetencyItem
                      icon={<FaCode className="text-foreground/70" />}
                      title="Frontend Architecture"
                      desc="React.js, Next.js, Tailwind CSS — Designing clean, functional, and deeply responsive visual components."
                    />
                  </ScrollAnimateItem>
                  <ScrollAnimateItem delayClass="delay-fast-1">
                    <CompetencyItem
                      icon={<FaServer className="text-foreground/70" />}
                      title="Backend Services"
                      desc="Node.js, Express, FastAPI — Creating strict, isolated, and highly performant server operations."
                    />
                  </ScrollAnimateItem>
                  <ScrollAnimateItem delayClass="delay-fast-1">
                    <CompetencyItem
                      icon={<FaDatabase className="text-foreground/70" />}
                      title="Data Storage & Pipelines"
                      desc="MySQL, MongoDB, PostgreSQL, REST API systems — Managing clean queries and data modeling."
                    />
                  </ScrollAnimateItem>
                  <ScrollAnimateItem delayClass="delay-fast-1">
                    <CompetencyItem
                      icon={<FaMicrochip className="text-foreground/70" />}
                      title="Embedded Systems & Automation"
                      desc="Arduino, sensor networks, RFID integrations — Constructing low-level real-time hardware execution models."
                    />
                  </ScrollAnimateItem>
                  <ScrollAnimateItem delayClass="delay-fast-1">
                    <CompetencyItem
                      icon={<FaBrain className="text-foreground/70" />}
                      title="Machine Learning Engineering"
                      desc="Scikit-learn, XGBoost, SHAP, NLP patterns, MLflow, Docker execution environments."
                    />
                  </ScrollAnimateItem>
                </div>
              </div>
            </div>

            {/* Right Block: Structured Track Metadata */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Card 2: Key Milestones */}
              <ScrollAnimateItem className="flex-1 flex" delayClass="delay-fast-1">
                <div className="bg-card border border-foreground/10 p-6 rounded-xl w-full flex flex-col justify-center shadow-sm">
                  <h3 className="text-base font-bold uppercase tracking-wider text-foreground mb-4 flex items-center gap-2">
                    <span>🏆</span> Strategic Track Records
                  </h3>
                  <ul className="space-y-3 text-foreground/70 text-sm">
                    <li className="flex items-start gap-2.5">
                      <span className="text-foreground font-bold mt-0.5">•</span>
                      <span>Graduated with Distinction from Kifiya AI Mastery (KAIM) Track</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-foreground font-bold mt-0.5">•</span>
                      <span>Constructed 100% accurate tamper-proof ledger validation systems</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-foreground font-bold mt-0.5">•</span>
                      <span>Deployed financial risk analysis models reaching 0.9995 AUC PR benchmarks</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-foreground font-bold mt-0.5">•</span>
                      <span>B.Sc. candidate in Electrical & Computer Engineering, AASTU</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimateItem>

              {/* Card 3: Domain Specializations */}
              <ScrollAnimateItem className="flex-1 flex" delayClass="delay-fast-2">
                <div className="bg-card border border-foreground/10 p-6 rounded-xl w-full flex flex-col justify-center shadow-sm">
                  <h3 className="text-base font-bold uppercase tracking-wider text-foreground mb-4 flex items-center gap-2">
                    <span>🎯</span> Active Domains
                  </h3>
                  <ul className="space-y-3 text-foreground/70 text-sm">
                    <li className="flex items-start gap-2.5">
                      <span className="text-foreground font-bold mt-0.5">•</span>
                      <span>Secure Enterprise Web Architecture</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-foreground font-bold mt-0.5">•</span>
                      <span>Production MLOps Engineering pipelines</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-foreground font-bold mt-0.5">•</span>
                      <span>Cloud-Native & Distributed Orchestration</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-foreground font-bold mt-0.5">•</span>
                      <span>Smart Contracts & Web3 Web Systems</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimateItem>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CompetencyItem = ({ icon, title, desc }) => (
  <div className="group flex items-start gap-3.5">
    <div className="mt-1 text-xl flex-shrink-0 bg-foreground/5 p-2 rounded-lg border border-foreground/5 text-foreground/80 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
      {icon || null}
    </div>
    <div>
      <h4 className="font-bold text-foreground text-base mb-0.5 transition-colors">
        {title}
      </h4>
      <p className="text-sm text-foreground/60 leading-relaxed font-normal">
        {desc}
      </p>
    </div>
  </div>
);

export default About;