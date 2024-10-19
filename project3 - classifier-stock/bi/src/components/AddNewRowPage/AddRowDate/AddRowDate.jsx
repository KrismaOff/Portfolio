import React from 'react'
import './AddRowDate.css'

export default function AddRowDate({ rowId, value, placeholder, changeValueInput }) {
    return (
        <div className='addRowCont addRowContDate'>
            <div className='addRowDate addRowDatePlaceholder'>{placeholder}</div>
            <input
                type='date'
                className='addRowDate'
                defaultValue={value}
                onChange={(e) => changeValueInput(prev => { return { ...prev, [rowId]: e.target.value } })}
            />
        </div>
    )
}
