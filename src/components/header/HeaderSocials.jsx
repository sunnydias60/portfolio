import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/sunny-dias-94554b160" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/sunnydias60" target="_blank"><BsGithub /></a>
      <a href="https://www.instagram.com/sunny__dias/" target="_blank"><GrInstagram /></a>
    </div>
  )
}

export default HeaderSocials