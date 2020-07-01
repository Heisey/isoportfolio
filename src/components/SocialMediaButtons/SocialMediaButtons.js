import React from 'react'

import './SocialMediaButtons.scss'

export default function SocialMediaButton(props) {

  const {
    gitHubHoverHandler,
    linkedinHoverHandler,
    emailHoverHandler
  } = props

  const handleEnterGitHubHover = () => {
    gitHubHoverHandler(true)
  }

  const handleEnterLinkedinHover = () => {
    linkedinHoverHandler(true)
  }

  const handleEnterEmailHover = () => {
    emailHoverHandler(true)
  }

  const handleLeaveGitHubHover = () => {
    gitHubHoverHandler(false)
  }

  const handleLeaveLinkedinHover = () => {
    linkedinHoverHandler(false)
  }

  const handleLeaveEmailHover = () => {
    emailHoverHandler(false)
  }

  return (
    <div className="SocialMediaButtons">
      <ul className="SocialMediaButtons__list">

        <li 
          key="git" 
          className="SocialMediaButtons__item"
          onMouseEnter={handleEnterGitHubHover}
          onMouseLeave={handleLeaveGitHubHover}
        >
          <a href="#" 
             className="SocialMediaButtons__item--link"
             id="github"
          >
            <i class="SocialMediaButtons__item--icon fab fa-github"></i>
          </a>
        </li>

        <li 
          key="linkedin" 
          className="SocialMediaButtons__item"
        >
          <a href="#" 
             className="SocialMediaButtons__item--link"
             id="linkedin"
             onMouseEnter={handleEnterLinkedinHover}
             onMouseLeave={handleLeaveLinkedinHover}
          >
            <i class="SocialMediaButtons__item--icon fab fa-linkedin-in"></i>
          </a>
        </li>
        <li key="email" className="SocialMediaButtons__item">
          <a href="#" 
             className="SocialMediaButtons__item--link"
             id="email"
             onMouseEnter={handleEnterEmailHover}
             onMouseLeave={handleLeaveEmailHover}
          >
            <i class="SocialMediaButtons__item--icon far fa-envelope"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}