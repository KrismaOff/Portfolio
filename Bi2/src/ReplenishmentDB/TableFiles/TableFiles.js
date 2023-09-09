import React from 'react'
import { useState } from 'react'
import './TableFiles.css'

// import { recieveLastWorkDate } from '../../../helper/makeDateForUserApi'
import ReportsTabel from '../../OutputOfReports/ReportsTabel/ReportsTabel'

import useSendSoglHandleData from '../../../hooks/ReplenishmentDB/useSendSoglHandleData'

import { handleDateForUser } from '../../../helper/handleDateForUser'

export default function TableFiles({ date, prevDate, foundFiles, notFoundFiles: { List, RecordExists } }) {

    const [selectedSogl, setSelectedSogl] = useState({})
    const sendSoglHandleData = useSendSoglHandleData(selectedSogl, date)

    const exceptions = {
        not_found_list: Object.entries(List).length !== 0,
        not_found_record: Object.entries(RecordExists).length !== 0
    }

    // console.log(handleDateForUser("2023-02-01"));

    return (
        <div>
            <p className='titleFoundFiles'>В процессе сканирования обнаружены следующие счета:</p>
            <ReportsTabel foundFiles={foundFiles} />

            {exceptions.not_found_list && <div>
                <p className='titleFoundFiles notFound'>В процессе сканирования не обнаружены следующие счета:</p>
                <ReportsTabel foundFiles={List} />
            </div>}

            {exceptions.not_found_record && <div>
                <p className='titleFoundFiles'>НЕ ОБНАРУЖЕНЫ ДАННЫЕ</p>
                <p className='titleFoundFiles'>ВЫБЕРИТЕ СЧЕТА, ПО КОТОРЫМ ПЕРЕЗАПИСАТЬ ДАННЫЕ ЗА ПРОШЛЫЙ ДЕНЬ: {handleDateForUser(prevDate)}</p>
                <ReportsTabel foundFiles={RecordExists} checkBox={(e, id, state) => {
                    setSelectedSogl(prev => { return { ...prev, [id]: state } })
                }} />
            </div>}

            <button className='btnSendData' onClick={sendSoglHandleData}>Пополнить БД</button>
        </div>
    )
}
