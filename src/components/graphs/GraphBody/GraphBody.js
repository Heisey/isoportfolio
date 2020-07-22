import React from 'react'



import './GraphBody.scss';
import GraphBar from '../GraphBar/GraphBar'

import denoImg from '../../../images/deno.png'
import expressImg from '../../../images/express.png'
import html5Img from '../../../images/html5.png'
import illustratorImg from '../../../images/illustrator.png'
import javascriptImg from '../../../images/javascript.png';
import mongoDBImg from '../../../images/mongodb.png'
import nodeImg from '../../../images/node.png'
import photoshopImg from '../../../images/photoshop.png'
import postgress from '../../../images/postgress.png'
import reactImg from '../../../images/react.png'
import sassImg from '../../../images/sass.png'
import xdImg from '../../../images/xd.png'

export default function GraphBody(props) {

  const {
    showAdobeSkills,
    showBackSkills,
    showFrontSkills,
    showXDTextHandler,
    showPhotoshopTextHandler,
    showIllustratorTextHandler,
    showNodeTextHandler,
    showDenoTextHandler,
    showExpressTextHandler,
    showMongoTextHandler,
    showPostgresTextHandler,
    showHtmlTextHandler,
    showCssTextHandler,
    showJavascriptTextHandler,
    showReactTextHandler
  } = props

  return (
    <div className="GraphBody">
      {/* <div className="GraphBody__bottom"></div> */}
      <ul id="GraphBody__bar">
        {showFrontSkills && (
          <>
            <GraphBar
              imageURL={html5Img}
              name="html5"
              showTextHandler={showHtmlTextHandler}
            />
            
            <GraphBar
              imageURL={sassImg}
              name="sass"
              showTextHandler={showCssTextHandler}
            />

            <GraphBar
              imageURL={javascriptImg}
              name="javascript"
              showTextHandler={showJavascriptTextHandler}
            />

            <GraphBar
              imageURL={reactImg}
              name="react"
              showTextHandler={showReactTextHandler}
            />
            
          </>
        )}
			
        {showBackSkills && (
          <>
          <GraphBar
              imageURL={nodeImg}
              name="node"
              showTextHandler={showNodeTextHandler}
            />
            <GraphBar
              imageURL={denoImg}
              name="deno"
              showTextHandler={showDenoTextHandler}
            />
            <GraphBar
              imageURL={expressImg}
              name="express"
              showTextHandler={showExpressTextHandler}
            />
            <GraphBar
              imageURL={mongoDBImg}
              name="mongoDB"
              showTextHandler={showMongoTextHandler}
            />
            <GraphBar
              imageURL={postgress}
              name="postgress"
              showTextHandler={showPostgresTextHandler}
            />
            
          </>
        )}

        {showAdobeSkills && (
          <>
            <GraphBar
              imageURL={xdImg}
              name="xd"
              showTextHandler={showXDTextHandler}
            />
            <GraphBar
              imageURL={photoshopImg}
              name="photoshop"
              showTextHandler={showPhotoshopTextHandler}
            />
            <GraphBar
              imageURL={illustratorImg}
              name="illustrator"
              showTextHandler={showIllustratorTextHandler}
            />
            
          </>
        )}
      </ul>
      
    </div>
  )
}
