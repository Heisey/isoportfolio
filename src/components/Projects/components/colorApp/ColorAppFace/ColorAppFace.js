import React from 'react' 

import './ColorAppFace.scss'

export default function ColorAppFace(props) {

  return (
    <div className="ColorAppFace">
    <div className="ColorAppFace__red"></div>
      <div className="ColorAppFace__orange"></div>
      <div className="ColorAppFace__yellow"></div>
      <div className="ColorAppFace__green"></div>
      <div className="ColorAppFace__blue"></div>
      <div className="ColorAppFace__indigo"></div>

      <div className="ColorAppFace__palette">
        <div className="ColorAppFace__palette--red"></div>
        <div className="ColorAppFace__palette--yellow"></div>
        <div className="ColorAppFace__palette--blue"></div>
        <div className="ColorAppFace__palette--green"></div>

        <i class="fas fa-palette"></i>
      </div>

      <span className="ColorAppFace__title">
        Color App
      </span>
    </div>
  )
}