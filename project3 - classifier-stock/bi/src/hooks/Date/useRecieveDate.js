import { useState, useEffect } from 'react'

export default function useRecieveDate() {

    const [day, setDay] = useState()

    useEffect(() => {
        setDay(["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"][new Date().getDay()])
    }, [])

    return [day]
}

