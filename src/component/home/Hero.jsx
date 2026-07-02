import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { SiUpwork, SiLeetcode } from "react-icons/si";
import { HiArrowNarrowRight, HiChatAlt2 } from "react-icons/hi";
import profile from "../../assets/BireProfile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-transparent text-foreground flex items-center justify-center relative overflow-hidden pt-24 pb-12 px-6 sm:px-12 lg:px-16"
    >
      {/* Structural Animation & Variable Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-scale-in {
          animation: scaleIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Decorative backdrop blurring rings that adapt to dark/light theme shifts without explicit color blocks */}
      <div className="absolute top-[20%] right-[5%] w-[500px] h-[500px] bg-foreground/5 rounded-full -z-10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-foreground/5 rounded-full -z-10 blur-[140px] pointer-events-none" />

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16 relative z-10">
        {/* Left Content Column */}
        <div
          className="flex flex-col space-y-8 order-2 lg:order-1 text-center lg:text-left lg:col-span-7 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/60 font-semibold block">
              Available for Full-Time Roles & Contracting
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
              Hi, I'm{" "}
              <span className="font-light text-foreground/60">Birhanu</span>{" "}
              Matebe
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl text-foreground/80 font-medium tracking-tight">
              Electrical & Computer Engineer
              <span className="hidden md:inline text-foreground/30 mx-3">
                |
              </span>
              <br className="sm:block md:hidden" />
              Data Science & Full-Stack Developer
            </h2>

            <p className="text-foreground/60 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal pt-2">
              Building secure full-stack platforms, production machine learning
              systems, and cloud-native infrastructure backed by an engineer's
              instinct for architectural resilience.
            </p>
          </div>

          {/* Professional Actions */}
          <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start pt-2">
            <a
              href="#experience"
              className="flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-xl font-medium tracking-wide shadow-sm hover:opacity-90 transition-all duration-200"
            >
              View My Work <HiArrowNarrowRight className="text-lg" />
            </a>

            <a
              href="https://drive.google.com/file/d/1-sE5CLKDJZvAacZaSFZIP8dZ2Rt7DtWh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-transparent text-foreground border border-foreground/30 px-6 py-3.5 rounded-xl font-medium tracking-wide shadow-sm hover:bg-foreground/5 hover:border-foreground/50 transition-all duration-200"
            >
              Review Resume
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 text-foreground/70 hover:text-foreground px-4 py-3.5 rounded-xl font-medium transition-all duration-200 group"
            >
              Let's Connect
              <HiChatAlt2 className="text-xl text-foreground/40 group-hover:text-foreground/70 transition-colors" />
            </a>
          </div>

          {/* Social Profiles Row */}
          <div className="flex items-center gap-3.5 pt-4 justify-center lg:justify-start">
            {[
              {
                icon: <FaLinkedinIn />,
                link: "https://www.linkedin.com/in/birhanu-matebe",
              },
              { icon: <FaGithub />, link: "https://github.com/birhanu-ma" },
              {
                icon: <SiLeetcode />,
                link: "https://leetcode.com/u/BirhanuMatebe/",
              },
              { icon: <SiUpwork />, link: "#" },
              {
                icon: <FaEnvelope />,
                link: "mailto:birhanumatebe12@gmail.com",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-xl border border-foreground/10 text-foreground/60 hover:text-foreground hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-200"
              >
                <span className="text-lg">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Content Image Column */}
        <div
          className="relative flex justify-center items-center lg:col-span-5 order-1 lg:order-2 opacity-0 animate-scale-in"
          style={{ animationDelay: "300ms" }}
        >
          {/* Subtle Outer Clean Radial Ring */}
          <div className="absolute inset-0 max-w-sm sm:max-w-md aspect-square rounded-full border border-foreground/10 scale-105 pointer-events-none -z-10" />

          {/* Image Container — uses border-current or background utilities that adapt with themes */}
          <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-full overflow-hidden shadow-md border-[6px] border-card bg-muted/40">
            <img
              src={profile}
              alt="Birhanu Matebe"
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />

            {/* Minimal Status Verification Badge */}
            <div className="absolute bottom-6 right-6 bg-foreground p-2 rounded-full border border-background shadow-md">
              <svg
                className="w-4 h-4 text-background"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator using dynamic theme color opacity */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/30 animate-bounce hidden sm:block">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
