import React from 'react'
import './ToggleList.css'

export default function ToggleList({ changeValCell, val, id, list }) {

    return (
        <select className='toggleList' onChange={(e) => changeValCell(e.target.value, id)}>
            <option>{val}</option>
            {list.map((val, i) => <option className='toggleListOpt' key={id + i}> {val}</option>)}
        </select>
    )
}
