import React from 'react';
import './experience.css';
import tcs from '../../resources/tcs.png';
const Experience = () => {
  return (
    <section id="experience">
      <h5>my Work </h5>
      <h2>Experience</h2>

      <div className=" container experience-content">
        <div  className='experience-points'>
         <h3>Associate System Engineer (07/2019 to 12/2021)</h3> 
         <h4>Tata Consultancy Services, India </h4><br />
          <ol>
            <li>Developed a Spring Batch job in Java to automate the server's cleanup of old report directories</li>
            <li>Developed a resilient Spring Boot batch application utilizing the Spring Batch framework to efficiently process and import massive data sets into a MySQL database.</li>
            <li>Utilized Git for collaborative software development, ensuring smooth code integration and version control within an Agile methodology environment</li>
            <li>Created Excel reports to monitor user access information by fetching data using SQL queries</li>
            <li>Managed databases using SQL procedures, triggers, and other optimization techniques to increase efficiency</li>
            <li>Maintained a centralized access management application and provided Level 2 production support</li>
            <li>Designed a web page and established a connection with the backend database to enable CRUD operations</li>
            <li>Leveraged Software Development Life Cycle(SDLC) methodologies within an Agile methodology environment, with a strong understanding of Scrum, Kanban boards, sprints, and user stories</li>
          </ol>
        </div>
        <div className='experience-image-div'>
         <a href="https://www.tcs.com/" target='_blank' rel='noreferrer'><img src={tcs} className= 'experience-image'
          alt="tcs" /></a>
        </div>
      </div>
    </section>
  )
}

export default Experience

