import { useEffect, useState, useContext } from 'react'
import { StatusUserContext } from '../../../components/App/App'

import useHandleReqUser from '../nativeDB/useHandleReqUser'

export default function useGetUserData(id) {

    const { status } = useContext(StatusUserContext)

    const handleReqUser = useHandleReqUser()
    const [userData, setUserData] = useState()

    useEffect(() => {
        if (id && status) {
            if (id === "all") handleReqUser("getAll", setUserData)
            else if (Array.isArray(id)) handleReqUser("getKeys", setUserData, id)
            else handleReqUser("get", setUserData, id)
        }
        // eslint-disable-next-line
    }, [id, status])

    return { userData }
}
