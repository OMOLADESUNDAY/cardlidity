import React from 'react'
import logo from "../images/cardlidity-removebg-preview.png"
import "./navbar.css"
import { Link} from 'react-scroll';
import {TiThMenu} from "react-icons/ti"
const Navbar = () => {
  return (
    <nav className='navbarContainer'>
      <div className='logoContainer'><img src={logo} alt="" className='logo' /></div>
      <ul className='listContainer'>
        <li className='listItem'><Link className='listlink' to="home" smooth={true} duration={500}>Home</Link></li>
        <li className='listItem'><Link className='listlink' to="service" smooth={true} duration={500}>Service</Link></li>
        <li className='listItem'><Link className='listlink' to="contact" smooth={true} duration={500}>Contact Us</Link></li>
        <li className='listItem verifybtn'><Link to="verification" smooth={true} duration={500}>Verify Now</Link></li>
      </ul>
      <div className='menu'><TiThMenu className='menu'/></div>
    </nav>
  )
}

export default Navbar