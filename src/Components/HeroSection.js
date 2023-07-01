import React, { useEffect, useState } from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'

function HeroSection() {

    const [description, setDescription] = useState(false);

    const showDescription = () =>{
        if (window.innerWidth<=1080){
            setDescription(false);}
        else { setDescription(true);}};

    useEffect(() =>{showDescription();},[]);

    window.addEventListener('resize', showDescription);

  return (
    <div className = 'hero-div'>
        <div className='profile-container'>
            <img className='profile-img' src = '/images/profile-img.jpg' alt = 'profile'/>
            <div className='profile-text'>
                <h1>Kyle Jin Jones</h1>
                <p>Software Developer, Web Developer, and Game Developer</p>
                {description &&<p className='profile-description'>Hello everyone, and welcome to my portfolio! 
                    My name is Kyle, I attained my bachelor's degree at University of California, Irvine and I am currently pursuing a Masters in Computer Science student at San Diego State University.
                    I have a multitude of experience designing and programming games, creating websites, and working with artificial intelligence. 
                    Feel free to reach out to me through phone, e-mail, or on LinkedIn. 
                    I look forward to connecting with you!
                    </p>}
            </div>
        </div>
        <div className='hero-buttons'>
            <Button className = 'hero-project-button' buttonStyle='btn--outline' buttonSize='btn--large' path = '/about'>About</Button>
            <Button className = 'hero-project-button' buttonStyle='btn--outline' buttonSize='btn--large' path = '/projects'>Projects</Button>
            <Button className = 'hero-project-button' buttonStyle='btn--outline' buttonSize='btn--large' path = '/contact'>Contact Me</Button>
        </div>
    </div>

  )
}

export default HeroSection