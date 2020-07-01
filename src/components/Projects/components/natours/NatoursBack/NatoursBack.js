import React from 'react' 

import Button from '../../Button/Button'

import './NatoursBack.scss'

export default function NatoursBack(props) {

  return (
    <div className="NatoursBack">
      
      <div className="NatoursBack__button--repo">
        <Button 
          text="REPO"
        />
      </div>
      <div className="NatoursBack__button--site">
        <Button 
          text="SITE"
        />
      </div>

      <div className="NatoursBack__stack">
        <span>STACK</span>
        <div className="NatoursBack__stack--one">
          NODE
        </div>
        <div className="NatoursBack__stack--two">
          EJS
        </div>
        <div className="NatoursBack__stack--three">
          POSTGRESS
        </div>
        <div className="NatoursBack__stack--four">
          JQUERY
        </div>
      </div>
      
      <div className="NatoursBack__title">
        ABOUT
      </div>

      <div className="NatoursBack__summary">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>
    </div>
  )
}