import React from 'react' 

import Button from '../../Button/Button'

import './TweeterBack.scss'

export default function TweeterBack(props) {

  return (
    <div className="TweeterBack">
      <div className="TweeterBack__button--repo">
        <Button 
          text="REPO"
        />
      </div>
      <div className="TweeterBack__button--site">
        <Button 
          text="SITE"
        />
      </div>

      <div className="TweeterBack__stack">
        <span>STACK</span>
        <div className="TweeterBack__stack--one">
          NODE
        </div>
        <div className="TweeterBack__stack--two">
          EJS
        </div>
        <div className="TweeterBack__stack--three">
          POSTGRESS
        </div>
        <div className="TweeterBack__stack--four">
          JQUERY
        </div>
      </div>
      
      <div className="TweeterBack__title">
        ABOUT
      </div>

      <div className="TweeterBack__summary">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>
    </div>
  )
}