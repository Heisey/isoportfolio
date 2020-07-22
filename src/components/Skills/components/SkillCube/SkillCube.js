import React from 'react';

import './SkillCube.scss'

import denoIcon from '../../../../images/deno.png'
import illustratorIcon from '../../../../images/illustratorIcon.png'
import mongodbIcon from '../../../../images/mongodbIcon.png'
import photoshopIcon from '../../../../images/photoshopIcon.png'
import postgressIcon from '../../../../images/postgressIcon.png'
import xdIcon from '../../../../images/xdIcon.png'

const imagePaths = {
  denoIcon,
  illustratorIcon,
  mongodbIcon,
  photoshopIcon,
  postgressIcon,
  xdIcon
}

export default function SkillCube(props) {

  const {
    cubeId,
    leftFace,
    icon,
    imgSrc
  } = props

  return (
    <div className="SkillCube" id={cubeId}>

      {/* ?? Top Face */}
      <span className='SkillCube__face SkillCube__face--top'>
      </span>

      {/* ?? Left Face */}
      <span className='SkillCube__face SkillCube__face--left'>
        <div className="SkillCube__leftFace">
          <span>{leftFace}</span>
          
        </div>
      </span>

      {/* ?? Right FAce */}
      <span className='SkillCube__face SkillCube__face--right'>
        <div className="SkillCube__rightFace">
          <span>
          {icon && <i className={`fab fa-${icon}`}></i>}
          </span>

          {imgSrc && <img src={imagePaths[imgSrc]} />}
          
        </div>
      </span>
    </div>
  )
}