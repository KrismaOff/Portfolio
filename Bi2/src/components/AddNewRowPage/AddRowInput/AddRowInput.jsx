import React from 'react'
import './AddRowInput.css'

export default function AddRowInput({ rowId, value, placeholder, changeValueInput }) {
    return (
        <input
            className='addRowInput'
            defaultValue={value}
            placeholder={placeholder}
            onChange={(e)=>changeValueInput(prev => { return { ...prev, [rowId]: e.target.value } })}
        />
    )
}
