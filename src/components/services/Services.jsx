import React from 'react'

import './services.css'

import {BsFillPatchCheckFill} from 'react-icons/bs'

const Service = () => {
    return (
        <section id='service'>
            <h5> I Offer</h5>
            <h2>Service</h2>
            <div className='container services_container'>
                <article className='service'>
                     {/* BEGINNING OF UI DESIGN */}
                    <div className='service_head'>
                        <h3>UI Design</h3>
                     </div>
                     <ul className='service_list'>
                            <li> 



                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Illustrations</p>
                            </li>
                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Logo Design</p>
                            </li>
                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Icon Design</p>
                            </li>
                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Motion Graphics & Animations</p>
                            </li>
                    </ul>

                        
                        

                   

                </article>
                {/* END OF UI DESIGN */}

                 {/* Beginning OF Web Development */}
                <article className='service'>
                    <div className='service_head'>
                        <h3>Web Development</h3>
                    </div> 
                     <ul className='service_list'>
                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Drupal Web Development</p>
                            </li>
                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Drupal Website Design</p>
                            </li>
                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>HTML5 Web Development</p>
                            </li>
                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Responsive Design</p>
                            </li>
                    </ul>

                        
                        

                   

                </article>
                {/* END OF Web Development */}

                 {/* Beginning OF Content Creation */}
                <article className='service'>
                    <div className='service_head'>
                        <h3>Content Creation</h3>
                    </div>
                        <ul className='service_list'>
                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Wordpress </p>
                            </li>
                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Drupal</p>
                            </li>
                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Joomla</p>
                            </li>
                            <li>
                                <BsFillPatchCheckFill className='service_list_icon'  />
                                <p>Moodle</p>
                            </li>
                            
                        </ul>
                </article>
                {/* END OF Content Creation */}
            </div>

        </section>
    )
}

export default Service