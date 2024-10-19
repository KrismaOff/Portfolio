import React from 'react'
import './CreateEventContPage.css'

import CreateEvent from '../CreateEvent/CreateEvent'

import useGetUserData from '../../../../hooks/handleActionDB/RecieveDATA/useGetUserData'

export default function CreateEventPage() {

  const { userData } = useGetUserData("ADMIN")

  return (
    <div className='createEventPage'>

      {userData && <div className='userDataCreate'>
        <div>Полное имя: {userData.USER_NAME.join(" ")}</div>
        <div>Роль:  {userData.ACCESS_USER_ID}</div>
      </div>}

      <CreateEvent/>
    </div>
  )
}
