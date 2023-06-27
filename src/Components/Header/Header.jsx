import React from 'react';
import './header.css';
import CTA from './CTA';
import me from '../../resources/me.png';
import SocialMedia from './SocialMedia';
const Header = () => {
  return (
    <header>

      <div className='container header_container'>
        <div id = "intro-div">
        <h5>Hi!, It's me </h5>
        <h1>Spandana Pasupuleti</h1>
        <h4 className='text-light'>Developer</h4>
        <CTA></CTA>
        <SocialMedia />
        </div>
        <div className='me'><img src={me} alt="This is me" /></div>
        <a href="#contact" className='Scroll_down'> ScrollDown</a>
      </div> 
    </header>
  )
}

export default Header