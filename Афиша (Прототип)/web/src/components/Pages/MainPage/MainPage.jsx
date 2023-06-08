import React from 'react'
import './MainPage.css'

import CardsCont from '../../CardTemps/CardsCont'
import CardCarusel from '../../CardTemps/CardCarusel/CardCarusel'
import CalendarCarusel from '../../FilterTemps/CalendarCarusel'

import useGetEventsListData from '../../../hooks/handleActionDB/RecieveDATA/useGetEventsListData'

import { useLoaderData } from 'react-router'

export default function MainPage() {

  const { eventsListData } = useGetEventsListData("all")

  const [state, id] = useLoaderData()

  const exception = { id: id, filter: state, eventsListData: eventsListData }

  return (
    <main>
      <div className='mainPage'>
        <CalendarCarusel {...exception} />
        <CardCarusel
          eventsListData={eventsListData}
          title="Календарные праздники колледжа!"
          conditionName="TAG_ID"
          conditionValue="CALENDAR" />
        <CardsCont {...exception} />
      </div>
    </main>
  )
}
