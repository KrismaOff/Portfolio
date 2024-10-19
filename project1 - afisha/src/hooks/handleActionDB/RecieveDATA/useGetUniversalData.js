import { useEffect, useState, useContext } from 'react'
import { StatusUserContext } from '../../../components/App/App'

import useHandleReqEvents from '../nativeDB/useHandleReqEvents'
import useHandleReqEventsList from '../nativeDB/useHandleReqEventsList'
import useHandleReqEventPlaces from '../nativeDB/useHandleReqEventPlaces'
import useHandleReqAccessUser from '../nativeDB/useHandleReqAccessUser'
import useHandleReqUser from '../nativeDB/useHandleReqUser'
import useHandleReqTags from '../nativeDB/useHandleReqTags'
import useHandleReqCities from '../nativeDB/useHandleReqCities'

export default function useGetUniversalData(name, id) {

    const { status } = useContext(StatusUserContext)

    const handleReqEventPlaces = useHandleReqEventPlaces()
    const handleReqEventsList = useHandleReqEventsList()
    const handleAccessUser = useHandleReqAccessUser()
    const handleReqCities = useHandleReqCities()
    const handleReqEvents = useHandleReqEvents()
    const handleReqUser = useHandleReqUser()
    const handleReqTags = useHandleReqTags()

    const exeptions = (name, action, data, id) => {
        switch (name) {
            case "EVENT_LIST": handleReqEventsList(action, data, id); break;
            case "EVENT_PLACE": handleReqEventPlaces(action, data, id); break;
            case "ACCESS_USER": handleAccessUser(action, data, id); break;
            case "EVENT": handleReqEvents(action, data, id); break;
            case "USER": handleReqUser(action, data, id); break;
            case "TAG": handleReqTags(action, data, id); break;
            case "CITY": handleReqCities(action, data, id); break;
            default: break;
        }
    }

    const [universalData, setUniversalData] = useState()

    useEffect(() => {
        if (name && id && status) {
            if (id === "all") exeptions(name, "getAll", setUniversalData)
            else if (Array.isArray(id)) exeptions(name, "getKeys", setUniversalData, id)
            else exeptions(name, "get", setUniversalData, id)
        }
        // eslint-disable-next-line
    }, [name, id, status])

    return { universalData }
}
