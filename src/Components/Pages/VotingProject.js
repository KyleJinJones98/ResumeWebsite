import React from 'react'
import Project from '../Project';

function VotingProject() {
    const projectDetails= "This study focused on analyzing survey data from group 538 and seeing if the survey answers could be used to predict a person's voting habits of voting rarely or never, sometimes, or almost always. The original study by group 538 found trends along party membership, income and education wherein participants that did belong to a political party, had lower income, or less education were less likely to vote. My study focused on the creation of a model using artificial intelligence to predict a person’s voting trends based on their answers to the survey since there is correlation. I utilized a decision tree forest, and a neural network to analyze the data, but  the resulting prediction models were underwhelming, with a prediction accuracy of 63% at best, and only 55% at worst. The range of accuracies is likely due to the data still being somewhat small, approximately 6,000 according to 538, thus depending on the data split when constructing the training and test data, the accuracy of the model differs slightly based on what data samples are available in the training set. With a much larger sample size of survey responses accuracy could be made more consistent and likely even improved.";
  return (
    <div className='voterproject-page'>
        <Project title = 'Non Voter Study' src = {'images/Voter-4.png'} date='November 2021 - December 2021' 
        tools='Jupyter Notebook, Python, Spark' employer='Class Project' link='https://drive.google.com/file/d/143tqDX_41COHM7bsToFdxwAV5f-oAlzg/view?usp=sharing' details= {projectDetails}/>
    </div>
  )
}

export default VotingProject