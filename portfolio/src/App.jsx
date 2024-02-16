
import React from 'react'
import Home from "./routes/Home"
import About from "./routes/About"
import Project from './routes/Project'
import Contact from './routes/Contact'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<About />} />
          <Route path="/" element={<Project />} />
          <Route path="/" element={<Contact />} />

        </Routes>
      </div>
    </>
  )
}

export default App

