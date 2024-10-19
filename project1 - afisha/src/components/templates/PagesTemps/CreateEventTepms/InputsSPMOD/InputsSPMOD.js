import React, { useState, useEffect } from 'react'
import './InputsSPMOD.css'

import GroupBtn from '../GroupBtn'

export default function InputsSPMOD({data, place, num, onChange, id, placeholder, title}) {

    const [count, setCount] = useState(1)

    useEffect(() => {
        if (data && data[id]) setCount(data[id].length)
    }, [id, data])

    return (
        <div>
            <div className='titleInp'>{title}</div>
            {Array.from({ length: count }, (_, i) => <input
                key={i}
                defaultValue={data && data[id] ? data[id][i] : ""}
                id={id}
                onBlur={e => onChange(e, num, i, place)}
                className='tableSpeakerInp'
                autoComplete="off"
                placeholder={placeholder} />
            )}

            <GroupBtn
                btn0="+"
                btn1="-"
                onChange={() => onChange("del", num, count, place, id)}
                setCount={setCount}
                count={count} />
        </div>
    )
}
