import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <section className="footer-sec">
            <div className="footer-text">
                <h3>About <span>Me</span></h3>
                <p> Passionate <strong>Full-Stack Developer</strong> crafting clean code and creative solutions for web and mobile applications.
                </p>
            </div>
            <div className="footer-social">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-pinterest"></i>
            </div>
            <p>
                &copy; {new Date().getFullYear()} Abdulaziz Tahir. All Rights Reserved.
            </p>
        </section>

    )
}

export default Footer