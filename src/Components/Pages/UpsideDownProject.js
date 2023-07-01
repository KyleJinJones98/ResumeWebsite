import React from 'react'
import Project from '../Project'

function UpsideDownProject() {
  const projectDetails = "UpsideDown is a 2D puzzle platformer I developed in Unity where the player is able to wrap around the screen in order to progress through tests. On this project I focused on code quality since it is an update of the original game. Wherein I developed an event system so that code that was previously closely coupled could be uncoupled. For example, previously, when a player got hit by an enemy, the enemy would inform a utility script to transition to the game over screen. Instead it invokes an event that the utility script subscribes when the program starts. This allows both scripts to not care about the other and in the event that I want something else to happen when the player dies I can simply have it listen to the event as well. Additionally, I implemented a significant amount of polish, adding in animations for the player, enemies, and doors, sound effects when the player is moving, hitting a switch or click user interface, and custom background music. Furthermore, I developed a stylized menuing system and even a small startup animation when the game starts. This was an individual project so I developed most of the art, and music myself using Krita andBeepBox. All of the artwork and sound I referenced can be viewed in game under the sources options."
  return (
    <div className='upsidedownproject-page'>
    <Project title = 'UpsideDown' src = {'images/ud-2.png'} date='November 2022 - December 2022' 
    tools='Unity, C#' employer='Personal Project' link='https://backward.itch.io/upsidedown' details= {projectDetails}/>
    </div>
  )
}

export default UpsideDownProject