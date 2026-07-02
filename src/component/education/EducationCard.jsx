// CertificationCard.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  HiOutlineExternalLink,
  HiOutlineCalendar,
  HiOutlineCheckCircle,
} from "react-icons/hi";

const CertificationCard = ({
  title,
  institution,
  institutionUrl,
  date,
  bullets,
}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "-10px 0px -10px 0px",
      },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-card p-6 md:p-8 rounded-xl border border-foreground/10 shadow-sm hover:border-foreground/30 flex flex-col justify-between text-left group transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] mb-6 md:mb-8 last:mb-0 transform ${
        isIntersecting
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <div>
        {/* Header Block */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="space-y-1.5">
            {/* Increased title text size to text-xl md:text-2xl */}
            <h3 className="text-xl md:text-2xl font-black tracking-tight text-foreground leading-snug flex items-start gap-2.5">
              <HiOutlineCheckCircle className="text-2xl mt-0.5 text-foreground/40 group-hover:text-foreground transition-colors shrink-0" />
              <span>{title}</span>
            </h3>
            {/* Increased institution text size to text-base */}
            <p className="text-base font-bold text-foreground/60 pl-8.5">
              {institution}
            </p>
          </div>

          {institutionUrl && (
            <a
              href={institutionUrl}
              target="_blank"
              rel="noreferrer"
              className="text-foreground/40 hover:text-foreground transition-colors p-2 bg-foreground/[0.02] border border-foreground/5 rounded-lg shrink-0"
              title="Verify Credentials"
            >
              <HiOutlineExternalLink size={18} />
            </a>
          )}
        </div>

        {/* Bullet Deliverables with Structural Alignment */}
        {bullets && bullets.length > 0 && (
          <div className="pl-8.5 mb-6 border-l border-foreground/5 space-y-3 mt-4">
            <ul className="space-y-3">
              {bullets.map((bullet, index) => (
                // Increased list font sizing to text-sm md:text-base
                <li
                  key={index}
                  className="text-sm md:text-base text-foreground/60 leading-relaxed font-normal flex items-start gap-2.5"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/30 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Date Stamp Footer */}
      <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-widest text-foreground/40 uppercase pl-8.5">
        <HiOutlineCalendar className="text-base" /> {date}
      </div>
    </div>
  );
};

export default CertificationCard;
