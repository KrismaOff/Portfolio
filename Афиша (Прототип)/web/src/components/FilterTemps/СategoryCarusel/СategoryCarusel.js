import React, { useContext } from 'react'
import './СategoryCarusel.css'

import CardCategory from '../../CardTemps/CardCategory'
import FilterSelect from '../FilterSelect/FilterSelect'

import { StatusUserContext } from '../../App/App'

export default function СategoryCarusel() {

  const { org } = useContext(StatusUserContext)

  const exceptions = [
    {name: "На главную", path: "/"},
    {name: "Все события", path: "/Calendar/Filter/allEvents"},
    {name: "Прошедшие события", path: "/Calendar/Filter/pastEvents"},
    {name: "Будущие события", path: "/Calendar/Filter/futureEvents"},
  ]

  return (
    <div className='СategoryCaruselCont'>
      {exceptions.map((val, i) => <CardCategory key={i} {...val}/>)}
      
      {org && <CardCategory name="Панель админа" path="/Admin/allEvents" pathArr={["/Admin/allEvents", "/Admin/allUsers", "/Admin/createEvent"]}/>}
      <FilterSelect title="Площадка" table="EVENT_PLACE"/>
      <FilterSelect title="Фильтр" table="TAG"/>
    </div>
  )
}

