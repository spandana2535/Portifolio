import React, { useState } from 'react';
import './nav.css';
import { AiFillHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BsBriefcaseFill } from 'react-icons/bs'
import { LuContact } from 'react-icons/lu';
import {BsCodeSquare} from 'react-icons/bs'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBriefcaseFill /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portifolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsCodeSquare /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><LuContact /></a>
    </nav>
  )
}

export default Nav