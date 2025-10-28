





import React from "react";
import image from './images/my.jpeg';

function About() {
  return (
    <section className="py-20 bg-black">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-slate-500 to-blue-300 bg-clip-text text-transparent">About me</span>
        </h1>
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <p className="text-white text-sm sm:text-base leading-relaxed">
              Hi, I'm Trishna Tiwari, currently pursuing a B.Tech in Computer Science and Engineering with a specialization in Data Science from Sardar Patel Institute of Technology. I'm an enthusiastic programmer with a strong zeal to learn, build, and innovate to bring meaningful change. I primarily work with the MERN stack to build various full stack projects with primary interest being in backend development. I'm also well-versed in Data Structures and Algorithms, having honed my problem-solving skills through various competitive coding platforms. One of my key strengths is my ability to quickly adapt to new technologies and collaborate effectively within teams. Additionally, I have a growing interest in Cyber Security, which I look forward to exploring further in the near future.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center order-1 lg:order-2">
            <img src={image} alt="Trishna Tiwari" className="w-64 sm:w-80 md:w-96 h-auto rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;