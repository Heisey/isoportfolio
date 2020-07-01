import React from 'react'

import './CardOneFront.scss'

export default function CardOneFront(props) {

  const { handleCardFlip } = props

  const handleClick = () => {
    handleCardFlip()
  }

  return (
    <div className="CardOneFront"
      onClick={handleClick}
    >
      Front
    </div>
  )
}