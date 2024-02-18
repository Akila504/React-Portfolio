
import "./navbarStyling.css"
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa"
import { FaTimes } from 'react-icons/fa'
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";


import React, { useState } from "react"




const navbar = () => {

  const [display, setDisplay] = useState(false);
  const handleSetDisplayclick = () => setDisplay(!display)

  const [colorMode, setcolorMode] = useState(false);
  const handlesetcolorMode = () => setcolorMode(!colorMode)



  return (
    <nav className="navbar">
      <Link to={"/"}>
        <div className='navbar-logo'>
          <img src='./Assets/logo2.jpg' />
        </div> </Link>
      <ul className={display ? "nav-menu" : "nav-menu unactive"}>
        <Link to={"/About"}><li>ABOUT</li></Link>
        <Link to={"/Project"}><li className="test">PROJECT</li></Link>
        <Link style={{ color: "white" }}><li >GALLERY</li></Link>
        <Link to={"/Contact"} style={{ color: "white" }}><li>CONTACT</li></Link>
      </ul>
      <div className="colorModeicon" onClick={handlesetcolorMode} > {colorMode ? (<FaRegMoon size={40} style={{ justifyContent: "center" }} />) : (<FaRegSun size={40} />)}</div>
      <div className='hamburger' style={{ color: "white" }} onClick={handleSetDisplayclick}>
        {display ? (<FaBars size={50} />) : (<FaTimes size={50} />)}
      </div>

    </nav>
  )
}

export default navbar