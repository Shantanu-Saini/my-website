import React, { useState } from 'react';
import Navbar from "./Components/Navbar.jsx";
import Home from './Components/Home.jsx';
import About from "./Components/About.jsx";
import Skills from "./Components/Skills.jsx";
import Projects from "./Components/Projects.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {

  const [isLight, setIsLight] = useState(true);

  const toggleMode = () => {
    if (isLight) {
      setIsLight(false);
    }
    else {
      setIsLight(true);
    }
  }

  return (
    <>
      <Navbar toggleMode={toggleMode} isLight={isLight} />
      <Home isLight={isLight}/>
      <About isLight={isLight}/>
      <Skills isLight={isLight}/>
      <Projects isLight={isLight}/>
      <Contact isLight={isLight}/>
      <Footer isLight={isLight}/>
    </>
  )
}

export default App