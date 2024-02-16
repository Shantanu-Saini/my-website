import React from 'react';
import Navbar from "./Components/Navbar.jsx";
import Home from './Components/Home.jsx';
import About from "./Components/About.jsx";
import Skills from "./Components/Skills.jsx";
import Projects from "./Components/Projects.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App