import React from 'react'
import './HomeStyling.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";



const Home = () => {
  return (
    <>
      <div className='contact-details'>
        <div style={{ paddingBottom: 40 }}> <FaGithub size={50} /> </div>
        <div style={{ paddingBottom: 40 }}>  <FaLinkedin size={50} /> </div>
        <div > <MdAttachEmail size={50} />  </div>
      </div>
      <div className='subBox'>
        <div className='heroImg'></div>
        <div className='btn cv'>download CV</div>
      </div >
      <div className='box'>
        <div className='landingPage'>
          <h1 style={{ fontSize: "6em" }} >Hi</h1>
          <h2 style={{ fontSize: "8em" }} >I'm AKILA DAHANAYAKE</h2>
          <p style={{ fontSize: "3em" }}>I'm a front end developer,
            <br />who can create beautiful and interactive websites, with an eye for design</p>
        </div >
      </div>
    </>
  )
}

export default Home