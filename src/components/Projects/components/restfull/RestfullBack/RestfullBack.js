import React from 'react' 

import Button from '../../Button/Button'

import './RestfullBack.scss'

export default function RestfullBack(props) {

  return (
    <div className="RestfullBack">
      <div className="RestfullBack__button--repo">
        <Button 
          text="REPO"
        />
      </div>
      <div className="RestfullBack__button--site">
        <Button 
          text="SITE"
        />
      </div>

      <div className="RestfullBack__stack">
        <span>STACK</span>
        <div className="RestfullBack__stack--one">
          NODE
        </div>
        <div className="RestfullBack__stack--two">
          EJS
        </div>
        <div className="RestfullBack__stack--three">
          POSTGRESS
        </div>
        <div className="RestfullBack__stack--four">
          JQUERY
        </div>
      </div>
      
      <div className="RestfullBack__title">
        ABOUT
      </div>

      <div className="RestfullBack__summary">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>
    </div>
  )
}