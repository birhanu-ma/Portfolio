import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { SiUpwork, SiLeetcode } from "react-icons/si";
import { HiDownload, HiArrowNarrowRight, HiChatAlt2 } from "react-icons/hi";
import profile from "../../assets/BireProfile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-screen min-h-screen bg-background text-foreground flex items-center justify-center relative transition-colors duration-300 py-12 px-4 sm:px-6"
    >
      {/* Background Decorative Circles */}
      <div className="absolute top-[40%] right-[10%] w-64 h-64 bg-[#fff9e6] dark:bg-primary/5 rounded-full -z-10 opacity-70 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e6f4ea] dark:bg-primary/5 rounded-full -z-10 blur-3xl opacity-50" />

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
        {/* Left Content Side */}
        <div className="flex flex-col space-y-8 order-2 lg:order-1 text-center lg:text-left">
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-none">
              Hi, I'm{" "}
              <span className="text-[#4285F4]">B</span>
              <span className="text-[#EA4335]">i</span>
              <span className="text-[#34A853]">r</span>
              <span className="text-[#FBBC05]">h</span>
              <span className="text-[#4285F4]">a</span>
              <span className="text-[#EA4335]">n</span>
              <span className="text-[#FBBC05]">u</span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl text-foreground/70 font-medium mt-6">
              Electrical & Computer Engineer
              <br className="hidden sm:block" />
              Data Science & Full-Stack Developer
            </h2>

            <p className="text-foreground/50 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mt-6">
              Building scalable, intelligent applications in modern web
              technologies, cloud architecture, and machine learning
              integration.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
            <a
              href="#experience"
              className="flex items-center gap-2 bg-[#4285F4] text-white px-4 py-3.5 rounded-full font-semibold shadow-lg hover:bg-blue-600 transition-all"
            >
              View My Work <HiArrowNarrowRight className="text-xl" />
            </a>

            <a
              href="/Birhanu-Matebe.pdf"
              download
              className="flex items-center gap-2 bg-[#34A853] text-white px-4 py-3.5 rounded-full font-semibold shadow-lg hover:bg-green-600 transition-all cursor-pointer"
            >
              Download Resume <HiDownload className="text-xl" />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 border-2 border-[#4285F4] text-[#4285F4] px-4 py-3.5 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all bg-background shadow-sm no-underline cursor-pointer"
            >
              Let's Connect <HiChatAlt2 className="text-xl" />
            </a>
          </div>

          {/* Social Icons Row */}
          <div className="flex items-center gap-4 pt-4 justify-center lg:justify-start">
            {[
              { icon: <FaGithub />, link: "https://github.com/birhanu-ma" },
              {
                icon: <FaLinkedinIn />,
                link: "https://www.linkedin.com/in/birhanu-matebe",
              },
              { icon: <SiUpwork />, link: "#" },
              {
                icon: <SiLeetcode />,
                link: "https://leetcode.com/u/BirhanuMatebe/",
              },
              {
                icon: <FaEnvelope />,
                link: "mailto:birhanumatebe12@gmail.com",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-border text-foreground/60 hover:text-primary hover:border-primary hover:shadow-md transition-all bg-card"
              >
                <span className="text-xl">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Image Side - Fully Responsive Circular Image (No Hair Clipping!) */}
        <div className="relative flex justify-center items-center order-1 lg:order-2 mb-10 lg:mb-0">
          <div className="absolute w-[85%] h-[105%] bg-[#e8f0fe] dark:bg-primary/10 rounded-full rotate-3 -z-10 blur-xl" />

          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-square rounded-full overflow-hidden shadow-sm border-4 border-card">
            <img
              src={profile}
              alt="Birhanu"
              className="w-full h-full object-cover object-top"
            />

            <div className="absolute top-6 right-6 bg-[#34A853] p-1.5 rounded-full border-2 border-white shadow-md">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Down Arrow Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/20 animate-bounce">
        <svg
          className="w-8 h-8"
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