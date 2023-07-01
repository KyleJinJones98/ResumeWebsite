import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Button} from './Button';
import './Navbar.css';
import '../App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes,faBars, faHome } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [button, setButton] = useState(false);

    const showButton = () =>{
        if (window.innerWidth<=960){
            setButton(false);}
        else { setButton(true);}};

    useEffect(() =>{showButton();},[]);

    window.addEventListener('resize', showButton);

  return (
    <nav className='navbar'>
    <div className='navbar-container'>
        <Link to = "/" className = "navbar-logo">
        <FontAwesomeIcon icon={faHome} />
        </Link>

        <div className='menu-icon' onClick = {handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} style={{color: "#ffffff",}}  />
        </div>
        <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                    About
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                    Projects
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                    Contact
                </Link>
            </li>
        </ul>
    </div>
    </nav>    
  )
}

export default Navbar