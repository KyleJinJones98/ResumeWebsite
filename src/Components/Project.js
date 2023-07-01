import React from 'react'
import { Link } from 'react-router-dom'
import './Project.css'

function Project(props) {
  return (
    <div className='project'>
    <section className='title-section'>
        <h1 className='project-title'>{props.title}</h1>
        <div className='project-hero'>
            <img className='project-main-image'
                src={props.src} alt = 'Project Demo' />
            <div className='project-summary'>
                <h2 className='project-dates-title'>Project Duration:</h2>
                <h3 className='project-dates'>{props.date}</h3>
                <h2 className='project-tools-title'>Developer Tools:</h2>
                <h3 className='project-tools'>{props.tools}</h3>
                <h2 className='project-employer-title'>Employer:</h2>
                <h3 className='project-employer'>{props.employer}</h3>
                <Link  className = 'project-link' to = {props.link} target="_blank" rel="noopener noreferrer" >View Project</Link>
            </div>
        </div>
    </section>
    <div className='project-container'>
        <div className='project-body-container'>
            <p className='project-description'>{props.details}</p>
        </div>
    </div>
    </div>
  )
}

export default Project