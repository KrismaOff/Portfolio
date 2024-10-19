import React from 'react'
import './UserDataCont.css'

import UserDataCell from '../UserDataCell/UserDataCell'

export default function UserDataCont({ userData, accessData, changeData, state }) {

    return (
        <div className='userInfo'>
            <div className='infoUserCont'>
                <UserDataCell edit={state} func={changeData} title="Полное имя" id="USER_NAME" data={userData?.USER_NAME.join(" ")} />
                <UserDataCell admin={userData?.ACCESS_USER_ID === "ADMIN" && state} func={changeData} title="Почта" id="USER_EMAIL" data={userData?.USER_EMAIL} />
                <UserDataCell edit={state} func={changeData} title="Телефон" id="USER_PHONE" data={userData?.USER_PHONE} />
            </div>

            <div className='infoUserCont'>
                <UserDataCell title="Роль" data={accessData?.ACCESS_USER_NAME} />
                {/* <UserDataCell title="Роль" data={accessData?.ACCESS_USER_NAME} /> */}
                {/* <UserDataCell title="Группа" data={userData && userData.USER_GROUP} /> */}
                {/* <UserDataCell title="Права админа" data={userData && userData.ADMIN ? "Есть" : "Нет"} /> */}
            </div>
        </div>
    )
}
