import React, { useState } from 'react'

import About from '../About/About'
import Arrow from '../Arrow/Arrow'
import Contact from '../Contact/Contact';
import JumboTron from '../JumboTron/JumboTron';
import Nav from '../Nav/Nav';
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'

import './Main.scss'

export default function Main(props) {
  const [showAbout, setShowAbout] = useState(false)
  const [showContact, setShowContact] = useState(false)
  const [showLanding, setShowLanding] = useState(false)
  const [showProjects, setShowProjects] = useState(false)
  const [showSkills, setShowSkills] = useState(false)

  const [card1Hover, card1HoverHandler] = useState(false)
  const [card2Hover, card2HoverHandler] = useState(false)
  const [card3Hover, card3HoverHandler] = useState(false)
  const [card4Hover, card4HoverHandler] = useState(false)
  const [card5Hover, card5HoverHandler] = useState(false)
  const [card6Hover, card6HoverHandler] = useState(false)

  return (
    <div className={
        `
          Main 
          ${card1Hover && 'one'}
          ${card2Hover && 'two'}
          ${card3Hover && 'three'}
          ${card4Hover && 'four'}
          ${card5Hover && 'five'}
          ${card6Hover && 'six'}
        `
      }>

      <Nav
        setShowAbout={setShowAbout}
        setShowContact={setShowContact}
        setShowProjects={setShowProjects}
        setShowLanding={setShowLanding}  
        setShowSkills={setShowSkills}
        showAbout={showAbout}
        showContact={showContact}
        showLanding={showLanding}
        showProjects={showProjects}
        showSkills={showSkills}
      />

      <JumboTron />

      {(showProjects || showAbout || showSkills || showContact) && (
        <div className="Main__arrow">
          <Arrow 
            showAbout={showAbout}
            showContact={showContact}
            showSkills={showSkills}
            showProjects={showProjects}
          />
        </div>
      )}
      
      {showContact && <Contact />}
      
      {showProjects && (
        <Projects 
          card1HoverHandler={card1HoverHandler}
          card2HoverHandler={card2HoverHandler}
          card3HoverHandler={card3HoverHandler}
          card4HoverHandler={card4HoverHandler}
          card5HoverHandler={card5HoverHandler}
          card6HoverHandler={card6HoverHandler}
          card1Hover={card1Hover}
          card2Hover={card2Hover}
          card3Hover={card3Hover}
          card4Hover={card4Hover}
          card5Hover={card5Hover}
          card6Hover={card6Hover}
        />
      )}

      {showAbout && (
        <About />
      )}

      {showSkills && (
        <Skills />
      )}

      {showLanding && <div className="Main__end"></div>}
    </div>
  )
}