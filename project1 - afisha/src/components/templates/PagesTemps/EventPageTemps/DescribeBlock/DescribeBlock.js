import React, { useState } from 'react'
import './DescribeBlock.css'

import { handleTextDesc } from '../../../../../helper/handleTextDesc'

export default function DescribeBlock({ describe }) {

    const [stateText, setStateText] = useState(false)

    return (
        <div className='eventDesc'>
            {!stateText && handleTextDesc(describe) && <div className='eventDescRow'>{handleTextDesc(describe)[0]}</div>}
            {stateText && handleTextDesc(describe) && handleTextDesc(describe).map((v, i) => <div className='eventDescRow' key={i}>{v}</div>)}

            {handleTextDesc(describe).length !== 1 &&
                <div className='eventDescBtn' onClick={() => {
                    if (stateText) setStateText(false)
                    else setStateText(true)
                }}>{stateText ? "Свернуть" : "Читать дальше"}</div>}
        </div>
    )
}
