import React, { useState } from 'react'
import './UserCaruselEventBlock.css'


import format from '../../../../../assets/img/IconEvent/format.svg'
import calendar from '../../../../../assets/img/IconEvent/calendar.svg'

import UserCarusel from '../UserCarusel/UserCarusel'

export default function UserCaruselEventBlock({ events }) {

  const exeptions = {
    formatDate: ["Все события без сортировки", "Сортировка от нового к старому", "Сортировка от старого к новому"],
    formatSpace: ["Классическое расположение", "На весь экран", "Книжное расположение"]
  }

  const [formatSpace, setFormatSpace] = useState(0)
  const [formatDate, setFormatDate] = useState(0)

  const editFormatSpace = () => {

    for (let i = 0; i < 3; i++)
      switch (formatSpace) {
        case 0: setFormatSpace(1); break;
        case 1: setFormatSpace(2); break;
        case 2: setFormatSpace(0); break;
        default: break;
      }
  }
  const editFormatDate = () => {
    for (let i = 0; i < 3; i++)
      switch (formatDate) {
        case 0: setFormatDate(1); break;
        case 1: setFormatDate(2); break;
        case 2: setFormatDate(0); break;
        default: break;
      }
  }

  return (
    <div>
      <div className='imgFormatCont'>
        <div className='btnsImgFormat'><img onClick={editFormatDate} className='imgFormat' src={calendar} width="50px" alt='' />
          <span className='hidden'>{exeptions.formatDate[formatDate]}</span>
          <img onClick={editFormatSpace} className='imgFormat' src={format} width="50px" alt='' />
          <span className='hidden'>{exeptions.formatSpace[formatSpace]}</span></div>
        <div className='titleFormat'>Избранные события</div>
      </div>

      <UserCarusel events={events} formatSpace={formatSpace} formatDate={formatDate} />

    </div>
  )
}
