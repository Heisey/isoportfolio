import React, { useEffect } from 'react';

import './Header.scss'

export default function Header(props) {
  const { title } = props;

  useEffect(() => {
    const text = document.getElementById('projectsHeader')
    let shadow = '';
    for(var i = 0; i < 15; i++) {
      shadow += (shadow ? ',': '') + i*1 + 'px 10px #d9d9d9'
    }
    text.style.textShadow = shadow
  }, [])

  return (
    <div className="Header">
      <div  
        id="projectsHeader"
        className="Header__text"
        data-text={title}  
      >
        {title}
      </div>
    </div>
  )
}