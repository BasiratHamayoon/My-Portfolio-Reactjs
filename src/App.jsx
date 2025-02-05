import { useState } from 'react';
import './App.css';
import Navbar from './Costume.Components/Navbar.jsx';
import Home from './Costume.Components/Home';
import Skills from './Costume.Components/Skills';
import Projects from './Costume.Components/Projects';
import AboutMe from './Costume.Components/AboutMe';
import Contact from './Costume.Components/Contact';

function App() {
  return (
    <>
      {/* Navbar Container Wrapper */}
      <div className='w-[100%] absolute z-10 bg-[#121313] lg:px-[52px] md:px-[20px]'>
        <Navbar />
      </div>
      <div id='home' className='bg-[#121314] h-[100vh]'>
        <Home />
      </div>
      <div id='skills' className='bg-[#121313]'>
        <Skills />
      </div>
      <div id='projects' className='bg-[#121313]'>
        <Projects />
      </div>
      <div id='about' className='bg-[#121313]'>
        <AboutMe />
      </div>
      <div id='contact' className='bg-[#121313]'>
        <Contact />
      </div>
    </>
  );
}

export default App;