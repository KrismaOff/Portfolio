import React from 'react'
import './CellDate.css'

import { Link } from 'react-router-dom'

export default function CellDate({ event, chosen, active, day, fulldate, dayOfWeek, weekends }) {

    return (
        <Link className='CellDateLink' to={`/Calendar/Filter/Date/${fulldate}`} >
            <div className={event ? "point" : "pointNone"} />
            <div className={chosen || active ? "unactive active" : "unactive"}>
                <div className={weekends ? "day weekends" : "day"}>{day}</div>
                <div className={weekends ? "dayOfWeek weekends" : "dayOfWeek"}>{dayOfWeek}</div>
                <hr className={active ? "lineCalendar" : "lineCalendarNone"} />
            </div>
        </Link>
    )
}
