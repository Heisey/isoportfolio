import React, { useState } from 'react'

import './Cube.scss'

export default function Cube(props) {

  const {
    showAdobeSkillsHandler,
    showBackSkillsHandler,
    showFrontSkillsHandler
  } = props

  const [frontSkills, frontSkillsHandler] = useState(false)
  const [adobeSkills, adobeSkillsHandler] = useState(false)
  const [backSkills, backSkillsHandler] = useState(false)

  const handleFrontSkills = () => {
    // ?? Adobe Skills
    adobeSkillsHandler(false)
    showAdobeSkillsHandler(false)

    // ?? Back Skills
    backSkillsHandler(false)
    showBackSkillsHandler(false)

    // ?? Front Skills
    frontSkillsHandler(true)
    showFrontSkillsHandler(true)
  }

  const handleBackSkills = () => {
    // ?? Front Skills
    frontSkillsHandler(false)
    showFrontSkillsHandler(false)

    // ?? Adobe Skills
    adobeSkillsHandler(false)
    showAdobeSkillsHandler(false)

    // ?? Back Skills
    backSkillsHandler(true)
    showBackSkillsHandler(true)
  }

  const handleAdobeSkills = () => {
    // ?? Front Skills
    frontSkillsHandler(false)
    showFrontSkillsHandler(false)

    // ?? Back Skills
    backSkillsHandler(false)
    showBackSkillsHandler(false)

    // ?? Adobe Skills
    adobeSkillsHandler(true)
    showAdobeSkillsHandler(true)
  }

  return (
    <div className="Cube">

      {/* ?? Top Face */}
      <span className='Cube__face Cube__face--top'>
        <div className="Cube__topFace">
          <span>Adobe Skills</span>
          <div 
            class={`Cube__btn ${adobeSkills && 'Cube__btn--active'}`}
            onClick={handleAdobeSkills}
          >
            <div class="Cube__btn--innerWrapper">
              <i class="fab fa-adobe"></i>
            </div>
          </div>
        </div>
      </span>

      {/* ?? Left Face */}
      <span className='Cube__face Cube__face--left'>
        <div className="Cube__leftFace">
          <span>FRONT_END SKILLS</span>
          <div 
            class={`Cube__btn ${frontSkills && 'Cube__btn--active'}`}
            onClick={handleFrontSkills}
          >
            <div class="Cube__btn--innerWrapper">
              <i class="fas fa-code"></i>
            </div>
          </div>
        </div>
      </span>
      
      {/* ?? Right FAce */}
      <span className='Cube__face Cube__face--right'>
        <div className="Cube__rightFace">
          <span>BACK_END SKILLS</span>
          <div 
            class={`Cube__btn ${backSkills && 'Cube__btn--active'}`}
            onClick={handleBackSkills}
            id="backSkillsButton"
          >
            <div class="Cube__btn--innerWrapper">
              <i class="fas fa-server"></i>
            </div>
          </div>
        </div>
      </span>
    </div>
  )
}