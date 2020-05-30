import React, { useEffect } from 'react';

import SocialMediaButtons from '../SocialMediaButtons/SocialMediaButtons';

import './JumboTron.scss'

export default function JumboTron(props) {

  useEffect(() => {
    const text = document.getElementById('JumboTron__text')
    let shadow = '';
    for(var i = 0; i < 15; i++) {
      shadow += (shadow ? ',': '') + i*1 + 'px 10px #d9d9d9'
    }
    text.style.textShadow = shadow
  }, [])

  return (
    <div className="JumboTron">
      <SocialMediaButtons />
      <div 
        id="JumboTron__text" 
        className="JumboTron__text"
        data-text={`JUSTIN HEISLER {HEISEY}`}  
      >
        JUSTIN 
        <br />
        HEISLER
        <br />
        {'{'}HEISEY{'}'}
      </div>
    </div>
  )
}