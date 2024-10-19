import { useState, useEffect } from 'react'
import { days } from '../helper/differentData'

export default function useRecieveDate() {

    const [day, setDay] = useState()

    useEffect(() => {
        setDay(days[new Date().getDay()])
    }, [])

    return [day]
}

