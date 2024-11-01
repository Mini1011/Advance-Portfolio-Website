import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Element } from 'react-scroll';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Skills from './components/Pages/Skills';
import Contact from './components/Pages/Contact';
import Projects from './components/Pages/Projects';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SocialLinks from './components/Pages/SocialLink';


function App() {
  return (
    <>
      <Navbar />
      <div className="pages">
        <Element name="home">
          <Home />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
        <Element name="SocialLinks">
          <SocialLinks />
        </Element>
      </div>
    </>
  );
}

export default App;