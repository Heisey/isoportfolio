import React from 'react' 

import './TweeterFace.scss'

export default function TweeterFace(props) {

  return (
    <div className="TweeterFace">
      <div className="TweeterFace__bird">
        <i class="fas fa-dove"></i>
      </div>

      <div className="TweeterFace__cloud--1">
        <i class="fas fa-cloud"></i>
      </div>
      <div className="TweeterFace__cloud--2">
        <i class="fas fa-cloud"></i>
      </div>
      <div className="TweeterFace__cloud--3">
        <i class="fas fa-cloud"></i>
      </div>

      <span className="TweeterFace__title">
        TWEETER
      </span>
    </div>
  )
}