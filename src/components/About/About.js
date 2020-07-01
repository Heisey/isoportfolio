import React from 'react'

import Future from './components/Future/Future'
import Header from '../Header/Header'
import History from './components/History/History'
import Interests from './components/Interests/Interests'

import './About.scss'

export default function About(props) {

  return (
    <div className="About">
      <Header
        title="ABOUT"
      />
      <div className="About__history">
        <History />
      </div>

      <div className="About__interests">
        <Interests />
      </div>

      <div className="About__future">
        <Future />
      </div>
    </div>
  )
}