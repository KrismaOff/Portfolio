import { useEffect, useState, useContext } from 'react'
import { StatusUserContext } from '../../../components/App/App'

import useHandleReqEventsList from '../nativeDB/useHandleReqEventsList'

export default function useGetEventsListData(id) {

    const { status } = useContext(StatusUserContext)

    const handleReqEventsList = useHandleReqEventsList()
    const [eventsListData, setEventsListData] = useState({})

    useEffect(() => {
        if (id && status) {
            if (id === "all") handleReqEventsList("getAll", setEventsListData)
            else if (typeof id === "object") handleReqEventsList("getKeys", setEventsListData, id)
            else handleReqEventsList("get", setEventsListData, id)
        }
        // eslint-disable-next-line
    }, [id, status])    

    return { eventsListData }
}
