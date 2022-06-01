import React from 'react'
import './about.css'
import ME from '../../assets/mo.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5> Get to know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image"/>
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5> Experience</h5>
                            <small> 3+ Years Working  </small>
                        </article>


                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5> Users </h5>
                            <small> 10+ World Wide  </small>
                        </article>


                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5> Project </h5>
                            <small> 3+ Completed  </small>
                        </article>
                    </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A quia voluptate nesciunt, et, quod repellendus, nobis veritatis commodi error perspiciatis officia omnis repudiandae est asperiores quas unde corrupti distinctio enim?
                </p>
                <a href='#contact' className='btn btn-primary'>Lets Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About