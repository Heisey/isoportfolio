import React, { useState } from 'react'

import Cube from '../Cube/Cube'
import GraphBody from '../graphs/GraphBody/GraphBody'
import Header from '../Header/Header'

import './Skills.scss'

export default function Skills(props) {

  const [showFrontSkills, showFrontSkillsHandler] = useState(false)
  const [showAdobeSkills, showAdobeSkillsHandler] = useState(false)
  const [showBackSkills, showBackSkillsHandler] = useState(false)
  const [showXDText, showXDTextHandler] = useState(false)
  const [showPhotoshopText, showPhotoshopTextHandler] = useState(false)
  const [showIllustratorText, showIllustratorTextHandler] = useState(false)

  return (
    <div className="Skills">
      <Header title="SKILLS" />
      <div className='Skills__cubes'>
        <Cube 
          showBackSkillsHandler={showBackSkillsHandler}
          showFrontSkillsHandler={showFrontSkillsHandler}
          showAdobeSkillsHandler={showAdobeSkillsHandler}
        />
      </div>
      <div className="Skills__graph">
        <GraphBody 
          showAdobeSkills={showAdobeSkills}
          showBackSkills={showBackSkills}
          showFrontSkills={showFrontSkills}
          showXDTextHandler={showXDTextHandler}
          showPhotoshopTextHandler={showPhotoshopTextHandler}
          showIllustratorTextHandler={showIllustratorTextHandler}
        />
      </div>
      
      <div className={`Skills__text--xd ${showXDText && 'Skills__textActive'}`}>
        <p className="Skills__text--xdText">
          I plan on spending the next few years learning more about web design, 
          sharpening my coding skills, and moving south to a sandy beach close to the 
          ocean where I’m surrounded with fellow non-skaters. In the meantime, I love 
          traveling and learning about new cultures, and plan to learn a new language 
          or two (I’m looking at you, German).
        </p>
      </div>

      <div className={`Skills__text--photoshop ${showPhotoshopText && 'Skills__textActive'}`}>
        <p className="Skills__text--photoshopText">
          I plan on spending the next few years learning more about web design, 
          sharpening my coding skills, and moving south to a sandy beach close to the 
          ocean where I’m surrounded with fellow non-skaters. In the meantime, I love 
          traveling and learning about new cultures, and plan to learn a new language 
          or two (I’m looking at you, German).
        </p>
      </div>

      <div className={`Skills__text--illustrator ${showIllustratorText && 'Skills__textActive'}`}>
        <p className="Skills__text--illustratorText">
          I plan on spending the next few years learning more about web design, 
          sharpening my coding skills, and moving south to a sandy beach close to the 
          ocean where I’m surrounded with fellow non-skaters. In the meantime, I love 
          traveling and learning about new cultures, and plan to learn a new language 
          or two (I’m looking at you, German).
        </p>
      </div>
      {/* <div className="Skills__floor"></div> */}
    </div>
  )
}