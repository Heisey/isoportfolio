import React from 'react'

import AboutMobile from './components/AboutMobile/AboutMobile'
import Future from './components/Future/Future'
import Header from '../Header/Header'
import History from './components/History/History'
import Interests from './components/Interests/Interests'

import './About.scss'

export default function About(props) {

  return (
    <div className="About">
      
      <div className="About__header">
        <Header
          title="ABOUT"
        />
      </div>
      
      <div className="About__history">
        <History />
      </div>

      <div className="About__interests">
        <Interests />
      </div>

      <div className="About__future">
        <Future />
      </div>

      <div className="About__mobile">
        <AboutMobile />
      </div>
    </div>
  )
}