import React, { useState } from 'react'
import ColorPalette from '../ColorPalette'

import "./InputToggle.css"

export default function InputToggle({ catchClassifierData, addOpenClassifier, toggleListId, placeholder, rowId, value, templateToAdd, setTemplateToAdd, toggleList, touch, firstNameRow }) {

  const [color, setColor] = useState()

  const onChangeValue = (e) => {
    if (rowId === "COLOR") {
      setColor(e.hex)
      setTemplateToAdd({ ...templateToAdd, [rowId]: e.hex })
    } else if (rowId === "ACTIVEEDI" && firstNameRow !== rowId) catchClassifierData(e.target.value)
    else setTemplateToAdd({ ...templateToAdd, [rowId]: e.target.value })
  }

  return (
    <div>
      <div className='toggleListCont'>
        {!toggleList || firstNameRow === rowId ?
          <input
            className={rowId === "COLOR" ? "inputAddRow untouchable" : "inputAddRow"}
            defaultValue={value}
            placeholder={placeholder}
            onChange={onChangeValue}
          />
          :
          <select className={touch ? "selectList touchable" : "selectList untouchable"} onChange={onChangeValue}>
            <option hidden>{!value ? placeholder : value}</option>
            {Object.keys(toggleList).map(key => {
              return <option key={key + rowId} >{toggleList[key]}</option>
            })}
          </select>
        }
        <div className={touch && toggleList && firstNameRow !== rowId ? "addClassifier" : "addClassifierUnTouchable"} onClick={() => addOpenClassifier(toggleListId)}>+</div>
      </div>

      {rowId === "COLOR" && <ColorPalette
        color={color}
        setColor={setColor}
        templateToAdd={templateToAdd}
        setTemplateToAdd={setTemplateToAdd}
        rowId={rowId}
        onChangeValue={onChangeValue} />}
    </div>
  )
}
