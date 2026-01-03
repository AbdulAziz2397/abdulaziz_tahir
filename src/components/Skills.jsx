import React from 'react'
import '../styles/Skills.css'

const Skills = () => {
    return (
        <section className="skills-sec" id='skillsSec'>
            <div className="skill-container">
                <div className="skill-text">
                    <h3>My <span>Skills</span></h3>
                    <p>
                        As a <strong>MERN Stack Developer</strong>, I work with both frontend and backend
                        technologies to create <strong>scalable</strong>, <strong>secure</strong>, and
                        <strong> user-friendly</strong> applications. Here are the core tools and technologies I use:
                    </p>
                </div>

                <div className="skill-cards">

                    {/* Frontend */}
                    <div className="card">
                        <i className="fab fa-react skill-icon"></i>
                        <h3>Frontend Development</h3>
                        <p>
                            Creating responsive and interactive user interfaces using React,
                            HTML5, CSS3, TailwindCSS, and modern JavaScript (ES6+).
                        </p>
                    </div>

                    {/* Backend */}
                    <div className="card">
                        <i className="fab fa-node skill-icon"></i>
                        <h3>Backend Development</h3>
                        <p>
                            Building secure and scalable REST APIs with Node.js and Express.js
                            for robust server-side applications.
                        </p>
                    </div>

                    {/* Database */}
                    <div className="card">
                        <i className="fas fa-database skill-icon"></i>
                        <h3>Database Management</h3>
                        <p>
                            Designing and managing databases using MongoDB and Firebase with
                            a focus on performance and data security.
                        </p>
                    </div>

                    {/* Version Control */}
                    <div className="card">
                        <i className="fab fa-git-alt skill-icon"></i>
                        <h3>Version Control</h3>
                        <p>
                            Managing codebases efficiently using Git and GitHub for collaboration,
                            versioning, and project tracking.
                        </p>
                    </div>

                    {/* Deployment */}
                    <div className="card">
                        <i className="fas fa-cloud skill-icon"></i>
                        <h3>Deployment & Hosting</h3>
                        <p>
                            Deploying and maintaining applications on platforms like Vercel,
                            Netlify, and Heroku.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Skills
