import React, { useState } from 'react'

import JumboTron from '../JumboTron/JumboTron';
import Nav from '../Nav/Nav';
import Projects from '../Projects/Projects'

import './Main.scss'

export default function Main(props) {
  const [showAbout, setShowAbout] = useState(false)
  const [showContact, setShowContact] = useState(false)
  const [showLanding, setShowLanding] = useState(true)
  const [showProjects, setShowProjects] = useState(false)

  return (
    <div className="Main">
      <Nav
        showAbout={setShowAbout}
        showContact={setShowContact}
        showProjects={setShowProjects}
        showLanding={setShowLanding}  
      />
      <JumboTron />
      {showProjects && <Projects />}
      {!showLanding && <div className="Main__end"></div>}
    </div>
  )
}