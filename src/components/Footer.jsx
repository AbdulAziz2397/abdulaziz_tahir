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
                <a href="https://www.facebook.com/abdulaziz.tahir.68216" target="blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="https://x.com/abdulaziz_23467" target="blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/abdulaziz-tahir" target="blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/abdulaziztahir2397/" target="blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCqDM_6yDuYIOvewLAwwkSTw" target="blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="https://www.pinterest.com/abdulaziztahir2397/" target="blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-pinterest"></i>
                </a>
            </div>
            <p>
                &copy; {new Date().getFullYear()} Abdulaziz Tahir. All Rights Reserved.
            </p>
        </section>

    )
}

export default Footer