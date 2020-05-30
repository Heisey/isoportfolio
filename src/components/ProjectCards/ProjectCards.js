import React from 'react';

import './ProjectCards.scss';

export default function ProjectCards(props) {

  return (
    <div className="ProjectCards">
      <div className="ProjectCards__card">
        <div className="ProjectCards__header">
          <i className="ProjectCards__header--image fas fa-project-diagram"></i>
          <h3 className="ProjectCards__header--title">Project 1</h3>
        </div>
        <div className="ProjectCards__content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>

      <div className="ProjectCards__card">
        <div className="ProjectCards__header">
          <i className="ProjectCards__header--image fas fa-project-diagram"></i>
          <h3 className="ProjectCards__header--title">Project 2</h3>
        </div>
        <div className="ProjectCards__content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>

      <div className="ProjectCards__card">
        <div className="ProjectCards__header">
          <i className="ProjectCards__header--image fas fa-project-diagram"></i>
          <h3 className="ProjectCards__header--title">Project 3</h3>
        </div>
        <div className="ProjectCards__content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea.</p>
        </div>
      </div>

      
    </div>
  )
}