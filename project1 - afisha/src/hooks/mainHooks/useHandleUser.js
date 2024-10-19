import { useEffect, useState } from 'react'

import useHandleReqUser from '../handleActionDB/nativeDB/useHandleReqUser'

export default function useHandleUser(id) {

    const [userData, setUserData] = useState()

    const handleReqUser = useHandleReqUser()

    const recieveUserInfo = (obj) => {
        if (obj) {
            let access = obj.ACCESS_USER_ID
            let object = {
                user: obj.USER_ID,
                access: access,
                admin: access === "ADMIN",
                org: access === "ORGANIZER" || access === "ADMIN"
            }
            setUserData(object)
        }
    }
    
    useEffect(() => {
        if (localStorage.getItem("userId") && !id) handleReqUser("get", recieveUserInfo, localStorage.getItem("userId"))
        else id && handleReqUser("get", recieveUserInfo, id)
        // eslint-disable-next-line
    }, [id])


    return { userData }
}
