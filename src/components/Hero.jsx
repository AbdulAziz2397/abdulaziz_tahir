import React from 'react';
import '../styles/Hero.css'
import HeroImg from '../assets/hero-images/Me960.jpg';

export const Hero = () => {
    return (
        <section id="heroSection" className="hero-section">
            <div className="hero-box">

                {/* Left Side: Text Content */}
                <div className="hero-text">
                    <span className="hero-greeting">
                        Hello, Welcome
                    </span>

                    <span className="hero-name">
                        I m Abdulaziz Tahir
                    </span>

                    <p className="hero-description">
                        Full Stack Developer | Professional Developer
                        <br />
                        <br />
                        I build modern websites, apps, and scalable digital solutions with clean code and creative design.
                    </p>

                    <button className="contact-btn" ><a href="#contactSec">Contact Us</a></button>
                </div>

                {/* Right Side: Image + Social Links */}
                <div className="hero-media">
                    <div className="hero-media-container">
                        <img src={HeroImg} alt="Abdulaziz Tahir" className="hero-image" />

                        {/* <div className="hero-social">
                            <span className="social-label">FOLLOW ME ON:</span>
                            <div className="social-icons">
                                <i className="fa-brands fa-facebook" onClick={"https://sora.chatgpt.com/explore"}></i>
                                <i className="fa-brands fa-square-instagram"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-linkedin"></i>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

        </section>
    );
};
