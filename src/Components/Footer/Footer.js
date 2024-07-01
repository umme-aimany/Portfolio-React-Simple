

import React from 'react'
import './Footer.css'
/*import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";*/


const Footer = () => {
  return (
    <footer id="footer" className='footer'>
      <div className='footerContainer'>
        <h3>Umme Aiman</h3>
        <h4>Web developer and designer</h4>
        <p>Skilled web and frontend developer specializing in elegant, <br />
           user-friendly designs and efficient code.</p>
      </div>

      <div className='footerContainer'>
        <h3>Navigation links</h3>
        <p>Home</p>
        <p>About</p>
        <p>Portfolio</p>
        <p>Contact</p>
      </div>

      <div className='footerContainer'>
        <h3>Contact me</h3>
        <p>+923196558989</p>
        <p>khanummeaiman76@gmail.com</p>
        <div className='footerIcons'>
          {/*<FaFacebookSquare />
          <FaLinkedin />
          <FaSquareInstagram />
          <FaSquareGithub />*/}
        </div>
        
      </div>

      <div className='footerContainer'>
        <h3>Services</h3>
    
          <p>Web Development</p>
          <p>Frontend developer</p>
          <p>SEO Optimization</p>
        </div>

        
        

      <hr />

      <div className='footerBottom'>
        Developed by Umme Aiman
      </div>
    </footer>
  )
}

export default Footer