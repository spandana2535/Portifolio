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
          I am a seasoned web application developer with around 3 years of experience in J2EE technologies, 
          Java, RESTful services, and more. Proficient in all phases of SDLC, I excel in requirements analysis, 
          design, coding, testing, and implementation. My expertise spans from Core Java to 
          microservices architecture, including Spring Boot and React JS for scalable applications. 
          I'm skilled in building RESTful APIs, utilizing Redux for state management, 
          and have a strong grasp of both SQL and NoSQL databases. Certified in AWS, 
          I bring a comprehensive skill set to create reliable and efficient applications.
        </p>
        <a href="#contact" className='button about_button'>Get in touch</a>
        </div>
      </div>
    </section>
  );
}

export default About;
