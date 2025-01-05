import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'
import LOGO from '../../assets/sd601.png'


const Footer = () => {
  return (
    <footer>
      <a href="#"><img src={LOGO} alt="LOGO" className="footer__logo" /></a>
      {/* <a href="#" className="footer__logo">sun</a> */}
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#achievement">Achievements</a></li>
        <li><a href="#recent_work">Recent Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/sunny__dias/" target="_blank"><GrInstagram /></a>
        <a href="https://github.com/sunnydias60" target="_blank"><BsGithub /></a>
        <a href="https://www.linkedin.com/in/sunny-dias-94554b160" target="_blank"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>Inspired by Egator | Made with &hearts; in India | &copy; 2022 Sunydias60 | All Rights Reserved</small>
      </div>
      <div className="footer__copyright-mobile">
        <small>Inspired by Egator | Made with &hearts; in India</small>
        <br />
        <small>&copy; 2022 Sunnydias60 | All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer