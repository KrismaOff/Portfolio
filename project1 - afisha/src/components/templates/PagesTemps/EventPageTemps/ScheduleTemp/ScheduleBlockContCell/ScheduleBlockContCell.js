import React, { useState } from 'react'
import './ScheduleBlockContCell.css'

import ScheduleCell from '../ScheduleCellBlock/ScheduleCell'

export default function ScheduleBlockContCell({place, data}) {

    const [active, setActive] = useState(false)

    const exeptions = {
        className: active ? "scheduleContAct" : "scheduleCont",
        // className: place ? active ? "scheduleContAct" : "scheduleCont" : "",
        onMouseOver: () => setActive(true),
        onMouseOut: () => setActive(false)
      }

  return (
    <div {...exeptions} >
      <div className={active ? "placeShAct" : "placeSh"}>{place}</div>

      <div className={active ? "scheduleBlockAct" : "scheduleBlock"}>
        {Object.keys(data).map((key, i, arr) => {
          const lineFunc = (i, arr) => {
            let res;
            for (let j = 0; j < arr.length; j++) if (i === j && arr.length !== j + 1) res = true
            return res
          } 
          return <div key={key}>
            <ScheduleCell {...data[key]} />
            {lineFunc(i, arr) && <div className='line'/>}
          </div>
        })}
      </div>

      {/* {Object.keys(data).map(key => <ScheduleCell key={key} {...data[key]} />)} */}

    </div>
  )
}
