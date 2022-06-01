import React from 'react'

import './experience.css'

import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience' >

            <h5>Skills I have</h5>
            <h2> Experience</h2>

            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience__content'>
                        <article className='experience__detail'>
                            <BsPatchCheckFill className='experience__detail_icons'/>
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__detail'>
                            <BsPatchCheckFill className='experience__detail_icons' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Intermediated</small>
                            </div>
                        </article>

                        <article className='experience__detail'>
                            <BsPatchCheckFill className='experience__detail_icons'/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>


                        <article className='experience__detail'>
                            <BsPatchCheckFill className='experience__detail_icons'/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                       
                    </div>

                </div>
                {/* END OF FRONT END */}
                <div className='experience__backend'>
                <h3>Backend Development</h3>
                    <div className='experience__content'>
                        <article className='experience__detail'>
                            <BsPatchCheckFill className='experience__detail_icons'/>
                            <div>
                                <h4>PHP</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__detail'>
                            <BsPatchCheckFill className='experience__detail_icons'/>
                            <div>
                                <h4>Node Js</h4>
                                <small className='text-light'> Intermediated</small>
                            </div>
                        </article>
                        <article className='experience__detail'>
                            <BsPatchCheckFill className='experience__detail_icons'/>
                            <div>
                                <h4>Mysql</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__detail'>
                            <BsPatchCheckFill className='experience__detail_icons'/>
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Intermediated</small>
                            </div>
                        </article>

                       
                    </div>

                </div>
            </div>
             
        </section>
    )
}

export default Experience