import React, { useState } from 'react'
import './ReplenishmentDB.css'

import TableFiles from '../TableFiles'

import useRecieveDataCountFiles from '../../../../hooks/Recieve_API/useRecieveDataCountFiles'
import useRecieveDataFiles from '../../../../hooks/Recieve_API/useRecieveDataFiles'
import CalendarTemp from '../../OutputOfReportsPage/CalendarTemp'

export default function ReplenishmentDB() {

  const [stateOfCheking, setStateOfCheking] = useState(false)

  const countOfFiles = useRecieveDataCountFiles()
  const [date, setDate] = useState()
  const [recieveFiles, foundFiles, notFoundFiles, prevDate] = useRecieveDataFiles(setStateOfCheking)

  return (
    <div className='replenishmentDB'>

      {!stateOfCheking &&
        <div>
          <CalendarTemp text="Данные будут загружены в базу данных с датой загрузки" reportDate={setDate}/>
          <p>Предварительное чтение файлов из каталога</p>
          <p>Обнаружено файлов в каталоге: {countOfFiles}</p>
          <button className='checkData' onClick={() => { if (countOfFiles) recieveFiles(date); }}>Проверить данные</button>
        </div>
      }

      {stateOfCheking && <TableFiles
        date={date}
        prevDate={prevDate}
        foundFiles={foundFiles}
        notFoundFiles={notFoundFiles}
      />}

    </div>
  )
}
