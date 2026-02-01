import React from 'react';
import '../styles/Portfolio.css';
import PortfolioImg1 from '../assets/images/vyral-media.png';
import PortfolioImg2 from '../assets/images/home-without-login.png';
import PortfolioImg3 from '../assets/images/portfolio.png';

const projects = [
  {
    title: 'Vyral Media',
    description: 'A full-service digital marketing and branding agency website focused on making brands visible through strategy, content, and digital campaigns.',
    tech: 'HTML, Tailwind CSS, JavaScript, GSAP',
    image: PortfolioImg1,
    liveLink: 'https://vyral.ae/',
    githubLink: 'https://github.com/AbdulAziz2397/Vyral-Media.git'
  },
  {
    title: 'Darzify',
    description: 'A location-based platform for finding nearby tailors, boutiques, and designers with easy order and measurement management.',
    tech: 'HTML, Tailwind CSS, JavaScript',
    image: PortfolioImg2,
    liveLink: 'https://darzify.netlify.app/',
    githubLink: 'https://github.com/AbdulAziz2397/darzify.git'
  },
  {
    title: 'Portfolio Website',
    description: 'A clean and responsive portfolio website showcasing my skills, projects, and services as a MERN Stack Developer. Built with modern web technologies and focused on performance and usability.',
    tech: 'React, Tailwind CSS, JavaScript',
    image: PortfolioImg3,
    liveLink: 'https://abdulaziz-tahir.netlify.app',
    githubLink: 'https://github.com/AbdulAziz2397/AbdulAziz-Tahir-.git'
  }
];

const Portfolio = () => {
  return (
    <section className="portfolio-sec" id="portfolio">
      <div className="portfolio-text">
        <h3>My <span>Portfolio</span></h3>
        <p>Here are some of my web and app development projects showcasing modern, scalable, and user-friendly solutions.</p>
      </div>

      <div className="portfolio-media">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <p className="tech-stack">{project.tech}</p>
              <div className="project-links">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
