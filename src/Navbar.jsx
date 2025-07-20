import React from 'react';

function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between gap-6 fixed top-0 w-full z-50">
      <h1 className="font-bold text-xl">TRISHNA</h1>
      <div className="flex gap-8">
        <button 
          onClick={() => scrollToSection('home')}
          className="hover:text-gray-300 transition-colors"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('about')}
          className="hover:text-gray-300 transition-colors"
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection('skills')}
          className="hover:text-gray-300 transition-colors"
        >
          Skills
        </button>
        <button 
          onClick={() => scrollToSection('projects')}
          className="hover:text-gray-300 transition-colors"
        >
          Projects
        </button>
        <button 
          onClick={() => scrollToSection('achievements')}
          className="hover:text-gray-300 transition-colors"
        >
          Key Interests
        </button>
        <button 
          onClick={() => scrollToSection('experience')}
          className="hover:text-gray-300 transition-colors"
        >
          Experience
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="hover:text-gray-300 transition-colors"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}

export default Navbar;