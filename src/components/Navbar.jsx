import React, { useState } from 'react';
import '../styles/Navbar.css'

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = () => {
    setIsToggled(!isToggled); // toggle state
  };

  return (
    <nav>
      <div className="nav-box">
        <h1>
          Abdulaziz<span className="secondPartOfLogo">Tahir.</span>
        </h1>

        {/* Desktop menu */}
        <ul className={isToggled ? "nav-links active" : "nav-links"}>
          <li><a href={'#heroSection'} className='link'>HOME</a></li>
          <li><a href={'#aboutSection'} className='link'>ABOUT</a></li>
          <li><a href={'#servicesSec'} className='link'>SERVICES</a></li>
          {/* <li><a href={'#portfolio'} className='link'>PORTFOLIO</a></li> */}
          <li><a href={'#skillsSec'} className='link'>SKILLS</a></li>
          <li><a href={'#contactSec'} className='link'>CONTACT</a></li>
        </ul>

        {/* Hamburger icon */}
        <i
          className="fa-solid fa-bars"
          onClick={toggleMenu}
        ></i>
      </div>
    </nav>
  )
}

export default Navbar
