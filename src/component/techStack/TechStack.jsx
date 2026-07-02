import React, { useRef } from "react";

const TechStack = () => {
  const scrollContainerRef = useRef(null);
  const techData = [
    {
      category: "Frontend Architecture",
      subtitle: "UI & State Management",
      highlight:
        "Responsive single-page apps, dynamic rendering frameworks, and typed GraphQL clients",
      skills: [
        "React.js",
        "Vue.js",
        "Vue 3",
        "Next.js",
        "Nuxt 4",
        "Tailwind CSS",
        "JavaScript",
        "Vite",
        "Apollo",
        "Vue Apollo",
        "VeeValidate",
      ],
    },
    {
      category: "Backend Services",
      subtitle: "Server & API Infrastructure",
      highlight:
        "High-performance RESTful APIs, HTTP microservices, and isolated business logic",
      skills: [
        "Node.js",
        "Golang (>v1.22)",
        "Express.js",
        "FastAPI",
        "REST API",
        "HTTP servers",
        "OpenAPI Specs",
      ],
    },
    {
      category: "Database Systems",
      subtitle: "Storage & Query Optimization",
      highlight:
        "Relational modeling, document schemas, instant GraphQL reflection, and efficient indexing",
      skills: [
        "MySQL",
        "MongoDB",
        "PostgreSQL",
        "Postgres database",
        "GraphQL",
        "Hasura GraphQL",
        "go-graphql-client",
      ],
    },
    {
      category: "ML & Data Science",
      subtitle: "Modeling & Analytics",
      highlight:
        "Financial predictive models, SHAP interpretability, and tabular analytics",
      skills: [
        "Scikit-learn",
        "XGBoost",
        "Pandas",
        "NumPy",
        "SHAP",
        "Matplotlib",
        "Seaborn",
      ],
    },
    {
      category: "Production MLOps",
      subtitle: "Lifecycle & Pipelines",
      highlight:
        "Data versioning controls, experiment visibility, and containerized CI/CD orchestration",
      skills: [
        "Git",
        "Docker",
        "Docker Compose",
        "Basic usage of Docker with Docker Compose",
        "MLflow",
        "DVC",
        "GitHub Actions",
      ],
    },
    {
      category: "Languages & IoT",
      subtitle: "Low & High Level Systems",
      highlight:
        "Object-oriented software mixed with low-level sensor automation",
      skills: ["Python", "JavaScript", "Java", "C++", "Arduino"],
    },
    {
      category: "Security & Auth",
      subtitle: "Zero-Trust Protocols",
      highlight:
        "Layered role-based access validation, JWT identity assertion, and structural encryption hooks",
      skills: [
        "JWT",
        "JWT authentication",
        "RBAC",
        "Data Encryption",
        "Input Validation",
        "SHA-256",
      ],
    },
  ];
  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const { clientWidth, scrollLeft } = scrollContainerRef.current;
      const scrollAmount =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="tech"
      className="w-full bg-transparent py-24 px-6 md:px-12 lg:px-16 font-sans text-foreground transition-colors duration-300 relative"
    >
      {/* Background radial soft light overlay */}
      <div className="absolute bottom-[5%] right-[5%] w-[450px] h-[450px] bg-foreground/[0.03] rounded-full -z-10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header Block matching the minimal premium style */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-foreground/50 font-semibold block mb-3">
            Core Technical Matrix
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground mb-4">
            Engineering Tooling
          </h2>
          <div className="h-[2px] w-16 bg-foreground/40 rounded-full mb-6"></div>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-foreground/60 leading-relaxed font-normal">
            A comprehensive overview of tools and frameworks applied across
            resilient full-stack architectures, production MLOps pipelines,
            high-accuracy risk models, and low-level embedded hardware.
          </p>
        </div>

        {/* Carousel View Wrapper */}
        <div className="relative px-2">
          {/* Navigation Controls */}
          <div className="absolute top-[-56px] right-4 flex items-center gap-2">
            <button
              onClick={() => handleScroll("left")}
              className="p-2.5 bg-card cursor-pointer border border-foreground/10 text-foreground hover:bg-foreground hover:text-background rounded-lg shadow-sm transition-all duration-300"
              aria-label="Scroll Left"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="p-2.5 bg-card border border-foreground/10 text-foreground hover:bg-foreground hover:text-background rounded-lg shadow-sm transition-all duration-300"
              aria-label="Scroll Right"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Sliding Card Grid Track */}
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pt-4 pb-10 no-scrollbar scrollbar-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {techData.map((item, index) => (
              <div
                key={index}
                className="w-[calc(100%-8px)] sm:w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] lg:w-[calc(25%-15px)] shrink-0 snap-start bg-card p-6 rounded-xl border border-foreground/10 hover:border-foreground/30 shadow-sm transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Metadata Header */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 bg-foreground/5 px-2.5 py-1 rounded-md border border-foreground/5">
                      Stack item 0{index + 1}
                    </span>
                    <span className="text-xs font-semibold text-foreground/30">
                      {item.skills.length} tools
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-foreground tracking-tight mb-0.5 group-hover:text-foreground transition-colors">
                    {item.category}
                  </h3>
                  <p className="text-xs font-medium text-foreground/40 mb-4 tracking-wide">
                    {item.subtitle}
                  </p>

                  {/* Informative Highlights */}
                  <div className="border-t border-foreground/5 pt-3 mb-6">
                    <p className="text-xs text-foreground/60 leading-relaxed font-normal">
                      {item.highlight}
                    </p>
                  </div>
                </div>

                {/* Micro Tag Cloud */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {item.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2.5 py-1 bg-foreground/[0.02] text-foreground/70 text-xs font-normal rounded-md border border-foreground/10 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
