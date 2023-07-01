import React from 'react'
import CardItem from './CardItem'
import './Card.css'
import './Pages/Header.css'
function Card () {
  return (
    <div className='cards'>
        <div className='title-section-wrapper'>
        <section className='title-section'>
            <h1 className='page-title'>Projects</h1>
        </section>
        </div>
        <div className='cards__container'>
            <ul className='cards__items'>
            <CardItem src = {'images/pet-main.png'} text='Player&#39;s Edge Tennis Website Transfer' 
            path = '/PlayersEdgeTennis' />
            <CardItem src = {'images/rptc-main.png'} text='RPTC Prototype Website' 
            path = '/RPTC' />
            <CardItem src = {'images/ud-2.png'} text='UpsideDown' 
            path = '/UpsideDown' />
            <CardItem src = {'images/wow-4.png'} text='Waifu on Wheels' 
            path = '/WaifuonWheels' />
            </ul>
            <ul className='cards__items'>
            <CardItem src = {'images/Voter-1.png'} text='Non Voter Study' 
            path = '/NonVoterStudy' />
            <CardItem src = {'images/CwC-1.png'} text='Cooking with Cain' 
            path = '/CookingwithCain' />
            </ul>
        </div>
    </div>
  )
}

export default Card
