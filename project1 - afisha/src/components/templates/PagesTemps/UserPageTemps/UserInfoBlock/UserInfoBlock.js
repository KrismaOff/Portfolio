import React, { useState } from 'react'
import './UserInfoBlock.css'

import UserPhoto from '../UserPhoto/UserPhoto'
import UserDataCont from '../UserDataCont/UserDataCont'
import IconEdit from '../../../mainTemps/IconEdit'

import useHandleReqUser from '../../../../../hooks/handleActionDB/nativeDB/useHandleReqUser'

export default function UserInfoBlock({ userData, accessData }) {

    const handleReqUser = useHandleReqUser()

    const [data, setData] = useState()
    const [state, setState] = useState(false)

    const changeData = (e, id, data) => {
        if (e) setData(prev => { return { ...prev, [e.target.id]: e.target.value.split(" ").length !== 1 ? e.target.value.split(" ") : e.target.value } })
        else setData(prev => { return { ...prev, [id]: data } })
    }

    const saveData = () => {
        if (!data) alert("Вы не сделали никаких изменений")
        else if (window.confirm("Сохранить данные?")) handleReqUser("edit", data, userData.USER_ID)
    }

    return (
        <div>
            <div className='userInfoIcons'>
                <IconEdit state={state} setState={setState} icon="edit" />
                <IconEdit func={() => { localStorage.clear(); window.location.reload() }} icon="exit" />
            </div>
            <div className='userPageCont'>
                <UserPhoto photo={userData?.USER_PHOTO} changeData={changeData} state={state} />
                <UserDataCont userData={userData} accessData={accessData} changeData={changeData} state={state} />
            </div>
            {state && <button className='saveBtn' onClick={saveData}>Сохранить</button>}
        </div>
    )
}
