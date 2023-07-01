import React from 'react'
import '../../App.css'
import Project from '../Project'

function RPTCProject() {
  const projectDetails = "The goal of this project was to create a prototype website for Rancho Penasquitos Tennis Center (RPTC). I worked on this project entirely on my own as my first task at JTT Consulting. This was my first foray into HTML, CSS, and Wordpress, which made progress slow at first. However, thanks to the large amount of tools that Wordpress allows for, HTML and CSS were mainly a backup option. Their main use was to circumvent the paid controls of the wordpress theme I utilized and access the controls hidden behind a paywall in order for the theme to be fully customizable. I received periodic input on what the site should contain and aesthetic preferences for the site’s design, as well as what features were necessary for the prototype to be accepted. The version demonstrated here was a prototype that met the client’s standards, but disagreements on the cost of website construction and maintenance led to the project not continuing."
  return (
    <div className='rptcproject-page'>
        <Project title = 'RPTC Prototype Website' src = {'images/rptc-main.png'} date='August 2021 - December 2021' 
        tools='Wordpress, HTML, CSS' employer='JTT Consulting' link='https://jttennis.com/rptctennis/' details= {projectDetails}/>
    </div>
  )
}

export default RPTCProject