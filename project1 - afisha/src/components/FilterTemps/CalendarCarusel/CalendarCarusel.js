import React from 'react'
import './CalendarCarusel.css'

import useHandleCalendar from '../../../hooks/MainPage/Calendar/useHandleCalendar'

import CellDate from '../../templates/PagesTemps/MainPageTemps/CellDate'
import { date } from '../../../helper/data'
import { getDateToday } from '../../../helper/HandleDate/getDateToday'
import { getMonthDecl } from '../../../helper/HandleDate/getMonthDecl'
import { handleDate } from '../../../helper/HandleDate/handleDate'
import { filterStr } from '../../../helper/Filter/filterStr'


import useGetDayOfWeek from '../../../hooks/MainPage/Calendar/useGetDayOfWeek'
import useGetWeekends from '../../../hooks/MainPage/Calendar/useGetWeekends'

import useGetUniversalData from '../../../hooks/handleActionDB/RecieveDATA/useGetUniversalData'

import arrowNext from '../../../assets/img/IconEvent/arrowNext.svg'
import arrowPrev from '../../../assets/img/IconEvent/arrowPrev.svg'

export default function CalendarCarusel({ id, filter, eventsListData }) {

    const { universalData } = useGetUniversalData(filter, "all")
    const [handlePrevClick, handleNextClick, month, year] = useHandleCalendar()
    const getDayOfWeek = useGetDayOfWeek()
    const getWeekends = useGetWeekends()

    const objName = (id, act) => {
        const obj = universalData?.find(data => filterStr('ID', data) === id)
        const name = obj && filterStr("NAME", obj).toLowerCase()
        return act === "FB" ? name?.charAt(0).toUpperCase() + name?.slice(1).toLowerCase() : name;
    }

    const exceptions = {
        futureevents: "Все будущие события",
        pastevents: "Все прошедшие события",
        allevents: "Все события",
        TAG: `Все ${objName(id)}`,
        DATE: `Все события за ${filter === "DATE" && getMonthDecl(id)}`,
        EVENT_PLACE: `Все события - ${objName(id, "FB")}`
    }

    return (
        <div>
            <div className='title'>{exceptions[filter]}</div>
            <div className='month'>{date.months[month]}</div>
            <div className="calendar-carousel">
                <img className="btnArrow" onClick={handlePrevClick} src={arrowPrev} alt=""/>
                <div className='daysMobile'>
                    <div className="days">
                        {Array.from({ length: new Date(year, month + 1, 0).getDate() }, (_, i) => {
                            let date = `${year}.${month + 1}.${i + 1}`
                            let point = Object.keys(eventsListData).some(i => {
                                let dateEVLS = String(eventsListData[i].EVENT_DATE)
                                let dateTD = handleDate(date, "system")
                                return dateEVLS === dateTD
                            })

                            return <CellDate
                                key={i}
                                event={point}
                                day={i + 1}
                                chosen={date === id}
                                active={date === getDateToday()}
                                fulldate={date}
                                dayOfWeek={getDayOfWeek(year, i + 2, month)}
                                weekends={getWeekends(year, i + 2, month)}
                            />
                        })}
                    </div>
                </div>
                <img className="btnArrow" onClick={handleNextClick} src={arrowNext} alt=""/>
            </div>
        </div>
    )
}
