import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer_logo'> Jana Yotod</a>

            <ul className='permalinks'>
                <li> <a href='#'>Home</a></li>
                <li> <a href='#about'>About</a></li>
                <li> <a href='#experience'>Experience</a></li>
                <li> <a href='#contact'>Contacts</a></li>
                <li> <a href='#service'>Service</a></li>
                <li> <a href='#portfolio'>Portfolio</a></li>
                <li> <a href='#testimonials'>Testimonials</a></li>
                
            </ul>
            <div className='footer_socials'>
            <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com" target="_blank"><FaGithub/></a>
            <a href="https://facebook.com" target="_blank"><BsFacebook /></a>
            <a href="https://youtube.com" target="_blank"><BsYoutube /></a>
            <a href="https://telegram.org" target="_blank"><BsTelegram /></a>
                </div>


        </footer>
    )
}

export default Footer