import React, { useState } from 'react'

import Cube from '../Cube/Cube'
import GraphBody from '../graphs/GraphBody/GraphBody'
import Header from '../Header/Header'
import SkillCube from './components/SkillCube/SkillCube'

import './Skills.scss'

export default function Skills(props) {

  const [showFrontSkills, showFrontSkillsHandler] = useState(false)
  const [showAdobeSkills, showAdobeSkillsHandler] = useState(false)
  const [showBackSkills, showBackSkillsHandler] = useState(false)
  const [showXDText, showXDTextHandler] = useState(false)
  const [showPhotoshopText, showPhotoshopTextHandler] = useState(false)
  const [showIllustratorText, showIllustratorTextHandler] = useState(false)
  const [showNodeText, showNodeTextHandler] = useState(false)
  const [showDenoText, showDenoTextHandler] = useState(false)
  const [showExpressText, showExpressTextHandler] = useState(false)
  const [showMongoText, showMongoTextHandler] = useState(false)
  const [showPostgresText, showPostgresTextHandler] = useState(false)
  const [showHtmlText, showHtmlTextHandler] = useState(false)
  const [showCssText, showCssTextHandler] = useState(false)
  const [showJavascriptText, showJavascriptTextHandler] = useState(false)
  const [showReactText, showReactTextHandler] = useState(false)

  return (
    <div className="Skills">
      <div className="Skills__header">
        <Header title="SKILLS" />
      </div>
      
      <div className='Skills__cubes'>
        <Cube 
          showBackSkillsHandler={showBackSkillsHandler}
          showFrontSkillsHandler={showFrontSkillsHandler}
          showAdobeSkillsHandler={showAdobeSkillsHandler}
        />
      </div>
      <div className="Skills__graph">
        <GraphBody 
          showAdobeSkills={showAdobeSkills}
          showBackSkills={showBackSkills}
          showFrontSkills={showFrontSkills}
          showXDTextHandler={showXDTextHandler}
          showPhotoshopTextHandler={showPhotoshopTextHandler}
          showIllustratorTextHandler={showIllustratorTextHandler}
          showNodeTextHandler={showNodeTextHandler}
          showDenoTextHandler={showDenoTextHandler}
          showExpressTextHandler={showExpressTextHandler}
          showMongoTextHandler={showMongoTextHandler}
          showPostgresTextHandler={showPostgresTextHandler}
          showHtmlTextHandler={showHtmlTextHandler}
          showCssTextHandler={showCssTextHandler}
          showJavascriptTextHandler={showJavascriptTextHandler}
          showReactTextHandler={showReactTextHandler}
        />
      </div>
      
      <div className={`Skills__text--xd ${showXDText && 'Skills__textActive'}`}>
        <p className="Skills__text--xdText">
        Always seeking a new trendy web design, I’m proficient at creating interactive wireframes in XD.
        </p>
      </div>

      <div className={`Skills__text--photoshop ${showPhotoshopText && 'Skills__textActive'}`}>
        <p className="Skills__text--photoshopText">
        Experience crafting logos and icons in Illustrator. Currently working on improving my skills with this software.
        </p>
      </div>

      <div className={`Skills__text--illustrator ${showIllustratorText && 'Skills__textActive'}`}>
        <p className="Skills__text--illustratorText">
        Experience modifying digital assets in Photoshop. Currently working on improving my skills with this software.
        </p>
      </div>

      <div className={`Skills__text--node ${showNodeText && 'Skills__textActive'}`}>
        <p className="Skills__text--nodeText">
          A true backend dev nerd, I’ve studied the event loop and am highly knowledgeable working in this runtime. Experience with Test Driven Development.
        </p>
      </div>

      <div className={`Skills__text--deno ${showDenoText && 'Skills__textActive'}`}>
        <p className="Skills__text--denoText">
          Currently self-studying Deno and loving the features I’ve seen so far. Also using this as an opportunity to do more coding in TypeScript.
        </p>
      </div>

      <div className={`Skills__text--express ${showExpressText && 'Skills__textActive'}`}>
        <p className="Skills__text--expressText">
          Lots of experience implemetning MVC-based middleware and creating RESTful APIs.
        </p>
      </div>

      <div className={`Skills__text--mongo ${showMongoText && 'Skills__textActive'}`}>
        <p className="Skills__text--mongoText">
          Experience designing NoSQL schemas, and querying and representing data using Mongoose.
        </p>
      </div>

      <div className={`Skills__text--postgres ${showPostgresText && 'Skills__textActive'}`}>
        <p className="Skills__text--postgresText">
          Experience designing relational databases and coding CRUD operations with PostreSQL.
        </p>
      </div>

      <div className={`Skills__text--html ${showHtmlText && 'Skills__textActive'}`}>
        <p className="Skills__text--htmlText">
          Comfortable using canvas and SVG elements, forms, and tables. Proficient using the pug 
          and EJS libraries.
        </p>
      </div>

      <div className={`Skills__text--css ${showCssText && 'Skills__textActive'}`}>
        <p className="Skills__text--cssText">
          Always seeking an excuse to implement as many CSS animations as I can get away with. 
          I almost always code in SASS.
        </p>
      </div>

      <div className={`Skills__text--javascript ${showJavascriptText && 'Skills__textActive'}`}>
        <p className="Skills__text--javascriptText">
          Highly proficient and experienced JS developer with working knowledge of TypeScript as well. 
          Experienced in both functional and Object Oriented programming approaches and comfortable 
          writing efficient asynchronous code.
        </p>
      </div>

      <div className={`Skills__text--react ${showReactText && 'Skills__textActive'}`}>
        <p className="Skills__text--reactText">
          Highly experienced in both classical and functional component design and implementation. 
          Capable of using styled components, but prefer to design my own. Currently sharpening my 
          ReactNative skills.
        </p>
      </div>
      
      <div className="Skills__mobile">
        <div className="Skills__mobile--frontend">

          <div className="Skills__mobile--frontendText">
            High capable JavaScript developer with working knowledge of TypeScript as well. 
            Experienced in both functional and Object Oriented programming approaches, 
            including proficiency in both classical and functional component design and 
            implementation in ReactJS. Always seeking an excuse to implement as many CSS 
            animations as I can get away with.
          </div>

          <div className="Skills__mobile--html">
            <SkillCube 
              cubeId="htmlCube" 
              leftFace="90%"
              icon="html5"  
            />
          </div>
          
          <div className="Skills__mobile--sass">
            <SkillCube cubeId="sassCube"
              leftFace="90%"
              icon="sass" 
              />
          </div>
          
          <div className="Skills__mobile--javascript">
            <SkillCube cubeId="javascriptCube" 
              leftFace="90%"
              icon="js-square" 
            />
          </div>
          
          <div className="Skills__mobile--react">
            <SkillCube cubeId="reactCube" 
              leftFace="90%"
              icon="react" 
            />
          </div>

          <div className="Skills__mobile--cube1">
            <SkillCube cubeId="purpleCube" />
          </div>

          <div className="Skills__mobile--cube2">
            <SkillCube cubeId="greenCube" />
          </div>

          
        </div>

        <div className="Skills__mobile--backend">

          <div className="Skills__mobile--backendText">
            A true backend dev nerd, I’ve studied the event loop and am highly 
            knowledgeable working in this runtime. I have created many RESTful APIs, and 
            have implemented MVC-based middleware for dozens of web projects. Comfortable 
            designing both NoSQL schemas and relational databases.
          </div>

          <div className="Skills__mobile--deno">
            <SkillCube cubeId="denoCube" 
              leftFace="deno"
              imgSrc="denoIcon"
            />
          </div>

          <div className="Skills__mobile--mongoDB">
            <SkillCube cubeId="mongoDBCube" 
              leftFace="mongo"
              imgSrc="mongodbIcon"
            />
          </div>

          <div className="Skills__mobile--node">
            <SkillCube cubeId="nodeCube" 
              leftFace="80%"
              icon="node"
            />
          </div>

          <div className="Skills__mobile--postgress">
            <SkillCube cubeId="postgressCube" 
              leftFace="post"
              imgSrc="postgressIcon"
            />
          </div>

          <div className="Skills__mobile--cube3">
            <SkillCube cubeId="purpleCube" />
          </div>

          <div className="Skills__mobile--cube4">
            <SkillCube cubeId="orangeCube" />
          </div>
        </div>
        
        <div className="Skills__mobile--design">

          <div className="Skills__mobile--designText">
            <span className="Skills__mobile--designTextA">
              Always seeking a new trendy web design, I’m proficient at creating interactive 
              wireframes in XD, logos and icons in Illustrator, and modifying digital 
            </span>

            <span className="Skills__mobile--designTextB">
              assets in Photoshop. I’m passionate about web design, and am currently 
              investing time in improving my skills in this discipline.
            </span>

            <span className="Skills__mobile--designTextC">
              Always seeking a new trendy web design, I’m proficient at creating interactive 
              wireframes in XD, logos and icons in Illustrator, and modifying digital assets 
              in Photoshop. I’m passionate about web design, and am currently 
              investing time in improving my skills in this discipline.
            </span>
            
          </div>

          <div className="Skills__mobile--xd">
            <SkillCube cubeId="xdCube" 
              leftFace="xd"
              imgSrc="xdIcon"
            />
          </div>

          <div className="Skills__mobile--photoshop">
            <SkillCube cubeId="photoshopCube" 
              leftFace="photo"
              imgSrc="photoshopIcon"
            />
          </div>

          <div className="Skills__mobile--illustrator">
            <SkillCube cubeId="illustratorCube" 
              leftFace="illu"
              imgSrc="illustratorIcon"
            />
          </div>
        </div>
      </div>
    </div>
  )
}