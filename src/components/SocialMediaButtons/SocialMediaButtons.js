import React from 'react'

import './SocialMediaButtons.scss'

export default function SocialMediaButton(props) {

  return (
    <div className="SocialMediaButtons">
      <ul className="SocialMediaButtons__list">
        <li key="git" className="SocialMediaButtons__item">
          <a href="#" 
             className="SocialMediaButtons__item--link"
             id="github"
          >
            <i class="SocialMediaButtons__item--icon fab fa-github"></i>
          </a>
        </li>
        <li key="linkedin" className="SocialMediaButtons__item">
          <a href="#" 
             className="SocialMediaButtons__item--link"
             id="linkedin"
          >
            <i class="SocialMediaButtons__item--icon fab fa-linkedin-in"></i>
          </a>
        </li>
        <li key="email" className="SocialMediaButtons__item">
          <a href="#" 
             className="SocialMediaButtons__item--link"
             id="email"
          >
            <i class="SocialMediaButtons__item--icon far fa-envelope"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}