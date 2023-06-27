import React from 'react'
import { GrLinkedin } from 'react-icons/gr';
import { GrInstagram } from 'react-icons/gr';
import { GrGithub } from 'react-icons/gr';
const SocialMedia = () => {
  return (
    <div className='header_social_media'>
      <a href="https://www.linkedin.com/in/spandanapasupuleti/" target='_blank' rel="noreferrer" ><GrLinkedin className='social-icon' /></a>
      <a href="https://www.instagram.com/spandana.pasupuleti/" target='_blank' rel="noreferrer"><GrInstagram className='social-icon' /></a>
      <a href="https://github.com/dashboard" target='_blank' rel="noreferrer"><GrGithub className='social-icon'/></a>
    </div>
  )
}

export default SocialMedia