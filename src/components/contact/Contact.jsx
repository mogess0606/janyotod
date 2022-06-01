import React from 'react'

import './contact.css'

import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2> Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option_icon'/>
                        <h4> Email </h4>
                        <h5> MogessMekonnen13@gmail.com</h5>
                        <a href='mailto:MogessMekonnen13@gmail.com' target="_blank" > Send a message</a>
                    </article>

                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option_icon'/>
                        <h4> Messenger </h4>
                        <h5> Mogess Mekonnen</h5>
                        <a href='https://m.me/MogessMekonnen' target="_blank" >Send a message</a>
                    </article>



                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option_icon'/>
                        <h4> WhatsApp </h4>
                        <h5> +251 918 621 296</h5>
                        <a href='https://api.whatsapp.com/send?phone+251918621296' target="_blank" > Send a message</a>
                    </article>
                </div>
                <form action=''>
                    <input type="text" name="name" placeholder="Enter Full Name"/> 
                    <input type="email" name="email" placeholder="Enter Email"/>
                    <textarea rows="7"  name='message' placeholder='Enter your message' ></textarea> 

                    <button type='submit' className='btn btn-primary' > Send Message</button>

                </form>
            </div>
        </section>
    )
}

export default Contact