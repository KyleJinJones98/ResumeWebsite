import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import './Contact.css'
import './Header.css'
function Contact() {
  return (
    <div className='contact-page'>
        <section className='title-section'>
            <h1 className='page-title'>Contact Me</h1>
        </section>
        <div className='contact-page-content'>
        <div className='contact-list-wrapper-page'>
             <h1 className='contact-page-title'>
                I can be reached through any of the methods listed below. I look forward to hearing from you!
            </h1>

            <div className='contact-page-list'>
                <div className='contact-item'>
                    <FontAwesomeIcon className='contact-icon' icon={faPhone} style={{color: "#242424",}}  />
                    <p className='phone'>
                    (858) - 205 - 7149
                    </p>
                </div>
                <div className='contact-item'>
                <   FontAwesomeIcon className='contact-icon' icon={faEnvelope} style={{color: "#242424",}}  />
                    <p className='email'>
                        kylejinjones@gmail.com
                    </p>
                </div>
                <div className='contact-item'>
                    <FontAwesomeIcon className='contact-icon' icon={faLinkedin} style={{color: "#242424",}}  />
                    <Link className='linkedin-link' to = 'https://www.linkedin.com/in/kyle-jones-2b0761161/' target="_blank" rel="noopener noreferrer">LinkedIn</Link>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contact