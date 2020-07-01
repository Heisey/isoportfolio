import React from 'react';

import Header from '../Header/Header';
import ProjectCard from '../ProjectCards/ProjectCards';

import ColorAppFace from './components/colorApp/ColorAppFace/ColorAppFace'
import ColorAppBack from './components/colorApp/ColorAppBack/ColorAppBack'

import CrystalMayFace from './components/crystalMay/CrystalMayFace/CrystalMayFace'
import CrystalMayBack from './components/crystalMay/CrystalMayBack/CrystalMayBack'

import NatoursFace from './components/natours/NatoursFace/NatoursFace'
import NatoursBack from './components/natours/NatoursBack/NatoursBack'

import RestfullFace from './components/restfull/RestfullFace/RestfullFace'
import RestfullBack from './components/restfull/RestfullBack/RestfullBack'

import SchedulerFace from './components/scheduler/SchedulerFace/SchedulerFace'
import SchedulerBack from './components/scheduler/SchedulerBack/SchedulerBack'

import TweeterFace from './components/tweeter/TweeterFace/TweeterFace'
import TweeterBack from './components/tweeter/TweeterBack/TweeterBack'

import './Projects.scss'

export default function Projects(props) {

  const { 
    card1HoverHandler,
    card2HoverHandler,
    card3HoverHandler,
    card4HoverHandler,
    card5HoverHandler,
    card6HoverHandler,
    card1Hover,
    card2Hover,
    card3Hover,
    card4Hover,
    card5Hover,
    card6Hover
  } = props

  return (
    <div className={`Projects`}>
      <Header 
        title="PROJECTS" 
        card1Hover={card1Hover}
        card2Hover={card2Hover}
        card3Hover={card3Hover}
        card4Hover={card4Hover}
        card5Hover={card5Hover}
        card6Hover={card6Hover}
      />

      <div className="Projects__cards">
        <ProjectCard 
          cardHoverHandler={card1HoverHandler}
          cardNumber='one'
        >
          <TweeterFace />
          <TweeterBack />
        </ProjectCard>

        <ProjectCard 
          cardHoverHandler={card3HoverHandler}
          cardNumber='three'
        >
          <SchedulerFace />
          <SchedulerBack />
        </ProjectCard>

        <ProjectCard 
          cardHoverHandler={card2HoverHandler}
          cardNumber='two'
        >
          <RestfullFace />
          <RestfullBack />
        </ProjectCard>

        <ProjectCard 
          cardHoverHandler={card4HoverHandler}
          cardNumber='four'
        >
          <ColorAppFace />
          <ColorAppBack />
        </ProjectCard>
        
        <ProjectCard 
          cardHoverHandler={card5HoverHandler}
          cardNumber='five'
        >
          <NatoursFace />
          <NatoursBack />
        </ProjectCard>

        <ProjectCard 
          cardHoverHandler={card6HoverHandler}
          cardNumber='six'
        >
          <CrystalMayFace />
          <CrystalMayBack />
        </ProjectCard>
      </div>
    </div>
  )
}