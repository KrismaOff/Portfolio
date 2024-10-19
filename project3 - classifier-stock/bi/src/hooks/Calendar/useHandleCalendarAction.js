import { useEffect, useState } from 'react'
import { recieveDate } from '../../helper/makeDateForUserApi'; 

export default function useHandleCalendarAction(reportDate, switchCalendar) {

    const [date] = useState(new Date());
    const [reportDateUser, setReportDateUser] = useState()

    useEffect(() => {
        reportDate(recieveDate(date).dateForAPI)
        setReportDateUser(recieveDate(date).dateForUser)
    }, [date, reportDate])

    const changeDate = (e) => {
        reportDate(recieveDate(e).dateForAPI)
        setReportDateUser(recieveDate(e).dateForUser)
        switchCalendar()
    }

    return [date, reportDateUser, changeDate]

}
