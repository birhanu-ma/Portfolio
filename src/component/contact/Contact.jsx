import React from "react";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineClock,
} from "react-icons/hi";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { SiUpwork, SiLeetcode } from "react-icons/si";

const Contact = () => {
  const contactInfo = [
    {
      /* Changed text-blue-600 to text-primary */
      icon: <HiOutlineMail className="text-primary" size={24} />,
      label: "Email",
      value: "birhanumatebe12@gmail.com",
      link: "mailto:birhanumatebe12@gmail.com",
    },
    {
      icon: <HiOutlineLocationMarker className="text-primary" size={24} />,
      label: "Location",
      value: "Addis Ababa, Ethiopia (Remote Available)",
      link: null,
    },
    {
      icon: <HiOutlineClock className="text-primary" size={24} />,
      label: "Availability",
      value: "Available for new projects",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      color: "bg-[#1B1F23]",
      link: "https://github.com/birhanu-ma",
    },
    {
      icon: <FaLinkedinIn />,
      color: "bg-[#0A66C2]",
      link: "https://www.linkedin.com/in/birhanu-matebe",
    },
    { icon: <SiUpwork />, color: "bg-[#14A800]", link: "" },
    {
      icon: <SiLeetcode />,
      color: "bg-[#FFA116]",
      link: "https://leetcode.com/u/BirhanuMatebe/",
    },
  ];

  return (
    /* Changed bg-white to bg-background and text-slate to text-foreground */
    <section id="contact" className="bg-background py-24 px-6 md:px-12 font-sans text-foreground transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Column: Image/Illustration Div */}
          <div className="w-full md:w-1/2 flex justify-center">
            {/* Changed border-slate-100 to border-border (implicit via shadow/overflow) */}
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border border-border">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000"
                alt="Contact Tamirat"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              {/* Changed bg-blue-600/10 to bg-primary/10 */}
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
          </div>

          {/* Right Column: Contact Info */}
          <div className="w-full md:w-1/2 text-left">
            {/* Changed text-slate-900 to text-foreground */}
            <h2 className="text-4xl font-extrabold text-foreground mb-4">
              Get In Touch
            </h2>
            {/* Changed bg-blue-600 to bg-primary */}
            <div className="h-1 w-20 bg-primary rounded-full mb-10"></div>

            {/* Contact Details */}
            <div className="space-y-8 mb-12">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-5">
                  {/* Changed bg-blue-50 to bg-card (or primary/10) */}
                  <div className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    {/* Changed text-slate-900 to text-foreground */}
                    <p className="text-sm font-bold text-foreground mb-0.5 uppercase tracking-wide">
                      {item.label}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        /* Changed text-slate-600 to text-foreground/60 */
                        className="text-foreground/60 hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground/60">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            {/* Changed border-slate-100 to border-border */}
            <div className="pt-8 border-t border-border">
              {/* Changed text-slate-800 to text-foreground */}
              <h3 className="text-lg font-bold text-foreground mb-6 font-mono tracking-tighter uppercase">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`${social.color} text-white w-12 h-12 rounded-xl flex items-center justify-center text-xl hover:-translate-y-1 transition-all shadow-md`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;