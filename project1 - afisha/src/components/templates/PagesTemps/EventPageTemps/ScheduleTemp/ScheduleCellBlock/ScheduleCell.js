import React from 'react'
import './ScheduleCell.css'

export default function ScheduleCell({ SPACE, SPEAKERS, MODERATORS, TIME, STAGE }) {

  const isEmpty = tab => !tab || tab?.length === 0 || tab?.join()?.length === 0
  


  return (
    <div className='scheduleCellCont'>
      <ul>
        <li>Этап: {STAGE ? <span className='whTime'>Нет этапа</span> : STAGE}</li>
        <li>Пространство: {SPACE ? <span className='whTime'>Нет пространства</span> : <span>{SPACE}</span>}</li>
        <li>Спикеры: {isEmpty(SPEAKERS) ? <span className='whTime'>Нет спикеров</span> : SPEAKERS.join(", ")}</li>
        <li>Модераторы: {isEmpty(MODERATORS) ? <span className='whTime'>Нет модераторов</span> : MODERATORS.join(", ")}</li>
        <li>Время: {isEmpty(TIME) ? <span className='whTime'>Нет точного времени</span> : <span>{TIME.join("-")}</span>}</li>
      </ul>
    </div>
  )
}
