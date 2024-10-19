import { useEffect, useState, useContext } from 'react'
import { StatusUserContext } from '../../../components/App/App'

import useHandleReqEvents from '../nativeDB/useHandleReqEvents'

export default function useGetEventsData(id) {

    const { status } = useContext(StatusUserContext)

    const handleReqEvents = useHandleReqEvents()
    const [eventsData, setEventsData] = useState({})

    useEffect(() => {
        if (id && status) {
            if (id === "all") handleReqEvents("getAll", setEventsData)
            else handleReqEvents("get", setEventsData, id)
        }
        // eslint-disable-next-line
    }, [id, status])

    return { eventsData }
}
