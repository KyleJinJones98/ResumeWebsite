import React from 'react'
import Project from '../Project'

function WOWProject() {
  return (
    <div className='wowproject-page'>
    <Project title = 'Waifu on Wheels' src = {'images/wow-4.png'} date='September 2019 - February 2020' 
    tools='Unity, C#' employer='University of California, Irvine' link='https://malbayati.itch.io/waifu-on-wheels' details= 'In Waifu on Wheels, cars have become sentient in a world humans have left behind.... in a mess. And you are fed up with it. As you journey to collect parts in order to leave this stinking piece of rock, you meet a rag tag crew that hopes to save it. While you go around talking, interacting, and mingling with these cars, they hope to change your mind, and maybe your heart.On this project I was most heavily involved with programming. I created nearly every script in the game, including but not limited to the save system which utilizes JSON, a system used to track object states, the games overall data structure for preserving player progress, and the dialogue system. Additionally, I designed and implemented the layout of the levels, and collaborated with an artist in populating them with objects to flesh out the world. Finally, as team leader, I coordinated with my team in planning out the scope of the game, and what we would need to achieve in order stay on track for our end goals for the game which we both met, and achieved some of our stretch goals, such as having voice acting.'/>
</div>
  )
}

export default WOWProject