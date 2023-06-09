import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
// import './header.css'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href='https://www.linkedin.com/in/tanvir-sowmik' target='_blank'><BsLinkedin></BsLinkedin></a>
        <a href='https://github.com/sowmik265' target='_blank'><FaGithub></FaGithub></a>
        <a href='https://dribbble.com' target='_blank'><FiDribbble></FiDribbble></a>
    </div>
  )
}

export default HeaderSocials