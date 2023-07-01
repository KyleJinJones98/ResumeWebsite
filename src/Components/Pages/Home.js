import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Card from '../Card';

function Home(){
    return (
        <div className='home-page'>
        <HeroSection/>
        <Card/>
        </div>
    );
}

export default Home;