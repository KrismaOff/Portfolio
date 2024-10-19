import React from 'react'
import './AddRowInput.css'

export default function AddRowInput({ rowId, value, placeholder, changeValueInput, type}) {
    return (
        <div className='addRowCont'>
            <input
                type={type ? type : ""}
                className='addRowInput'
                defaultValue={value}
                placeholder={placeholder}
                onChange={(e) => changeValueInput(prev => { return { ...prev, [rowId]: e.target.value } })}
            />
        </div>
    )
}
