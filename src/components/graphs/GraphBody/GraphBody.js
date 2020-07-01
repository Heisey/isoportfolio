import React from 'react'

import HTML from '../frontEnd/HTML/HTML'
import REACT from '../frontEnd/REACT/REACT'
import REACTNATIVE from '../frontEnd/REACTNATIVE/REACTNATIVE'
import SASS from '../frontEnd/SASS/SASS'

import EXPRESS from '../backEnd/EXPRESS/EXPRESS'
import NODE from '../backEnd/NODE/NODE'
import POSTGRESS from '../backEnd/PROSTGRESS/POSTGRESS'

import ILLUSTRATOR from '../adobe/ILLUSTRATOR/ILLUSTRATOR'
import PHOTOSHOP from '../adobe/PHOTOSHOP/PHOTOSHOP'
import XD from '../adobe/XD/XD'

import './GraphBody.scss';

export default function GraphBody(props) {

  const {
    showAdobeSkills,
    showBackSkills,
    showFrontSkills,
    showXDTextHandler,
    showPhotoshopTextHandler,
    showIllustratorTextHandler
  } = props

  return (
    <div className="GraphBody">
      {/* <div className="GraphBody__bottom"></div> */}
      <ul id="GraphBody__bar">
        {showFrontSkills && (
          <>
            <HTML />
            <SASS />
            <REACT />
            <REACTNATIVE />
          </>
        )}
			
        {showBackSkills && (
          <>
            <NODE />
            <EXPRESS />
            <POSTGRESS />
          </>
        )}

        {showAdobeSkills && (
          <>
            <XD 
              showXDTextHandler={showXDTextHandler}
            />
            <PHOTOSHOP 
              showPhotoshopTextHandler={showPhotoshopTextHandler}
            />
            <ILLUSTRATOR 
              showIllustratorTextHandler={showIllustratorTextHandler}
            />
          </>
        )}
      </ul>
      
    </div>
  )
}


{/* <li id="macbook">
<div class="top">
  <img src="images/macbook.png" alt="MacBook" />
</div>
<div class="bottom">
  <div class="infobox">
    <h3>MacBook</h3>
    <p>102,6</p>
  </div>
</div>
</li>
<li id="ipod">
<div class="top">
  <img src="images/ipod.png" alt="iPod" />
</div>
<div class="bottom">
  <div class="infobox">
    <h3>iPod</h3>
    <p>198,4</p>
  </div>
</div>
</li>
<li id="cinema">
<div class="top">
  <img src="images/cinema.png" alt="Cinema Display" />
</div>
<div class="bottom">
  <div class="infobox">
    <h3>Cinema&nbsp;Display</h3>
    <p>38,2</p>
  </div>
</div>
</li>
<li id="macmini">
<div class="top">
  <img src="images/macmini.png" alt="Mac Mini" />
</div>
<div class="bottom">
  <div class="infobox">
    <h3>Mac&nbsp;Mini</h3>
    <p>55,6</p>
  </div>
</div>
</li> */}
