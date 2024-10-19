import React, { useContext } from 'react'
import './UserProfile.css'

import useRedirect from '../../../../../hooks/mainHooks/useRedirect'

import UserCaruselEventBlock from '../UserCaruselEventBlock'
import UserInfoBlock from '../UserInfoBlock'
import UserOpportBlock from '../UserOpportBlock'

import useGetUserData from '../../../../../hooks/handleActionDB/RecieveDATA/useGetUserData'
import useGetAccessUserData from '../../../../../hooks/handleActionDB/RecieveDATA/useGetAccessUserData'

import { StatusUserContext } from '../../../../App/App'

export default function UserProfile() {

    const { user } = useContext(StatusUserContext)
    const { userData } = useGetUserData(user)
    const { accessData } = useGetAccessUserData(userData && userData.ACCESS_USER_ID)

    useRedirect(!user, "/User/SignUp")

    return (
        <div className='userProfileCont'>
            <UserInfoBlock userData={userData} accessData={accessData}/>
            <UserOpportBlock userData={userData}/>
            <UserCaruselEventBlock events={userData?.USER_PICKED} />
        </div>
    )
}
