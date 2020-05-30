import React from 'react';

import './Nav.scss';

export default function Nav(props) {
  const { 
    showAbout,
    showContact,
    showLanding, 
    showProjects 
  } = props;

  const handleShowContact = () => {
    showLanding(false)
    showContact(true)
    showProjects(false)
    showAbout(false)
  }

  const handleShowAbout = () => {
    showLanding(false)
    showContact(false)
    showProjects(false)
    showAbout(true)
  }

  const handleShowProjects = () => {
    showLanding(false)
    showContact(false)
    showProjects(true)
    showAbout(false)
  }

  const handleShowLanding = () => {
    showLanding(true)
    showContact(false)
    showProjects(false)
    showAbout(false)
  }

  return (
    <div className="Nav">
      <div className="Nav__container">
        <div className="Nav__buttons">
          <div 
            className="Nav__button Nav__button--contact"
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
            className="Nav__button Nav__button--about"
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
            className="Nav__button Nav__button--projects"
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
            className="Nav__button Nav__button--home"
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