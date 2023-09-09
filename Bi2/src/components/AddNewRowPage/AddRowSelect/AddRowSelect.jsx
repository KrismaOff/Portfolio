import React from 'react'
import './AddRowSelect.css'

export default function AddRowSelect({ rowId, value, placeholder, catchClassifierData, changeValueInput, toggleList, toggleListId, firstInputId, addOpenClassifier, touch }) {

    const onChangeValue = (e) => {
        if (rowId.replace("cl_actives", "") === "ACTIVEEDI" && firstInputId !== rowId) catchClassifierData(e.target.value)
        else changeValueInput(prev => { return { ...prev, [rowId]: e.target.value } })
    }

    return (
        <div className='addRowSelectContainer'>
            <select className={touch ? "addRowSelect touchable" : "addRowSelect untouchable"} onChange={onChangeValue}>
                <option hidden>{!value ? placeholder : value}</option>
                {toggleList && Object.keys(toggleList).map(key => {
                    return <option key={key + rowId} >{toggleList[key]}</option>
                })}
            </select>
            <div
                className={touch ? "addClassifier touchable" : "addClassifier untouchable"}
                onClick={() => addOpenClassifier(toggleListId)}>+
            </div>
        </div>
    )
}
