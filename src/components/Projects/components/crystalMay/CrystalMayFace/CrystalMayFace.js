import React from 'react' 

import ganesh from './ganesh-logo.png'
import './CrystalMayFace.scss'

export default function CrystalMayFace(props) {

  return (
    <div className="CrystalMayFace">
      <div className="CrystalMayFace__circle--one"></div>
      
      <div className="CrystalMayFace__circle--two"></div>
      <div className="CrystalMayFace__circle--three"></div>

      <div className="CrystalMayFace__logo">
        <img 
          src={ganesh}
          alt="Crystal May Yoga"
        />
      </div>
      
      <span className="CrystalMayFace__title">
        Crystal May Yoga
      </span>
    </div>
  )
}