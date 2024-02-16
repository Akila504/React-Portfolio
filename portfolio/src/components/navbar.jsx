import React from 'react'
import "./navbarStyling.css"



const navbar = () => {
  return (
    <nav className="navbar">
      <div className='navbar-logo'>
        <img src='./Assets/logo.jpg' />
      </div>
      <ul className='nav-menu'>
        <li>ABOUT</li>
        <li>GALLERY</li>
        <li>PROJECT</li>
        <li>CONTACT</li>
      </ul>

    </nav>
  )
}

export default navbar