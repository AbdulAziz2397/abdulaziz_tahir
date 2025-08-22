import React from 'react'
import AboutImage from '../assets/about-images/about-me.jpg'
import '../styles/About.css'

export const About = () => {
  return (
    <section id='aboutSection'>
              <div className="about-container">
                <div className="about-media">
                  <img src={AboutImage} alt="" />
                </div>
                <div className="about-text">
                  <h3>About <span>Me</span></h3>
                  <p>
                    I am <strong>Abdulaziz Tahir</strong>, a passionate <strong>Full Stack Developer</strong> dedicated to creating modern, scalable, and user-friendly digital solutions. With expertise in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>TypeScript</strong>, <strong>Firebase</strong>, <strong>Bootstrap</strong>, and <strong>Tailwind CSS</strong>, I craft seamless experiences across web and app development. My focus is on delivering high-quality, performance-driven projects that combine technical precision with creative problem solving.  
                    <br />
                    <br />
                    <strong>Driven to build. Inspired to innovate.</strong>
                  </p>
                  <button className="contact-btn"><a href="#contactSec">Contact Us</a></button>
                </div>
              </div>
    </section>
  )
}
