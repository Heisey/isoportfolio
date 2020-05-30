import React from 'react';

import Header from '../Header/Header';
import ProjectCard from '../ProjectCards/ProjectCards';

export default function Projects(props) {

  return (
    <div className="Projects">
      <Header title="PROJECTS" />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  )
}