import React from 'react'

import './header.css'
import CTA from './CTA'
import ME from "../../assets/mo.jpg"
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        
        <div className='container header__container'>
            <header className='header_nav'>     
                <ul>
                    <a href='#' className='header_logo'> Jana Yotod</a>
                </ul>            
                <ul className='permalinks'>
                    <li> <a href='#'>Home</a></li>
                    <li> <a href='#about'>About</a></li>
                    <li> <a href='#experience'>Experience</a></li>
                    <li> <a href='#contact'>Contacts</a></li>
                    <li> <a href='#service'>Service</a></li>
                    <li> <a href='#portfolio'>Portfolio</a></li>
                    <li> <a href='#testimonials'>Testimonials</a></li>
                    <li> <a href='#testimonials'>Compress Image</a></li>
                    
                </ul>
            </header>
            <br/>
            <h5> Hello I'm </h5>
            <h1> Mogess Mekonnen</h1>
            <h5 className="text-light"> Backend Developer</h5>

            <CTA  />
            <HeaderSocials  />
            <div className="me">
                <img src={ME} alt="" />
            </div>

            <a href='#contact' className='scroll_down'>Scroll Dwon</a>
        </div>
    )
}

export default Header