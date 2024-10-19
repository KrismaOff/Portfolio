import { useState } from 'react'

export default function useSwitchCalendarState() {
    const [calendarState, setCalendarState] = useState(false)
    const switchCalendar = () => {
        if (calendarState) setCalendarState(false)
        else setCalendarState(true)
    }
    return [calendarState, switchCalendar]
}
