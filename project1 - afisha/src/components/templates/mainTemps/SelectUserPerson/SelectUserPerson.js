import React from 'react'
import './SelectUserPerson.css'

import useGetUniversalData from '../../../../hooks/handleActionDB/RecieveDATA/useGetUniversalData'

export default function SelectUserPerson({ defValue, goal, data, func }) {

    const { universalData } = useGetUniversalData(data, "all")

    return (
        <div>
            <select className='select' id={data + "_ID"} defaultValue={defValue} onChange={func}>
                <option>{defValue}</option>
                {universalData && universalData.map((obj, i) => {
                    let val = data + "_" + goal,
                        id = data + "_ID", comp;
                    if (obj[data + "_" + goal]) return <option id={obj[id]} key={i}>{obj[val]} { }</option>
                    return comp;
                })}

            </select>
        </div>
    )
}
