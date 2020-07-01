import React, { useEffect } from 'react';

import './Header.scss'

export default function Header(props) {
  const { 
    title,
    card1Hover,
    card2Hover,
    card3Hover,
    card4Hover,
    card5Hover,
    card6Hover
  } = props;

  useEffect(() => {
    const textColor = () => {
      if (!card1Hover && !card2Hover && !card3Hover && !card4Hover && !card5Hover && !card6Hover) {
        return '#d9d9d9'
      } else if (card1Hover) {
        return '#043b42'
      } else if (card2Hover) {
        return '#41748a'
      } else if (card3Hover) {
        return '#0e141a'
      } else if (card4Hover) {
        return '#400273'
      } else if (card5Hover) {
        return '#1d573a'
      } else if (card6Hover) {
        return '#8a6838'
      }
    }
    
    const text = document.getElementById('projectsHeader')
    let shadow = '';
    for(var i = 0; i < 15; i++) {
      // color here for variable colors
      shadow += (shadow ? ',': '') + i*1 + `px 10px ${textColor()} `
    }
    text.style.textShadow = shadow
  }, [card1Hover, card2Hover, card3Hover, card4Hover, card5Hover, card6Hover])

  return (
    <div className="Header">
      <div  
        id="projectsHeader"
        className={`
          Header__text
          ${card1Hover && 'oneColor'}
          ${card2Hover && 'twoColor'}
          ${card3Hover && 'threeColor'}
          ${card4Hover && 'fourColor'}
          ${card5Hover && 'fiveColor'}
          ${card6Hover && 'sixColor'}
        `}
        data-text={title}  
      >
        {title}
      </div>
    </div>
  )
}