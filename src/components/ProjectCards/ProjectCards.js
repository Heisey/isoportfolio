import React, { useState } from 'react';

import CardOneFront from '../cards/CardOne/CardOneFront'
import CardOneBack from '../cards/CardOne/CardOneBack'

import ReactCardFlip from 'react-card-flip';

import './ProjectCards.scss';

export default function ProjectCards(props) {

  const { 
    children,
    cardHoverHandler,
    cardNumber
  } = props

  const [transformCard, transformCardHandler] = useState(false)

  const startCardHover = () => {
    cardHoverHandler(true)
  }

  const endCardHover = () => {
    cardHoverHandler(false)
  }

  const handleCardFlip = () => {

    transformCardHandler(!transformCard)
  }

  return (
    <div 
      className="ProjectCards"
      onMouseEnter={startCardHover}
      onMouseLeave={endCardHover}
    >
      <ReactCardFlip 
        isFlipped={transformCard}
        flipDirection="vertical"
      >
        <div 
          className="ProjectCards__face"
          onClick={handleCardFlip}
        >
          {children[0]}
        </div>
        <div
          className="ProjectCards__back"
          onClick={handleCardFlip}
        >
          {children[1]}
        </div>
      </ReactCardFlip>
    </div>
  )
}
