import React from "react";
import image from './images/my.jpeg'
function About() {
  return (
    <div>
      <div className="min-h-screen bg-black flex flex-col px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 text-center mt-8 mb-12">
          <span className="bg-gradient-to-r from-slate-500 to-blue-300 bg-clip-text text-transparent">About me</span>
        </h1>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 text-left">
            <p className="text-white">
              Hi, I'm Trishna Tiwari, currently pursuing a B.Tech in Computer Science and Engineering with a specialization in Data Science from Sardar Patel Institute of Technology. I'm an enthusiastic programmer with a strong zeal to learn, build, and innovate to bring meaningful change. I primarily work with the MERN stack to build various full stack projects with primary interest being in backend development. I'm also well-versed in Data Structures and Algorithms, having honed my problem-solving skills through various competitive coding platforms. One of my key strengths is my ability to quickly adapt to new technologies and collaborate effectively within teams. Additionally, I have a growing interest in Cyber Security, which I look forward to exploring further in the near future.
            </p>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            {/* Add your image here */}
            <img src={image} alt="Trishna Tiwari" className="max-w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;