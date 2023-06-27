import React from 'react';
import './about.css';
import me from '../../resources/me-about.jpg';
import { BsBriefcaseFill } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { SlBadge } from 'react-icons/sl';
import {BsCodeSquare} from 'react-icons/bs';

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>ME</h2>
      <div className='container about_div'>
        <div className='about-me'>
        <div className='about_image'>
          <img src={me} alt="This is my pic" />
        </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
       <a href="#education">   <article id='about_education' className='about_card'>
               <FaGraduationCap className='about_icon'/>
              <h5>Education</h5>
              <small>UNCC Graduate</small>
            </article>
            </a>
            <a href="#experience">  <article id="about_experience" className='about_card'>
             <BsBriefcaseFill className='about_icon'/>
              <h5>Experience</h5>
              <small>2.5yrs+ as Software Engineer</small>
            </article>
            </a>
            <a href="#skills">  <article id='about_skills' className='about_card'>
             <SlBadge className='about_icon'/>
              <h5>Skills</h5>
              <small>Full-stack Developer Skill set</small>
            </article>
            </a>
            <a href="#portifolio">  <article id='about_projects' className='about_card'>
              <BsCodeSquare className='about_icon'/>
              <h5>Projects</h5>
              <small>My Projects Showcase</small>
            </article>
            </a>
          </div>
          <p>
          Adaptable full-stack developer with a passion for continuous learning. Skilled in Java, JavaScript, Python, SQL, and proficient in databases like MySQL, MongoDB, and PostgreSQL. Experienced in web design, cloud technologies (AWS, GCP), and user-centered design principles. 
          Committed to delivering efficient solutions and enhancing user experiences.
        </p>
        <a href="#contact" id = "about-contact-button" className='button'>Get in touch</a>
        </div>
      </div>
    </section>
  );
}

export default About;
