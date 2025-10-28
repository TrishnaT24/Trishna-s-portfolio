
import React from 'react';
import { motion } from 'framer-motion';

function Achievements() {
  const interests  = [
    {
      title: "Coding",
      description: "Solved 900+ DSA and CP problems on various platforms with optimized time and space complexity."
    },
    {
      title: "Cyber Security", 
      description: "Completed labs on TryHackMe, Hack The Box, and PortSwigger, learning and ethically exploiting various vulnerabilities."
    },
    {
      title: "API Development (Backend)",
      description: "Built and deployed multiple APIs with GET/POST routes, implementing JWT authentication, authorization, and admin access."
    }
  ]

  return (
    <section className="py-20 bg-black">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-12">
          <span className="bg-gradient-to-r from-slate-500 to-blue-300 bg-clip-text text-transparent">Key Interests</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg group"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3">
                {interest.title}
              </h2>
              <p className="text-sm sm:text-base text-teal-600">{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;