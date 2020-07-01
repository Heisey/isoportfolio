import React from 'react' 

import './RestfullFace.scss'

export default function RestfullFace(props) {

  return (
    <div className="RestfullFace">
      <div className="RestfullFace__logo">
        <img 
          src="https://raw.githubusercontent.com/seanssullivan/lighthouse-midterm/master/public/images/restful-stack-logo.png"
          alt="Restfull Stack Logo"
        />
      </div>
      <span className="RestfullFace__title">
        RESTFULL STACK
      </span>
    </div>
  )
}