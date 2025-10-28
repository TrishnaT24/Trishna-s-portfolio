



import React from "react";
import { motion } from "framer-motion";

function Experience() {
   const experiences = [
    {
      title: "Cyber Security Intern",
      subtitle: "Tata Consultancy Services (TCS)",
      description:
        "Identified and exploited vulnerabilities like SQL Injection, XSS, CSRF, CORS, and broken authentication using BurpSuite, SQLMap, and PortSwigger. Validated automated scan results with manual testing and crafted custom payloads. Used Kali Linux tools and Google Dorking for security assessments.",
    },
    {
      title: "Executive Head, Sports Committee",
      subtitle: "Sardar Patel Institute of Technology (S.P.I.T)",
      description:
        "Led a team of 100 students to organize a college marathon with 1000+ participants and an inter-college sports event with 60+ colleges. Managed PR to boost event visibility and ensured efficient team coordination.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.2 },
    }),
    hover: {
      scale: 1.02, // Reduced for mobile
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div>
      <div className="bg-black flex flex-col px-4 pt-8 min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-800 mb-8 sm:mb-12">
            <span className="bg-gradient-to-r from-slate-400 to-blue-400 bg-clip-text text-transparent">
              My Experience
            </span>
          </h1>
          <div className="flex flex-col gap-4 sm:gap-6 max-w-2xl mx-auto w-full">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-lg p-4 sm:p-6 text-white shadow-lg"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover="hover"
                custom={index}
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center sm:text-left">{exp.title}</h2>
                <h3 className="text-base sm:text-lg text-blue-400 mb-3 sm:mb-4 text-center sm:text-left">{exp.subtitle}</h3>
                <p className="text-sm sm:text-base leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;