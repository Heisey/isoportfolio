import React from 'react'

import './Button.scss'

export default function Button(props) {

  const { text } = props

  return (
    <div className="Button">
      <a 
        className="Button__face--one"
        href="#"
      >
        {text}
      </a>

      <span className="Button__face--two">
        GO
      </span>
      
    </div>
  )
}