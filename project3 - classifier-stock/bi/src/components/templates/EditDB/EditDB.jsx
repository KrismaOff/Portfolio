import axios from 'axios'
import React, { useState } from 'react'
import CalendarTemp from '../../OutputOfReports/CalendarTemp'
import './EditDB.css'

import { url } from '../../../globalvVariable'

export default function EditDB() {
    const [date, setDate] = useState()

    const handleButton = async () => {
        if (window.confirm("Точно хотите удалить?")) {
            await axios
                .post(`${url}/writer/packDel`, {"crdate":date})
                .then(({ data }) => {
                    if (data.result) alert("Данные были успешно удалены")
                })
                .catch(err => alert("Произошла ошибка удаления данных: " + err))
        }
    }


    return (
        <div className='editDB'>
            <CalendarTemp reportDate={setDate} />
            <button onClick={handleButton}>Удалить</button>
            <p>Удаление загруженной информации из БД за указанный день загрузки.</p>
        </div>
    )
}
