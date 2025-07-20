import React from "react";

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

  return (
    <div className="bg-black min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-slate-400 to-blue-400 bg-clip-text text-transparent">
              My Experience
            </span>
          </h1>
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-8 text-white shadow-2xl border border-gray-800 hover:scale-[1.02] hover:shadow-3xl transition-all duration-300 hover:border-gray-700"
            >
              {/* Card Header */}
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-left mb-3 text-white">
                  {exp.title}
                </h2>
                <h3 className="text-lg md:text-xl text-left font-medium text-blue-400 mb-4">
                  {exp.subtitle}
                </h3>
              </div>
              
              {/* Card Description */}
              <div className="text-left">
                <p className="text-base md:text-lg leading-relaxed text-white font-normal">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;