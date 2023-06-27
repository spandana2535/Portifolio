import React from 'react';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Portifolio from './Components/Portifolio/Portifolio';
import Education from './Components/Education/Education'
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
const App = () => {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Experience></Experience>
      <Education></Education>
      <Skills></Skills>
      <Portifolio></Portifolio>
      <Contact></Contact>
    </div>
  )
}

export default App