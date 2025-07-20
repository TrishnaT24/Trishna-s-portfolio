import React, { useEffect, useRef, useState } from 'react';
import { Linkedin, Github, Braces, BadgeCheck, Medal } from 'lucide-react';

function Home() {
  const vantaRef = useRef(null);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Enthusiast Programmer',
    'MERN Stack Developer', 
    'Cyber Security Enthusiast',
    'Full Stack Developer'
  ];

  useEffect(() => {
    // Initialize Vanta.js NET animation
    const vantaEffect = window.VANTA.NET({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x6366f1, // Indigo color to match your theme
      backgroundColor: 0x000000,
      maxDistance: 19.00,
      spacing: 17.00,
      points: 10.00,
      showDots: true
    });

    // Cleanup function
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const handleTyping = () => {
      const currentFullText = texts[currentIndex];
      
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.substring(0, currentText.length + 1));
        } else {
          // Finished typing, start deleting after pause
          setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentFullText.substring(0, currentText.length - 1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
          return;
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);
  return () => clearTimeout(timer);
}, [currentText, currentIndex, isDeleting, texts]);

return (
  <div 
    ref={vantaRef}
    className="min-h-screen flex items-center justify-center px-4 relative"
  >
    {/* Overlay to ensure text is visible */}
    <div className="absolute inset-0 bg-black/20"></div>
    
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        <span className="bg-gradient-to-r from-slate-500 to-blue-300 bg-clip-text text-transparent">Trishna Tiwari</span>
      </h1>
      
      <div className="h-16 md:h-20 flex items-center justify-center mb-8">
        <p className="text-xl md:text-2xl text-indigo-300 font-medium">
          {currentText}
          <span className="animate-pulse text-indigo-400">|</span>
        </p>
      </div>
      
      <div className="flex justify-center gap-6 mb-8">
        {/* LinkedIn */}
        <div className="group relative">
          <a 
            href="https://www.linkedin.com/in/trishna-tiwari-b831072b0/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-indigo-500/20 hover:border-indigo-400/50 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            LinkedIn
          </div>
        </div>

        {/* GitHub */}
        <div className="group relative">
          <a 
            href="https://github.com/TrishnaT24" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-indigo-500/20 hover:border-indigo-400/50 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6 text-white" />
          </a>
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            GitHub
          </div>
        </div>

        {/* LeetCode */}
        <div className="group relative">
          <a 
            href="https://leetcode.com/u/tiwaritrishna07/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-indigo-500/20 hover:border-indigo-400/50 transition-all duration-300 hover:scale-110"
          >
            <Braces className="w-6 h-6 text-white" />
          </a>
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            LeetCode
          </div>
        </div>

        {/* CodeChef */}
        <div className="group relative">
          <a 
            href="https://www.codechef.com/users/trizz_24" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-indigo-500/20 hover:border-indigo-400/50 transition-all duration-300 hover:scale-110"
          >
            <BadgeCheck className="w-6 h-6 text-white" />
          </a>
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            CodeChef
          </div>
        </div>

        {/* CodeForces */}
        <div className="group relative">
          <a 
            href="https://codeforces.com/profile/trizz_24" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-indigo-500/20 hover:border-indigo-400/50 transition-all duration-300 hover:scale-110"
          >
            <Medal className="w-6 h-6 text-white" />
          </a>
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            CodeForces
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {/* Add your buttons or additional content here */}
      </div>
    </div>
  </div>
);
}

export default Home;