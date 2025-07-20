import React from 'react'

function Achievements() {
  const interests = [
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
    <div className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-slate-400 to-blue-400 bg-clip-text text-transparent">
              Key Interests
            </span>
          </h1>
        </div>
        
        {/* Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-xl p-8 text-white shadow-2xl border border-gray-800 hover:scale-[1.03] hover:shadow-3xl transition-all duration-300 hover:border-gray-700 group"
            >
              {/* Card Header */}
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {interest.title}
                </h2>
              </div>
              
              {/* Card Description */}
              <div>
                <p className="text-base md:text-lg leading-relaxed text-teal-600 font-normal">
                  {interest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Achievements