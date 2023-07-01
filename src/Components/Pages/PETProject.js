import React from 'react'
import Project from '../Project'

function PETProject() {
  const projectDetails = "This was my second project at JTT consulting and it aimed to transfer an old website, Players Edge Tennis, that was hosted on Weebly with a different hosting service to Wordpress. This project was made easier by downloading the html of the original website and converting it to Wordpress using their inbuilt tool. However, this consistently resulted in all images breaking, and major formatting issues. Due to these issues approximately 50% of the site was redone so it would match the formatting and styling of the original. Once the original site was transferred, I made multiple upgrades to the website, including the contact form, updating the navigation menu, integrating the site with TennisThor for court scheduling, and  improving the legibility of the site with proper contrast levels for text.";

  return (
    <div className='petproject-page'>
    <Project title = 'Player&#39;s Edge Tennis Site Transfer' src = {'images/pet-main.png'} date='July 2022 - September 2022' 
    tools='Wordpress, HTML, CSS, Weebly' employer='JTT Consulting' link='https://www.playersedgetennis.com/' details= {projectDetails}/>
    </div>
  )
}

export default PETProject