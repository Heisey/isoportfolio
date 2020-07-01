import React from 'react';

import './HTML.scss'

export default function HTML(props) {

  return (
    <li id="html">
      <div class="GraphBody__bar--top">
        {/* <img 
          src="data:image/jpeg;base64,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" 
          alt="iPhone" 
        /> */}
      </div>
      <div class="GraphBody__bar--bottom">
        <div class="GraphBody__bar--infobox">
          <h3>HTML</h3>
        </div>
      </div>
    </li>	
  )
}