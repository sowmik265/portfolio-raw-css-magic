import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>TANVIR AHAMED</a>
      <ul className="permalinks">
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href='https://www.facebook.com/sowmik.ahamed'><FaFacebookF></FaFacebookF></a>
        <a href='https://www.instagram.com/sowmik.ahamed/'><FiInstagram></FiInstagram></a>
        <a href='https://www.linkedin.com/in/tanvir-sowmik'><BsLinkedin></BsLinkedin></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Tanvir Ahamed. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer