import React from 'react';
import './portfolio.css';
import nbad from '../../resources/nbad.jpg';
import spring from '../../resources/spring-batch.png';
import hcd from '../../resources/hcd.jpeg';
import redux from '../../resources/redux.jpeg';
import portfolio from '../../resources/portfolio.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: nbad,
      title: 'Web Application Development',
      github: 'https://github.com/spandana2535/NBAD'
    },
    {
      id: 2,
      image: hcd,
      title: 'AI based App Design',
      github: 'https://github.com/spandana2535/HCD'
    },
    {
      id: 3,
      image: redux,
      title: 'REDUX App',
      github: 'https://github.com/spandana2535/Redux'
    },
    {
      id: 4,
      image: spring,
      title: 'Spring Boot Batch job',
      github: 'https://github.com/spandana2535/springbatch'
    },

    {
      id: 5,
      image: portfolio,
      title: 'Personal portfolio',
      github: 'https://github.com/spandana2535/Portifolio'
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>portfolio</h2>
      <div className="container portfolio-container">
        {projects.map(({ id, image, title, github }) => (
          <article key={id} className="portfolio-item">
            <div className="portfolio_image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <a href={github} className="project-button" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
