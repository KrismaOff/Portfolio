import { useState, useEffect } from 'react'

export default function useTimeOut(time, condition) {

    const [state, setState] = useState(false)

    useEffect(() => {
        if (condition) setTimeout(() => setState(true), time)
    }, [time, condition])

    return [state, setState]

}
