import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './nav.css';
import { AiFillHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BsBriefcaseFill } from 'react-icons/bs'
import { LuContact } from 'react-icons/lu';
import {BsCodeSquare} from 'react-icons/bs'
import Header from '../Header/Header';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <Router>
        {/* <Switch> */}
          <Route path='/' Component={Header} onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}>
          <AiFillHome /> 
          </Route>
          <Route path='/about' Component={About} onClick={() => setActiveNav('/about')} className={activeNav === '/about' ? 'active' : ''}>
          <AiOutlineUser />
          </Route>
          <Route path='/experience' Component={Experience} onClick={() => setActiveNav('/experience')} className={activeNav === '/experience' ? 'active' : ''}>
          <BsBriefcaseFill />
          </Route>
          <Route path='/portfolio' Component={Portfolio} onClick={() => setActiveNav('/portfolio')} className={activeNav === '/portfolio' ? 'active' : ''}>
          <BsCodeSquare />
          </Route>
          <Route path='/contact' Component={Contact} onClick={() => setActiveNav('/contact')} className={activeNav === '/contact' ? 'active' : ''}>
          <LuContact />
          </Route>
        {/* </Switch> */}
      </Router>
    </nav>
  )
}

export default Nav