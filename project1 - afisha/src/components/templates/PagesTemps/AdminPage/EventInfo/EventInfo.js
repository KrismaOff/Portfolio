import React from 'react'
import './EventInfo.css'

import { useLoaderData } from 'react-router';
import useGetUniversalData from '../../../../../hooks/handleActionDB/RecieveDATA/useGetUniversalData';

import { getExpectationDate } from '../../../../../helper/HandleDate/getExpectationDate';

import EventUserInfo from '../EventUserInfo/EventUserInfo';

export default function EventInfo() {

  const [, id] = useLoaderData()
  const { universalData } = useGetUniversalData("EVENT", id)

  const exeptions = {
    tbodySimp: [
      { "Дни": <>{getExpectationDate(universalData?.EVENT_DATE)}</> },
      { "ID": universalData?.EVENT_ID },
      { "Название": universalData?.EVENT_NAME },
      { "Дата": universalData?.EVENT_DATE },
      { "Время": universalData?.EVENT_TIME.join(" - ") },
      { "Спикеры": universalData?.EVENT_SPEAKERS.join(", ") },
      { "Модераторы": universalData?.EVENT_MODERATORS.join(" , ") },
      { "Описание модераторов": universalData?.EVENT_DESCRIBE_MD, edit: true },
    ],
    tbodyDiff: [
      { title: "Записалось", name: "USER", data: universalData?.EVENT_USERS_PICKED, rows: ["NAME", "EMAIL", "PHONE"] },
      { title: "Редактировали", name: "USER", data: universalData?.EVENT_EDITERS, rows: ["NAME", "EMAIL"] },
      { title: "Автор", name: "USER", data: [universalData?.USER_ID], rows: ["NAME", "EMAIL"] },
      { title: "Тег", name: "TAG", data: [universalData?.TAG_ID], rows: ["ID", "NAME"] },
    ],
  }

  return (
    <div className='eventInfo'>
      <div className='eventInfoCont'>
        <table className='eventInfoTable'>
          <tbody>
            {exeptions.tbodySimp.map((val, i) => {
              let value = Object.values(val).at(0);
              return <tr key={i}>
                <th>{Object.keys(val).at(0)}</th>
                <th>{universalData && value.length !== 0 ? value : "-"}</th>
              </tr>
            })}
            {exeptions.tbodyDiff.map((val, i) => <EventUserInfo key={i} {...val} />)}
          </tbody>
        </table>
      </div>
    </div>
  )
}
