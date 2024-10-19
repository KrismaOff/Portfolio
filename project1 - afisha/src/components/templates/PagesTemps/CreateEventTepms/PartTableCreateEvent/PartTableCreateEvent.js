import React from 'react'
import './PartTableCreateEvent.css'

import InputsSPMOD from '../InputsSPMOD/InputsSPMOD'
import InputWithName from '../InputWithName'

export default function PartTableCreateEvent({ data, num, idPlace, onChange, width }) {

    const exception = {
        one: data?.TIME ? data.TIME[0] : "",
        two: data?.TIME ? data.TIME[1] : ""
    }

    return (
        <div className='tableContPart' style={width && { width: width + "%" }}>
            <div className='tableContNum'>{num}</div>

            <InputWithName
                value={data?.STAGE}
                id="STAGE"
                name="Этап (необязательно)"
                placeholder="Начало события"
                onChange={e => onChange(e, num, null, idPlace)}
            />
            <InputWithName
                value={data?.SPACE}
                id="SPACE"
                name="Место (необязательно)"
                placeholder="214 аудитория"
                onChange={e => onChange(e, num, null, idPlace)}
            />

            <div className='tableSpeaker'>
                <InputsSPMOD data={data} place={idPlace} num={num} onChange={onChange} id="SPEAKERS" placeholder="Иванов И.И." title="Спикеры (необязательно)" />
                <InputsSPMOD data={data} place={idPlace} num={num} onChange={onChange} id="MODERATORS" placeholder="Иванов И.И." title="Модераторы (необязательно)" />
            </div>

            <div className='titleInp'>Время (от - до) (необязательно)</div>

            <div className='timeGroup'>
                <input
                    type="time"
                    defaultValue={exception.one}
                    onBlur={e => onChange(e, num, 0, idPlace)}
                    id="TIME"
                    className='tableTimeInp' />
                <input
                    type="time"
                    defaultValue={exception.two}
                    onBlur={e => onChange(e, num, 1, idPlace)}
                    id="TIME"
                    className='tableTimeInp' />
            </div>



        </div>
    )
}
