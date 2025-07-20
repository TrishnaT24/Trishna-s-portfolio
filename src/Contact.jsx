import React from "react";
import { Mail, Linkedin, Github, Download } from "lucide-react";

function Contact() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-12">
          <span className="bg-gradient-to-r from-slate-400 to-blue-400 bg-clip-text text-transparent">
            Contact me
          </span>
        </h1>
        
        {/* Contact Icons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
          {/* LinkedIn */}
          <div className="group relative">
            <a
              href="https://www.linkedin.com/in/trishna-tiwari-b831072b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-8 h-8 text-white" />
            </a>
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              LinkedIn
              {/* Resume Download */}
        </div>
          </div>

          {/* GitHub */}
          <div className="group relative">
            <a
              href="https://github.com/TrishnaT24"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-gray-500/20 hover:border-gray-400/50 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-8 h-8 text-white" />
            </a>
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              GitHub
            </div>
          </div>

          {/* Email */}
          <div className="group relative">
            <a
              href="/Trishna_Tiwari_Resume.pdf" // Replace with your actual resume file path
              download="Trishna_Tiwari_Resume.pdf"
              className="flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-green-500/20 hover:border-green-400/50 transition-all duration-300 hover:scale-110"
            >
              <Download className="w-8 h-8 text-white" />
            </a>
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              Resume
            </div>
          </div>
        </div>

        {/* Email Display */}
        <div className="text-center">
          <p className="text-lg md:text-xl text-gray-300 font-medium">
            <span className="text-blue-400">Email:</span> tiwaritrishna07@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;