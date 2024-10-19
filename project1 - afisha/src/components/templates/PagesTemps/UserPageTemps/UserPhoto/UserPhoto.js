import React from 'react'
import './UserPhoto.css'

import { checkUrl } from '../../../../../helper/checkUrl'

export default function UserPhoto({ photo, changeData, state }) {

    const changePhoto = (e) => {
        if (state) {
            let photo = prompt("Если хотите поменять аватарку, то вставьте ссылку на фотографию")
            if (photo && checkUrl(photo)) {
                changeData(null, "USER_PHOTO", photo)
                alert("Изменения войдут в силу при сохранение данных")
            } else {
                alert("Неверный формат")
            }
        }
    }

    return (
        <div>
            <div className='userTitle'>Профиль</div>
            <div onClick={changePhoto}>
                {photo ? <img src={photo} className={state ? "userPhoto borderPh" : "userPhoto"} alt="" /> : <div className={state ? "userPhotoNone borderPh" : "userPhotoNone"}>Нет фотографии</div>}
            </div>
        </div>
    )
}
