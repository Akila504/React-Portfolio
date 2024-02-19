import React from 'react'
import './HomeStyling.css'

const Home = () => {
  return (
    <>
      <div className='subBox'>
        <div className='heroImg'></div>
      </div>
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