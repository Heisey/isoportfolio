import React, { useEffect } from 'react';

import './JumboHeader.scss'

export default function JumboHeader(props) {
  const {
    isActive,
    hoverClass,
    title,
    textColorShadow
  } = props;

  useEffect(() => {
    const textColorConverter = () => {
      if (!isActive) {
        return '#d9d9d9'
      } else {
        return textColorShadow
      }
    }
    
    const text = document.getElementById(title)
    let shadow = '';
    for(var i = 0; i < 15; i++) {
      // color here for variable colors
      shadow += (shadow ? ',': '') + i*1 + `px 10px ${textColorConverter()}`
    }
    text.style.textShadow = shadow
  }, [isActive])

  return (
    <div className="JumboHeader">
      <div  
        id={title}
        className={`
          JumboHeader__text
          ${isActive && hoverClass}
        `}
        data-text={title}  
      >
        {title}
      </div>
    </div>
  )
}

