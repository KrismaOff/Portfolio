import React, { useState, useEffect } from 'react'
import './EventSchedule.css'

import PartTableCreateEvent from '../PartTableCreateEvent/'
import GroupBtn from '../GroupBtn/GroupBtn'

export default function EventSchedule({ data, allPlace, onChange, idPlace, title }) {

    const [count, setCount] = useState(1)


    useEffect(() => { data && setCount(data.length) }, [data])

    return (
        <div className='EventScheduleCont' style={allPlace && { width: 33 + "%" }}>
            <div className='EventScheduleTitle'>{allPlace ? <span>{title}</span> : "Тайминги мероприятия"}</div>
            <div className='EventScheduleGroupBtn'>
                <GroupBtn
                    btn0="+"
                    btn1="-"
                    onChange={() => onChange("del", count, null, idPlace)}
                    setCount={setCount}
                    count={count} />
            </div>

            <div className='EventScheduleSpaceCont'>
                {Array.from({ length: count }, (_, i) => {
                    return <PartTableCreateEvent
                        key={i}
                        data={data?.length > i ? data[i] : undefined}
                        num={i + 1}
                        idPlace={idPlace}
                        onChange={onChange}
                        width={allPlace ? 100 : 30}
                    />
                }
                )}
            </div>

        </div>
    )
}
