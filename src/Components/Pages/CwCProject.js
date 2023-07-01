import React from 'react'
import Project from '../Project'

function CwCProject() {
    const projectDetails="This project stands out as one of my longer group projects which gave me significant experience in dealing with problems not present in my other projects. In particular, in the middle of the project there was a significant changeup in the development team, wherein only 2 of the original 5 members stayed for the second half of development. As the team lead I took responsibility in training our 3 new team members. Thanks to the time needed to train our new members, which took approximately 2 weeks I experienced Brook’s Law, wherein the project began running behind schedule. My teammates and I were able to get the project back on schedule and meet our end goals, but it required more time and effort than what I had originally estimated. Additionally, I learned a lot about working with my teammates code during this project since 2 of the teammates that changed out were programmers. I took over any necessary expansion or refactoring of the older code. This included reworking how players interacted with the upgrade shop, enemy creation, and attack creation. Enemy and attack creation were made developer friendly so that all enemies could be easily created and modified without any coding necessary, thanks to scriptable objects from which each enemy would read their stats, appearance and name from. Thanks to this system, new enemies and balance updates could be made in seconds.";
  return (
    <div className='cwcproject-page'>
    <Project title = 'Cooking with Cain' src = {'images/CwC-3.png'} date='Spetember 2018 - May 2019' 
    tools='Unity, C#' employer='Video Game Development Club' link='https://backward.itch.io/cooking-with-cain-2' details= {projectDetails}/>
    </div>
  )
}

export default CwCProject