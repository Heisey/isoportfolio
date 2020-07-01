import React from 'react' 

import Button from '../../Button/Button'

import './ColorAppBack.scss'

export default function ColorAppBack(props) {

  return (
    <div className="ColorAppBack">
      <div className="ColorAppBack__button--repo">
        <Button 
          text="REPO"
        />
      </div>
      <div className="ColorAppBack__button--site">
        <Button 
          text="SITE"
        />
      </div>

      <div className="ColorAppBack__stack">
        <span>STACK</span>
        <div className="ColorAppBack__stack--one">
          NODE
        </div>
        <div className="ColorAppBack__stack--two">
          EJS
        </div>
        <div className="ColorAppBack__stack--three">
          POSTGRESS
        </div>
        <div className="ColorAppBack__stack--four">
          JQUERY
        </div>
      </div>
      
      <div className="ColorAppBack__title">
        ABOUT
      </div>

      <div className="ColorAppBack__summary">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>
    </div>
  )
}