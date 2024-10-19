import React from 'react'
import './InputPlace.css'

export default function InputPlace({ id, value, change, changeValCell, type="text" }) {

    return (
        <input
            type={type}
            placeholder='Введите значение'
            className='cellInputPlace'
            defaultValue={value}
            onBlur={e=>changeValCell(e.target.value, id)}
            onChange={e=>change(e.target.value)}
        />
    )
}
