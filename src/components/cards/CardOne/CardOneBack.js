import React from 'react'

import './CardOneBack.scss'

export default function CardOneBack(props) {

  const { handleCardFlip } = props

  const handleClick = () => {
    handleCardFlip()
  }

  return (
    <div className="CardOneBack"
      onClick={handleClick}
    >
      Back
    </div>
  )
}