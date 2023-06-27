import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Portfolio from './Components/Portfolio/Portfolio';
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
      <Portfolio></Portfolio>
      <Contact></Contact>
    </div>
  )
}

export default App