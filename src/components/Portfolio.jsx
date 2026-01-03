import React from 'react';
import '../styles/Portfolio.css';

const projects = [
  {
    title: 'E-commerce Website',
    description: 'A full-stack e-commerce app with product management, cart, and checkout features.',
    tech: 'React, Node.js, Express, MongoDB, Firebase',
    image: 'https://shorturl.at/32Cok',
    liveLink: 'https://your-ecommerce-site.netlify.app',
    githubLink: 'https://github.com/yourusername/ecommerce-app'
  },
  {
    title: 'Eye-Controlled Interface',
    description: 'Assistive web app that uses eye movement and blinking to control UI actions.',
    tech: 'React, OpenCV.js, JavaScript',
    image: 'https://shorturl.at/Ayngf',
    liveLink: '#',
    githubLink: 'https://github.com/yourusername/eye-control-app'
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio to showcase projects and skills.',
    tech: 'React, CSS, Firebase Hosting',
    image: 'https://shorturl.at/OAcTr',
    liveLink: 'https://abdulaziz-tahir.netlify.app',
    githubLink: 'https://github.com/yourusername/portfolio'
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
