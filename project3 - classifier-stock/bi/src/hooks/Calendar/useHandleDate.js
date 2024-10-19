import { useEffect, useState } from 'react'
import { months } from '../../helper/differentData';

export default function useHandleDate(reportDate, switchCalendar) {

    const [date] = useState(new Date());
    const [reportDateUser, setReportDateUser] = useState()

    const dateHandle = (e) => {
        let daterFormate = e.toDateString().split(' ')
        let dateForAPI = `${daterFormate[3]}-${months.indexOf(daterFormate[1])}-${daterFormate[2]}`
        let dateForUser = `${daterFormate[2]}.${months.indexOf(daterFormate[1])}.${daterFormate[3]}`

        return { dateForAPI, dateForUser }
    }
    const changeDate = (e) => {
        reportDate(dateHandle(e).dateForAPI)
        setReportDateUser(dateHandle(e).dateForUser)
        switchCalendar()
    }

    useEffect(() => {
        reportDate(dateHandle(date).dateForAPI)
        setReportDateUser(dateHandle(date).dateForUser)
    }, [date, reportDate])

    return [date, reportDateUser, changeDate]

}
