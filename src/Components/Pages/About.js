import React from 'react'
import './About.css'
import'./Header.css'
function About() {
  return (
    <div className='about-page'>
        <section className='title-section'>
            <h1 className='page-title'>About Me</h1>
        </section>
        <div className='about-page-content'>
          <div className='about-description-wrapper'>
          <p className='about-description'>
          Hello, my name is Kyle, and I am currently pursuing my Masters degree in Computer Science at San Diego State University. I graduated with a bachelor’s degree in Computer Game Science from University of California Irvine, and I am currently seeking new opportunities to grow and demonstrate my skills. I have always had a passion for programming since I was first introduced to it in high school. No matter what I was working on I turned it into a partial coding project. For example, for my writing class I created a choose your own adventure style game in Java, in calculus I created a quiz program in Java that allowed you to enter in your own problems and retake the quiz later. 
          </p>
          <p className='about-description'>
          Another of my passion’s has always been gaming, which almost feels like a natural complement to programming. Some of my recent favorites include League of Legends, Monster Hunter: World, Grounded, Elden Ring and Fire Emblem: Engage. A combined interest in both inspired me to start creating my own games.
          </p>
          <p className='about-description'>
          I have been developing games with a team and solo for 7 years, with a total of 18 projects. During the team projects, I honed my communication, coordination and leadership skills by serving as a team lead on 8 projects Additionally, this led to me learning to read and adapt collaborator’s code including but not limited to adding new features, reorganizing code, and refactoring code to be more efficient and expandable. For example I wanted to improve on a set of classes that tracked object state. Its main drawback being that for each object type, a different class was required which led to an excess of classes. I refactored this code into one class that could be used on any object through the use of inheritance. This heavily reduced redundant code and made the creation of new objects faster and easier.
          </p>
          <p className='about-description'>
          Without a doubt, my greatest weakness is my sense of aesthetics. To compensate for this, when I develop user interfaces for games, I rely excessively on playtester input, and that of my team to ensure that the color scheme and layout are obvious and legible. As well as initially sticking to basic color combinations and layouts to minimize the need for rework.  
          </p>
          <p className='about-description'>
          Finally another of my defining skills is my adaptability, I can quickly pick up new concepts and programming languages. For example, at my position at JTT consulting I worked on website’s for the first time. I learned to use CSS styling, and HTML together with Wordpress to alter websites’ design to match my employer’s or their client’s requests.
          </p>
          </div>
        </div>
    </div>
  )
}

export default About