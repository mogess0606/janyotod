import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials' >
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><FaGithub/></a>
        <a href="https://facebook.com" target="_blank"><BsFacebook /></a>
        <a href="https://youtube.com" target="_blank"><BsYoutube /></a>
        <a href="https://telegram.org" target="_blank"><BsTelegram /></a>

    </div>
  )
}

export default HeaderSocials