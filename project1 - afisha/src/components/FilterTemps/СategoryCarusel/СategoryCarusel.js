import React, { useContext, useState } from 'react'
import './СategoryCarusel.css'

import CardCategory from '../../CardTemps/CardCategory'
import FilterSelect from '../FilterSelect/FilterSelect'

import { StatusUserContext } from '../../App/App'

export default function СategoryCarusel() {

  const { org } = useContext(StatusUserContext)

  const [actBtn, setActButton] = useState()

  const exceptions = [
    { name: "На главную", path: "/", id: "main"},
    { name: "Все события", path: "/Calendar/Filter/allEvents", id: "all"},
    { name: "Прошедшие события", path: "/Calendar/Filter/pastEvents", id: "past"},
    { name: "Будущие события", path: "/Calendar/Filter/futureEvents", id: "future"},
    org && { name: "Панель админа", path: "/Admin/allEvents", id: "admin", pathArr:["/Admin/allEvents", "/Admin/allUsers", "/Admin/createEvent"]},
  ]

  return (
    <div className='СategoryCaruselCont'>
      {exceptions.map(val => val && <CardCategory key={val.id} actBtn={actBtn} setActButton={setActButton} {...val}/>)}
      <FilterSelect title="Площадка" table="EVENT_PLACE" />
      <FilterSelect title="Фильтр" table="TAG" />
    </div>
  )
}

