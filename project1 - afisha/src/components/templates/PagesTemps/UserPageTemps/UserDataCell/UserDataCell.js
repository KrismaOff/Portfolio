import React from 'react'
import './UserDataCell.css'

export default function UserDataCell({ edit, func, title, id, data, admin }) {

    return (
        <div className='rowInfo'>
            <span className='titleInfo'>{title}</span>
            {edit || admin ? <input className='editVl' id={id} defaultValue={data} onChange={func} /> : <span>{data}</span>}
        </div>
    )
}
