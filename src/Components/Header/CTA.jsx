import React from 'react'
import resume from '../../resources/Spandana Pasupuleti-Resume.pdf';

const CTA = () => {
  return (
    <div className='cta'>
      <a href={resume} download className='button'>Download CV</a>
      <a href="#contact" className='button'>Get in Touch</a>
    </div>
  )
}

export default CTA