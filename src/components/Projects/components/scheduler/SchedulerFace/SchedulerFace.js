import React from 'react' 

import './SchedulerFace.scss'

export default function SchedulerFace(props) {

  return (
    <div className="SchedulerFace">
      <div className="SchedulerFace__calendar">
        <i class="far fa-calendar-alt"></i>
      </div>
      <span className="SchedulerFace__title">
        Scheduler
      </span>
    </div>
  )
}