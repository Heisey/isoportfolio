import React from 'react' 

import Button from '../../Button/Button'

import './SchedulerBack.scss'

export default function SchedulerBack(props) {

  return (
    <div className="SchedulerBack">
      <div className="SchedulerBack__button--repo">
        <Button 
          text="REPO"
        />
      </div>
      <div className="SchedulerBack__button--site">
        <Button 
          text="SITE"
        />
      </div>

      <div className="SchedulerBack__stack">
        <span>STACK</span>
        <div className="SchedulerBack__stack--one">
          NODE
        </div>
        <div className="SchedulerBack__stack--two">
          EJS
        </div>
        <div className="SchedulerBack__stack--three">
          POSTGRESS
        </div>
        <div className="SchedulerBack__stack--four">
          JQUERY
        </div>
      </div>
      
      <div className="SchedulerBack__title">
        ABOUT
      </div>

      <div className="SchedulerBack__summary">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>
    </div>
  )
}