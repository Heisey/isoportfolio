import React from 'react'

import './Arrow.scss'

export default function Arrow(props) {

  const {
    showAbout,
    showContact,
    showSkills,
    showProjects
  } = props

  return (
    <div className={
        `
          ${showProjects && 'ArrowProjects'}
          ${showAbout && 'ArrowInfo'}
          ${showContact && 'ArrowContact'}
          ${showSkills && 'ArrowSkills'}
        ` 
      }
    >
      <span class={
          `
            ${showProjects && 'ArrowProjects__caret' }
            ${showAbout && 'ArrowAbout__caret' }
            ${showContact && 'ArrowContact__caret'}
            ${showSkills && 'ArrowSkills__caret'}
          `
        }
      >
        <span class={
            `
              ${showProjects && 'ArrowProjects__caret1' }
              ${showAbout && 'ArrowAbout__caret1' }
              ${showContact && 'ArrowContact__caret1'}
              ${showSkills && 'ArrowSkills__caret1'}
            `
          }
        >
        </span>
      </span> 
    </div>
  )
}