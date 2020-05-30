import React from 'react'

import Header from '../Header/Header';
import JumboTron from '../JumboTron/JumboTron';
import ProjectCard from '../ProjectCards/ProjectCards';

import './Main.scss'

export default function Main(props) {

  return (
    <div className="Main">
      <JumboTron />
      <Header title="PROJECTS" />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <div className="Main__end"></div>
    </div>
  )
}