import React from 'react'
import "./ColorPalette.css"

import { ChromePicker } from 'react-color'

export default function ColorPalette({ color, setColor, templateToAdd, setTemplateToAdd, rowId, onChangeValue }) {

    const onChangeColor = () => {
        setColor("#FFFFFF")
        setTemplateToAdd({ ...templateToAdd, [rowId]: "#FFFFFF" })
    }

    return (
        <div>
            <button onClick={onChangeColor} className='btnWithoutColor'>Без цвета</button>
            <div className='colorBlock' >
                <ChromePicker color={color} onChangeComplete={onChangeValue} />
            </div>
        </div>
    )
}
