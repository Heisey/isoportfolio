import React from 'react';

import './Nav.scss';

export default function Nav(props) {
  const { 
    setShowAbout,
    setShowContact,
    setShowLanding, 
    setShowProjects,
    setShowSkills,
    showAbout,
    showContact,
    showLanding,
    showProjects,
    showSkills
  } = props;

  const handleShowContact = () => {
    setShowLanding(true)
    setShowContact(true)
    setShowProjects(false)
    setShowAbout(false)
    setShowSkills(false)
  }

  const handleShowAbout = () => {
    setShowLanding(true)
    setShowContact(false)
    setShowProjects(false)
    setShowSkills(false)
    setShowAbout(true)
  }

  const handleShowProjects = () => {
    setShowLanding(true)
    setShowContact(false)
    setShowSkills(false)
    setShowAbout(false)
    setShowProjects(true)
  }

  const handleShowLanding = () => {
    setShowLanding(false)
    setShowContact(false)
    setShowProjects(false)
    setShowAbout(false)
    setShowSkills(false)
  }

  const handleShowSkills = () => {
    setShowLanding(true)
    setShowContact(false)
    setShowProjects(false)
    setShowAbout(false)
    setShowSkills(true)
  }

  return (
    <div className="Nav">
      <div className="Nav__container">
        <div className="Nav__buttons">
          
          <div 
            className={
              `
                Nav__button 
                Nav__button--contact 
                ${showContact && 'Nav__button--contactActive'}
              `}
            onClick={handleShowContact}
          >
            <div className="Nav__button--shadow"></div>
            <div className="Nav__button--left"></div>
            <div className="Nav__button--right"></div>
            <div className="Nav__button--top">
              <i class="fas fa-mobile-alt"></i>
            </div>
          </div>

          <div 
            className={
              `
                Nav__button 
                Nav__button--skills
                ${showSkills && 'Nav__button--skillsActive'}
              `}
            onClick={handleShowSkills}  
          >
            <div className="Nav__button--shadow"></div>
            <div className="Nav__button--left"></div>
            <div className="Nav__button--right"></div>
            <div className="Nav__button--top">
              <i class="fas fa-tools"></i>
            </div>
          </div>

          <div 
            className={
              `
                Nav__button 
                Nav__button--about
                ${showAbout && 'Nav__button--aboutActive'}
              `}
            onClick={handleShowAbout}  
          >
            <div className="Nav__button--shadow"></div>
            <div className="Nav__button--left"></div>
            <div className="Nav__button--right"></div>
            <div className="Nav__button--top">
              <i class="fas fa-info"></i>
            </div>
          </div>

          <div 
            className={
              `
                Nav__button 
                Nav__button--projects
                ${showProjects && 'Nav__button--projectsActive'}
              `}
            onClick={handleShowProjects}
          >
            <div className="Nav__button--shadow"></div>
            <div className="Nav__button--left"></div>
            <div className="Nav__button--right"></div>
            <div className="Nav__button--top">
              <i class="fas fa-rocket"></i>
            </div>
          </div>

          <div 
            className={
              `
                Nav__button 
                Nav__button--home
                ${!showLanding && 'Nav__button--homeActive'}
              `}
            onClick={handleShowLanding}
          >
            <div className="Nav__button--shadow"></div>
            <div className="Nav__button--left"></div>
            <div className="Nav__button--right"></div>
            <div className="Nav__button--top">
              <i class="fas fa-home"></i>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}