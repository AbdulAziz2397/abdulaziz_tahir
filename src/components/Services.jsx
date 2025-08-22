import React from 'react'
import '../styles/Services.css'

const Services = () => {
    return (
        <section className="services-sec" id='servicesSec'>

            <div className="service-container">
                <div className="service-text">
                    <h3>My <span>Service</span></h3>
                    <p>
                        I specialize in <strong>Web Development</strong>, <strong>App Development</strong>, <strong>UI/UX Design</strong>, and creating secure <strong>Backend APIs</strong>. With expertise in full <strong>MERN stack development</strong>, I deliver responsive, scalable, and user-friendly digital solutions tailored to professional needs.
                    </p>
                </div>
                <div className="service-cards">
                    <div className="card">
                        <i className="fas fa-code service-icon"></i>
                        <h3>Web Development</h3>
                        <p> Building <strong>responsive</strong> and <strong>scalable</strong> websites with clean code, modern frameworks, and professional design.</p>
                    </div>
                    <div className="card">
                        <i className="fas fa-mobile-alt service-icon"></i>
                        <h3>App Development</h3>
                        <p>
                            Creating <strong>cross-platform</strong> apps with smooth UI and powerful performance tailored to your business needs.
                        </p>
                    </div>
                    <div className="card">
                        <i className="fas fa-paint-brush service-icon"></i>
                        <h3>UI/UX Design</h3>
                        <p>
                            Delivering <strong>creative</strong> and <strong>user-focused</strong> designs to ensure seamless experiences for every platform.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services