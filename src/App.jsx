import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Achievements from './Achievements';
import Experience from './Experience';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/* Add padding-top to account for fixed navbar */}
      <div className="pt-10">
        {/* Each section should have an id that matches the navbar buttons */}
        <section id="home">
          <Home />
        </section>
        <section id="about" className="scroll-mt-10">
          <About />
        </section>
        
        <section id="skills" className="scroll-mt-10">
          <Skills />
        </section>
        
        <section id="projects" className="scroll-mt-10">
          <Projects />
        </section>
        
        <section id="achievements" className="scroll-mt-10">
          <Achievements />
        </section>
        
        <section id="experience" className="scroll-mt-10">
          <Experience />
        </section>
        
        <section id="contact" className="scroll-mt-10">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;

