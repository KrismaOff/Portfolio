import React from 'react'
import './ToggleList.css'

export default function ToggleList({ changeValCell, val, id, list }) {

    return (
        <select className='toggleList' onChange={(e) => changeValCell(e.target.value, id)}>
            <option>{val}</option>
            {list.map(val => <option className='toggleListOpt' key={id + val}> {val}</option>)}
        </select>
    )
}
