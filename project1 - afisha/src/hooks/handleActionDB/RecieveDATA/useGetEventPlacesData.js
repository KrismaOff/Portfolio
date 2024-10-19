import { useEffect, useState, useContext } from 'react'
import { StatusUserContext } from '../../../components/App/App'

import useHandleReqEventPlaces from '../nativeDB/useHandleReqEventPlaces'

export default function useGetEventPlacesData(id) {

    const { status } = useContext(StatusUserContext)

    const handleReqEventPlaces = useHandleReqEventPlaces()
    const [eventPlacesData, setEventPlacesData] = useState({})

    useEffect(() => {
        if (id && status) {
            if (id === "all") handleReqEventPlaces("getAll", setEventPlacesData)
            else handleReqEventPlaces("get", setEventPlacesData, id)
        }
        // eslint-disable-next-line
    }, [id, status])

    return { eventPlacesData }
}
