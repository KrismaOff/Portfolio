import React from 'react'
import './UserAct.css'

export default function UserAct({ act, id, title, img, func }) {
    return (
        <div className={act === id ? "userActTitleActive" : "userActTitle"} onClick={()=> func(id)}>
            <img className='iconAct' src={img} alt='' />
            <div className='iconTitleAct'>{title}</div>
        </div>
    )
}
