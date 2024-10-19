import React from 'react'
import './CreateEvent.css'

import InputWithName from '../../../templates/PagesTemps/CreateEventTepms/InputWithName'
import SelectWithName from '../../../templates/PagesTemps/CreateEventTepms/SelectWithName/SelectWithName'
import EventScheduleCont from '../../../templates/PagesTemps/CreateEventTepms/EventScheduleCont/EventScheduleCont'

import useHandleCreateEventData from '../../../../hooks/CreateEventPage/useHandleCreateEventData'
import useSendData from '../../../../hooks/CreateEventPage/useSendData'

import useGetTagsData from '../../../../hooks/handleActionDB/RecieveDATA/useGetTagsData'
import useGetPlacesListData from '../../../../hooks/handleActionDB/RecieveDATA/useGetPlacesListData'
import useGetAccessUserData from '../../../../hooks/handleActionDB/RecieveDATA/useGetAccessUserData'


export default function CreateEvent({ eventsData }) {

  const { tagsData } = useGetTagsData("all")
  const { accessData } = useGetAccessUserData("all")
  const { eventPlacesData } = useGetPlacesListData("all")

  const [data, changeSimpInp, changeCompInp] = useHandleCreateEventData(eventsData, tagsData, eventPlacesData)
  const sendData = useSendData(eventsData)

  const InputsDetails = {
    EVENT_NAME: {
      value: eventsData?.EVENT_NAME,
      name: "Название",
      placeholder: "День открытых дверей",
      id: "EVENT_NAME",
      type: "text",
      maxLength: 55,
      minLength: 5
    },
    EVENT_DATE: {
      value: eventsData?.EVENT_DATE,
      name: "Дата",
      id: "EVENT_DATE",
      type: "date",
    },
    EVENT_TIME: {
      value: eventsData?.EVENT_TIME,
      name: "Время (начало - конец)",
      id: "EVENT_TIME",
      type: "time",
      count: 2
    },
    EVENT_DESCRIBE: {
      value: eventsData?.EVENT_DESCRIBE,
      name: "Описание",
      placeholder: "Выбираешь профессию? Интересуешься IT?...",
      id: "EVENT_DESCRIBE",
      type: "textarea",
      maxLength: 2500,
      minLength: 20
    },
    EVENT_DESCRIBE_MD: {
      value: eventsData?.EVENT_DESCRIBE_MD,
      name: "Описание - видят только модераторы (необязательно)",
      placeholder: "Тут может быть какая-то важная информация, заметка или что-то подобное...",
      id: "EVENT_DESCRIBE_MD",
      type: "textarea",
      // maxLength: 2500,
      // minLength: 20
    },
    EVENT_IMG: {
      value: eventsData?.EVENT_IMG,
      name: "Картинка (url)",
      placeholder: "https://cats.ru/wp-content/cats.jpg",
      id: "EVENT_IMG",
      type: "url",
    },
  }
  const SelectDetails = {
    ACCESS_USER_NAME: {
      valueID: eventsData?.ACCESS_USER_ID,
      id: "ACCESS_USER_ID",
      name: "Видимость события ",
      data: accessData
    },
    TAG_NAME: {
      valueID: eventsData?.TAG_ID,
      id: "TAG_ID",
      name: "Тег",
      data: tagsData
    },
    EVENT_PLACE_NAME: {
      valueID: eventsData?.EVENT_PLACE_ID,
      id: "EVENT_PLACE_ID",
      name: "Площадка",
      data: eventPlacesData
    },
  }

  const exeptionsEditers = eventsData && eventsData.EVENT_EDITERS && eventsData.EVENT_EDITERS.length !== 0

  return (
    <form>
      {eventsData && <div className='author'>Создал - {eventsData.USER_ID}</div>}
      {exeptionsEditers && <div className='author'>Редактировал(и) - {eventsData.EVENT_EDITERS.join(", ")}</div>}

      {Object.keys(InputsDetails).map(key => <InputWithName key={key} onChange={changeSimpInp} {...InputsDetails[key]} />)}
      {Object.keys(SelectDetails).map(key => <SelectWithName key={key} onChange={changeSimpInp} {...SelectDetails[key]} />)}

      {data.EVENT_PLACE_ID && <EventScheduleCont place={eventPlacesData} placeId={data.EVENT_PLACE_ID} onChange={changeCompInp} data={data?.EVENT_TABLE} />}
      <button onClick={() => sendData(data)} type="button" className='sendCreateBtn'>{eventsData ? "Изменить событие" : "Создать событие"}</button>
      {/* <button onClick={() => console.log(data)} type="button" className='sendCreateBtn'>data</button> */}
    </form>
  )
}
