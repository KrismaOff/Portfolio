import { useEffect, useState, useContext } from 'react'
import { StatusUserContext } from '../../../components/App/App'

import useHandleReqAccessUser from '../nativeDB/useHandleReqAccessUser'

export default function useGetAccessUserData(id) {

    const { status } = useContext(StatusUserContext)

    const handleAccessUser = useHandleReqAccessUser()
    const [accessData, setAccessData] = useState({})

    useEffect(() => {
        if (id && status) {
            if (id === "all") handleAccessUser("getAll", setAccessData)
            else handleAccessUser("get", setAccessData, id)
        }
        // eslint-disable-next-line
    }, [id, status])

    return { accessData }
}
