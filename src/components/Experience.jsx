import React from 'react'
import '../styles/Experience.css'

const Experience = () => {
    return (
        <section className="Experiences-sec" id="ExperiencesSec">

            <div className="Experience-container">
                <div className="Experience-text">
                    <h3>My <span>Experiences</span></h3>
                    <p>There are many variations of passages ofLorem Ipsum <br />
                        available, but the majority havesuffered alteration in some
                        form, by injected humour,
                    </p>
                </div>
                <div className="Experience-cards">
                    <div className="Ex-card Ex-card-1">
                        <span className='date-span'>Jan 2021 – Present</span>
                        <h3>Full-Stack Developer</h3>
                        <span>React | Node.js | Firebase | Tailwind CSS</span>
                        <p>Built and deployed scalable web applications with modern frontend frameworks and secure backend APIs. Improved performance by 40% through optimized database queries and implemented real-time features with Firebase.</p>
                    </div>
                    <div className="Ex-card Ex-card-2">
                        <span className='date-span'>Jul 2019 – Dec 2020</span>
                        <h3>Frontend Developer</h3>
                        <span>HTML | CSS | JavaScript | Bootstrap</span>
                        <p>Designed and developed responsive user interfaces for multiple client projects. Ensured cross-browser compatibility and enhanced UI/UX, leading to a 25% increase in customer satisfaction scores.</p>
                    </div>
                    <div className="Ex-card Ex-card-3">
                        <span className='date-span'>Mar 2018 – Jun 2019</span>
                        <h3>Junior Web Developer</h3>
                        <span>PHP | Laravel | MySQL | jQuery</span>
                        <p>Assisted in building eCommerce platforms with payment integration and product management systems. Worked closely with senior developers to maintain code quality and deliver projects on time.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience