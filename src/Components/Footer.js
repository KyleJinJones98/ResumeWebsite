import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return (
    <div className='footer-container'>
        <div className='contact-list-wrapper'>
            
            <div className='contact-list'>
                <FontAwesomeIcon className='contact-icon' icon={faPhone} style={{color: "#ffffff",}}  />
                <p className='phone'>
                    (858)-205-7149
                </p>
                <FontAwesomeIcon className='contact-icon' icon={faEnvelope} style={{color: "#ffffff",}}  />
                <p className='email'>
                    kylejinjones@gmail.com
                </p>
                
                <FontAwesomeIcon className='contact-icon' icon={faLinkedin} style={{color: "#ffffff",}}  />
                <Link to = 'https://www.linkedin.com/in/kyle-jones-2b0761161/' target="_blank" rel="noopener noreferrer">LinkedIn</Link>
            </div>
        </div>

        <p className='footer-endnote'>
                created by Kyle Jin Jones - 2023
        </p>
    </div>
  )
}

export default Footer