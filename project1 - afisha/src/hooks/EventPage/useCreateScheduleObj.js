import { useEffect, useState } from 'react'

export default function useCreateScheduleObj(table) {

    const [scheduleData, setScheduleData] = useState()

    useEffect(() => {
        let obj = {}

        if (table) {
            Object.keys(table).forEach(key => {
                obj[key] = []

                table[key].map((val) => {
                    const exception = { ...val }
                    if (Object.keys(table).length !== 1) {
                        exception["place"] = key
                    }
                    return obj[key].push(exception)
                })
            })
        }
        setScheduleData(obj)
    }, [table])

    return { scheduleData }
}