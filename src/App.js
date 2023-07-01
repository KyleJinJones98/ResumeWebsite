import './App.css';
import React from 'react';
import Navbar from '../src/Components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home.js'
import Footer from './Components/Footer';
import RPTCProject from './Components/Pages/RPTCProject';
import ProjectPage from './Components/Pages/ProjectPage';
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';
import PETProject from './Components/Pages/PETProject';
import WOWProject from './Components/Pages/WOWProject';
import UpsideDownProject from './Components/Pages/UpsideDownProject';
import VotingProject from './Components/Pages/VotingProject';
import CwCProject from './Components/Pages/CwCProject';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes> 
          <Route path = '/' exact Component={Home}/>
          <Route path = '/projects' exact Component={ProjectPage}/>
          <Route path = '/about' exact Component={About}/>
          <Route path = '/contact' exact Component={Contact}/>
          <Route path = '/RPTC' exact Component={RPTCProject}/>
          <Route path = '/PlayersEdgeTennis' exact Component={PETProject}/>
          <Route path = '/WaifuonWheels' exact Component={WOWProject}/>
          <Route path = '/UpsideDown' exact Component={UpsideDownProject}/>
          <Route path = '/NonVoterStudy' exact Component={VotingProject}/>
          <Route path = '/CookingwithCain' exact Component={CwCProject}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
