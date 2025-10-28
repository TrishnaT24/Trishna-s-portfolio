

import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Achievements from './Achievements';
import Experience from './Experience';
import Contact from './Contact';

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navbar is fixed, stays on top */}
      <Navbar />

      {/* Main content starts below navbar */}
      <main className="pt-20"> {/* This creates space */}
        <section id="home"><Home /></section>
        <section id="about" className="scroll-mt-20"><About /></section>
        <section id="skills" className="scroll-mt-20"><Skills /></section>
        <section id="projects" className="scroll-mt-20"><Projects /></section>
        <section id="achievements" className="scroll-mt-20"><Achievements /></section>
        <section id="experience" className="scroll-mt-20"><Experience /></section>
        <section id="contact" className="scroll-mt-20"><Contact /></section>
      </main>
    </div>
  );
}

export default App;