import React from 'react'
import './ScheduleCont.css'

import ScheduleCell from '../ScheduleCellBlock/ScheduleCell'
import ScheduleBlockContCell from '../ScheduleBlockContCell'

export default function ScheduleCont({ place, data }) {

  return (
    <>
    {place ? 
      <ScheduleBlockContCell place={place} data={data}/>
      :
      <div>{Object.keys(data).map(key => <ScheduleCell key={key} {...data[key]} />)} </div>
    }
    </>
  )
}
