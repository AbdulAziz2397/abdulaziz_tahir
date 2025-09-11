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
                        <h3>Frontend (React)</h3>
                        <p>
                            Building dynamic UIs with <strong>React.js</strong>, <strong>HTML5</strong>, 
                            <strong> CSS3</strong>, and <strong>JavaScript (ES6+)</strong>.
                        </p>
                    </div>

                    {/* Backend */}
                    <div className="card">
                        <i className="fab fa-node skill-icon" ></i>
                        <h3>Backend (Node.js & Express)</h3>
                        <p>
                            Developing APIs and server-side logic with <strong>Node.js</strong> and 
                            <strong> Express.js</strong> for scalable applications.
                        </p>
                    </div>

                    {/* Database */}
                    <div className="card">
                        <i className="fas fa-database skill-icon"></i>
                        <h3>Database (MongoDB)</h3>
                        <p>
                            Managing data with <strong>MongoDB</strong>, ensuring high performance and security.
                        </p>
                    </div>

                    {/* Version Control */}
                    <div className="card">
                        <i className="fab fa-git-alt skill-icon"></i>
                        <h3>Version Control (Git & GitHub)</h3>
                        <p>
                            Using <strong>Git</strong> and <strong>GitHub</strong> for collaboration, 
                            code management, and project tracking.
                        </p>
                    </div>

                    {/* Deployment */}
                    <div className="card">
                        <i className="fas fa-cloud skill-icon"></i>
                        <h3>Deployment</h3>
                        <p>
                            Hosting and deploying apps with <strong>Heroku</strong>, 
                            <strong> Netlify</strong>, and <strong>Vercel</strong>.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Skills
