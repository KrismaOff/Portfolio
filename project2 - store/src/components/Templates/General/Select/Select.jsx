import React from 'react'
import './Select.css'

export default function Select({ title, data, func }) {

    // const selectData = [
    //     { id: "1id", value: "42 ru/10 US" }, 
    //     { id: "2id", value: "42 ru/10 US" }, 
    //     { id: "3id", value: "42 ru/10 US" },
    //     { id: "4id", value: "42 ru/10 US" },
    //     { id: "5id", value: "42 ru/10 US" },
    //   ]

    const choseOption = (e) => func(e.target[e.target.selectedIndex].id)

    return (
        <select className='select' onClick={choseOption}>
            {data.map(obj => <option id={obj.id} key={obj.id}>{obj.value}</option>)}
        </select>
    )
}
