import React, { useState, useContext } from 'react'
import './EventTable.css'

import EventTableBody from '../EventTableBody/EventTableBody'
import SelectCellWithKey from "../SelectCellWithKey"
import { StatusUserContext } from '../../../../App/App'

export default function EventTabel({ action }) {

    const { admin } = useContext(StatusUserContext)

    const [formatTb, setFormatTb] = useState()
    const [formatDate, setFormatDate] = useState()
    const [search, setSearch] = useState()

    const changeFilter = e => {
        if (e.target.id === "DATE") setFormatDate(e.target[e.target.selectedIndex].id)
        else setFormatTb({ [e.target.id]: e.target[e.target.selectedIndex].id })
    }

    const tabelData = {
        EVENT_LIST: [
            { name: "", str: "COUNT" },
            { name: "ID", str: "EVENT_ID" },
            { name: "Название", str: "EVENT_NAME" },
            { name: "Дата", str: "EVENT_DATE", id: "DATE", func: changeFilter, format: formatDate, options: { up: "по возрастанию", down: "по убыванию" } },
            { name: "Время", str: "EVENT_TIME" },
            { name: "Автор", str: "USER_ID", id: "USER", func: changeFilter, format: formatTb },
            { name: "Площадка", str: "EVENT_PLACE_ID", id: "EVENT_PLACE", func: changeFilter, format: formatTb }, //
            { name: "Статус", str: "ACCESS_USER_ID", id: "ACCESS_USER", func: changeFilter, format: formatTb },
            { name: "Тег", str: "TAG_ID", id: "TAG", func: changeFilter, format: formatTb },
        ],
        USER: [
            { name: "", str: "COUNT" },
            { name: "ID", str: "USER_ID" },
            { name: "Полное имя", str: "USER_NAME" },
            { name: "Почта", str: "USER_EMAIL" },
            { name: "Телефон", str: "USER_PHONE" },
            { name: "Роль", str: "ACCESS_USER_ID", id: "ACCESS_USER", func: changeFilter, format: formatTb },
            admin && { name: "Пароль", str: "USER_PASSWORD" },
        ],
    }

    return (
        <div>
            <button className='btnEditAd' onClick={() => { setFormatTb(); setFormatDate(); }}>Сбросить фильтр</button>
            <input className='searchDB' onChange={(e) => setSearch(e.target.value)} placeholder='Поиск по базе данных'></input>
            <table className='editEventTable'>
                <thead>
                    <tr>
                        {Object.keys(tabelData[action]).map(val => {
                            let obj = tabelData[action][val], comp;
                            if (obj.id) comp = <SelectCellWithKey key={val} {...obj} />
                            else comp = <th key={val}>{obj.name}</th>
                            return comp;
                        })}
                        <th colSpan={100}>Взаимодействие</th>
                    </tr>
                </thead>
                <EventTableBody data={tabelData[action]} format={formatTb} formatDate={formatDate} id={action} search={search}/>
            </table>
        </div>
    )
}
