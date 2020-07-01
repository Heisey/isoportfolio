import React from 'react' 

import './NatoursFace.scss'

export default function NatoursFace(props) {

  return (
    <div className="NatoursFace">
      
      <div className="NatoursFace__ground"></div>

      <div className="NatoursFace__tree">
        <div className="NatoursFace__tree--trunk"></div>
        <div className="NatoursFace__tree--branchOne"></div>
        <div className="NatoursFace__tree--branchTwo"></div>
        <div className="NatoursFace__tree--branchThree"></div>
        <div className="NatoursFace__tree--branchFour"></div>
        <div className="NatoursFace__tree--branchFive"></div>
      </div>

      <div className="NatoursFace__cloud--one">
        <i class="fas fa-cloud"></i>
      </div>
      <div className="NatoursFace__cloud--two">
        <i class="fas fa-cloud"></i>
      </div>

      <div className="NatoursFace__sun">
        <i class="fas fa-sun"></i>
      </div>

      <div className="NatoursFace__tent">
        <i class="fas fa-campground"></i>
      </div>

      <span className="NatoursFace__title">
        Natours App
      </span>

    </div>
  )
}