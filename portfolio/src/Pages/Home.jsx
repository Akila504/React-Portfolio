import React from 'react'
import './HomeStyling.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";



const Home = () => {
  return (
    <section className='main'>
      <div className='contact-details'>
        <div className='icons' style={{ paddingBottom: 40 }}> <FaGithub /> </div>
        <div className='icons' style={{ paddingBottom: 40 }}>  <FaLinkedin /> </div>
        <div className='icons'> <MdAttachEmail />  </div>
      </div>
      <div className='box'>
        <div className='intro'>
          <h1  >Hi</h1>
          <h2  >I'm AKILA DAHANAYAKE</h2>
          <p >I'm a front end developer,
            <br />who can create beautiful and interactive websites, with an eye for design</p>
        </div >
      </div>
      <div className='subBox'>
        <div className='heroImg'></div>
        <div className='btn cv'>download CV</div>
      </div >
    </section>
  )
}

export default Home