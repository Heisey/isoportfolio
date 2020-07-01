import React, { useEffect, useState } from 'react';

import Header from './components/JumboHeader/JumboHeader'
import SocialMediaButtons from '../SocialMediaButtons/SocialMediaButtons';

import './JumboTron.scss'

export default function JumboTron(props) {

  const [gitHubHover, gitHubHoverHandler] = useState(false)
  const [linkedinHover, linkedinHoverHandler] = useState(false)
  const [emailHover, emailHoverHandler] = useState(false)

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
      <SocialMediaButtons 
        gitHubHoverHandler={gitHubHoverHandler}
        linkedinHoverHandler={linkedinHoverHandler}
        emailHoverHandler={emailHoverHandler}
      />
      
      <div 
        id="JumboTron__text" 
        className="JumboTron__text"
      >
        <div 
          className="JumboTron__text--first"
        >
          <Header 
            isActive={gitHubHover}
            title='JUSTIN'
            textColorShadow='#49872e'
            hoverClass='gitHubColor'
          />
        </div>

        <div 
          className='JumboTron__text--last'
        >
          <Header 
            isActive={linkedinHover}
            title='HEISLER'
            textColorShadow='#193d69'
            hoverClass='linkedinColor'
          />
        </div>
        
        <div 
          className="JumboTron__text--nick"
        >
          <Header 
            isActive={emailHover}
            title={`{HEISEY}`}
            textColorShadow='#6e1b02'
            hoverClass='emailColor'
          />
          
        </div>
      </div>
    
    </div>
  )
}