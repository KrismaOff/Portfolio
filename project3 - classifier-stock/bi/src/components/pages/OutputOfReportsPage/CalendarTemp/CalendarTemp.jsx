import React from 'react'
import "./CalendarTemp.css"
import 'react-calendar/dist/Calendar.css';

import Calendar from 'react-calendar'

import useHandleCalendarAction from '../../../../hooks/Calendar/useHandleCalendarAction';
import useSwitchCalendarState from '../../../../hooks/Calendar/useSwitchCalendarState';

export default function CalendarTemp({ text="Выбор даты", reportDate }) {

    const [calendarState, switchCalendar] = useSwitchCalendarState()
    const [date, reportDateUser, changeDate] = useHandleCalendarAction(reportDate, switchCalendar)

    return (
        <div className='calendarTemp'>
            <div className='dateUser'>
                <div className='dateChose'>{text}:&nbsp;</div>
                <div className='dateWindow' onClick={switchCalendar}>{reportDateUser}</div>
            </div>

            {calendarState &&
                <div className='calendarContainer'>
                    <Calendar
                        onChange={changeDate}
                        value={date}
                        minDetail='year'
                        calendarType="ISO 8601"
                    />
                </div>
            }
        </div>
    )
}

