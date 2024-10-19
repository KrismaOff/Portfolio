import React, { useState } from 'react'
import { ChromePicker } from 'react-color'
import './AddRowInputColor.css'

export default function AddRowInputColor({ rowId, placeholder, changeValueInput }) {

    const [color, setColor] = useState()

    const onChangeValue = (e) => {
        setColor(e)
        changeValueInput(prev => { return { ...prev, [rowId]: e } })
    }

    return (
        <div className='AddRowInputColorContainer'>

            <input
                className='addRowInput untouchable'
                defaultValue={color}
                placeholder={placeholder}
            />
            <div>
                <button onClick={() => onChangeValue("#FFFFFF")} className='btnWithoutColor'>Без цвета</button>
                <div className='colorBlock'>
                    <ChromePicker width="30%" color={color} onChangeComplete={(e) => onChangeValue(e.hex)} />
                </div>
            </div>
        </div>
    )
}
