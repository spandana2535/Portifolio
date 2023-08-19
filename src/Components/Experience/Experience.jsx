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
         <h3>Systems Engineer | Full Stack Developer </h3> 
         <p>Aug 2019 - Dec 2021</p>
         <h4>Tata Consultancy Services, India </h4><br />
          <ol>
          <li>Leveraged Software Development Life Cycle (SDLC) methodologies within an agile methodology environment, with a solid understanding of Scrum, sprints, and user stories.</li>
<li>Developed application on Spring framework by utilizing its features like Spring Dependency injection, Spring Web flow with Spring MVC and Spring BOOT in IntelliJ IDEA.</li>
<li>Worked with principles related to MongoDB databases, including locking, transactions, indexes, shading, replication, DB schema design, etc.</li>
<li>Designed database and created tables, generating reports, written complex SQL Queries and stored procedures as per technical requirements.</li>
<li>Used Hibernate Annotations concept to retrieve data from the database and integrate with Spring BOOT to interact with back end SQL Server.</li>
<li>Experienced in Core Java concepts such as OOP Concepts, Collections Framework, and Exception Handling, I/O System, Multi-Threading, JDBC, Generics.</li>
<li>Developed dynamic web applications using Servlets and JSP, implementing user interfaces and business logic to provide seamless user experiences.</li>
<li>Experienced in working with Hibernate native SQL queries and named queries to execute custom SQL statements and optimize data retrieval.</li>
<li>Designed and maintained servlet-based controllers to handle HTTP requests, applying best practices for request processing and routing.</li>
<li>Involved in developing UI using Spring MVC framework, JSP, JSTL, HTML5, CSS, JavaScript, JQuery, AJAX, React JS, and Redux.</li>
<li>Developed resilient Spring Boot batch application utilizing Spring Batch framework to process and import massive data sets into MySQL database efficiently.</li>
<li>Utilized Git for collaborative software development, ensuring smooth code integration and version control within an Agile methodology environment.</li>
<li>Monitored database performance using tools like pgAdmin4, and implemented proactive measures to prevent performance degradation.</li>
<li>Created Excel reports to monitor user access information by fetching data using SQL queries.</li>
<li>Designed web page and established a connection with the backend database to enable CRUD operations.</li>
</ol>
    <br></br>
<h3>Java Full Stack Developer Intern</h3> 
         <p>Feb 2023 - July 2023</p>
         <h4>JPMC, NC </h4><br />
         <ol>
         <li>Participated in diverse SDLC phases: requirements, design, analysis, and coding.</li>
<li>Engaged in Agile/Scrum practices, including sprint planning and daily stand-ups.</li>
<li>Developed UI with Spring MVC, JSP, HTML5, CSS, JavaScript, JQuery, AJAX, and React JS.</li>
<li>Analyzed legacy React JS structure, replicated REST services using Java JAX-WS API.</li>
<li>Created responsive interfaces with HTML5, CSS, JavaScript, React JS, Redux.</li>
<li>Implemented custom Hibernate user types for seamless Java-database data mapping.</li>
<li>Integrated AJAX for dynamic web pages, merging client-server logic.</li>
<li>Built robust Java/J2EE apps (Servlets, JSP, JDBC) following MVC architecture.</li>
<li>Optimized MySQL, PostgreSQL schemas for data integrity and performance.</li>
<li>Utilized Spring Core, MVC, Boot for dependency injection, REST APIs, and microservices.</li>
<li>Employed AWS services - S3, EC2, DynamoDB - for scalable architecture.</li>
<li>Developed tests (JUnit) for frontend, backend components.</li>
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

