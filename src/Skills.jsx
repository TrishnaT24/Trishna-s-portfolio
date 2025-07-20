import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "C", "Java", "JavaScript", "Python"]
    },
    {
      title: "Frameworks",
      skills: ["MongoDB", "React", "Node.js", "Express", "Tailwind CSS", "HTML", "CSS"]
    },
    {
      title: "Other Tools",
      skills: ["MySQL", "Firebase", "GitHub", "Figma", "Postman","Burpsuite"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const skillListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center px-4 relative overflow-hidden">
      {/* Additional gradient overlay for depth */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/30 via-transparent to-violet-950/40"></div>
      
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-12 relative z-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-slate-500 to-blue-300 bg-clip-text text-transparent">My Skills</span>
        </motion.h1>
        
        <motion.div 
          className="flex flex-col lg:flex-row gap-8 justify-center items-stretch relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-slate-800/80 via-slate-900/90 to-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-600/30 flex-1 min-w-0 relative overflow-hidden"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Card gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 rounded-2xl"></div>
              
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-600/50 pb-3 relative z-10">
                {category.title}
              </h2>
              <motion.ul 
                className="text-left space-y-3 relative z-10"
                variants={skillListVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.li 
                    key={skillIndex}
                    className="text-teal-600 text-lg flex items-center hover:text-white transition-colors duration-200"
                    variants={skillItemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <motion.span 
                      className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mr-3 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15 }}
                    ></motion.span>
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-slate-400 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;