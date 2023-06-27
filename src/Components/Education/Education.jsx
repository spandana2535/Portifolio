import React from 'react';
import './education.css';
const Education = () => {
  return (
    <section id="education">
      <h5>Academics</h5>
      <h2>Education</h2>
      <div className= 'container education-cards'>
        <article className='education-card'>
          <h2>Masters Degree</h2>
          <h4>Information Technology</h4>
          <a href="https://www.charlotte.edu/" target='_blank' rel="noreferrer">University of North Carolina at Charlotte</a> <br />
          <small>GPA: 3.9/4</small> <br />
          <small>2022-2023</small>
        </article>
        <article className='education-card'>
          <h2>Bachelors Degree</h2>
          <h4>Chemical Engineer</h4>
          <a href="https://www.jntuk.edu.in/" target='_blank' rel="noreferrer">Jawaharlal Technological University Kakinada</a> <br />
         
          <small>GPA: 3.5/4</small> <br />
          <small>2015-2019</small>
        </article>
      </div>
    </section>
  )
}

export default Education