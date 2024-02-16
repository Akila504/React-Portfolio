
import "./navbarStyling.css"
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa"
import { FaTimes } from 'react-icons/fa'
import React, { userState } from "react"




const navbar = () => {


  return (
    <nav className="navbar">
      <Link to={"/"}>
        <div className='navbar-logo'>
          <img src='./Assets/logo.jpg' />
        </div> </Link>
      <ul className='nav-menu'>
        <Link to={"/About"}><li>ABOUT</li></Link>
        <Link to={"/Project"}><li>PROJECT</li></Link>
        <li>GALLERY</li>
        <Link to={"/Contact"}><li>CONTACT</li></Link>
      </ul>
      <div className='hamburger'>
        <FaBars size={30} /> <FaTimes size={30} />
      </div>
    </nav>
  )
}

export default navbar