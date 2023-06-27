import React from 'react';
import './skills.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

const Skills = () => {
   
  return (
    <section id="skills">
      <h5>my skills </h5>
      <h2>What I expertise in</h2>
      <div className="container skills-container">
        <article className='skill'>
          <h3>Programming Languages</h3>
          <ol>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>SQL</li>
          </ol>
        </article>
        <article className='skill'>
          <h3>Databases</h3>
          <ol>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ol>
        </article>
        <article  className='skill'>
          <h3>Web Development</h3>
          <ol>
            <li>HTML5</li>
            <li>CSS</li>
            <li>Node.js</li>
            <li>ReactJS</li>
            <li>Redux</li>
            <li>ExpressJS</li>
          </ol>
        </article>
        <article className='skill'>
          <h3>Cloud Technologies</h3>
          <ol>
            <li>Amazon Web Services (AWS)</li>
            <li>Google Cloud Platform (GCP)</li>
          </ol>
        </article>
        <article  className='skill'>
          <h3>Software Tools</h3>
          <ol>
            <li>Visual Studio Code</li>
            <li>Postman</li>
            <li>IntelliJ IDEA</li>
            <li>Eclipse</li>
            <li>pgAdmin4</li>
            <li>Git</li>
            <li>Jenkins</li>
            <li>Tableau</li>
          </ol>
        </article>
        <article className='skill'>
          <h3>Frameworks</h3>
          <ol>
            <li>JDBC</li>
            <li>Spring (MVC, Boot, Batch)</li>
          </ol>
        </article>
        <article  className='skill'>
          <h3>Operating Systems</h3>
          <ol>
            <li>Unix</li>
            <li>Linux</li>
          </ol>
        </article>
        <article  className='skill'>
          <h3>User Experience (UX) and Design</h3>
          <ol>
            <li>Figma</li>
            <li>Lucid Chart</li>
            <li>User-centered Design</li>
            <li>Wireframing</li>
            <li>Prototyping</li>
            <li>Interaction Design</li>
            <li>Visual Design</li>
          </ol>
        </article>
      </div>
    </section>
  );
};

export default Skills;
