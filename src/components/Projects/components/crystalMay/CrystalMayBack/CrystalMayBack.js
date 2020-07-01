import React from 'react' 

import Button from '../../Button/Button'

import './CrystalMayBack.scss'

export default function CrystalMayBack(props) {

  return (
    <div className="CrystalMayBack">
      
      <div className="CrystalMayBack__button--repo">
        <Button 
          text="REPO"
        />
      </div>
      <div className="CrystalMayBack__button--site">
        <Button 
          text="SITE"
        />
      </div>

      <div className="CrystalMayBack__stack">
        <span>STACK</span>
        <div className="CrystalMayBack__stack--one">
          NODE
        </div>
        <div className="CrystalMayBack__stack--two">
          EJS
        </div>
        <div className="CrystalMayBack__stack--three">
          POSTGRESS
        </div>
        <div className="CrystalMayBack__stack--four">
          JQUERY
        </div>
      </div>
      
      <div className="CrystalMayBack__title">
        ABOUT
      </div>

      <div className="CrystalMayBack__summary">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>
    </div>
  )
}