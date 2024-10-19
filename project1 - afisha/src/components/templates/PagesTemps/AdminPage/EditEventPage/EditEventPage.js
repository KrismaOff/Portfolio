import React from 'react'
import './EditEventPage.css'

import CreateEvent from '../../../../Pages/CreateEventPage/CreateEvent/CreateEvent'
import EventPage from '../../../../Pages/EventPage'
import EventInfo from '../EventInfo/EventInfo'

import useGetEventsData from '../../../../../hooks/handleActionDB/RecieveDATA/useGetEventsData'

import { useLoaderData } from 'react-router'

export default function EditEventPage() {

  const [, id, editAction] = useLoaderData()
  const { eventsData } = useGetEventsData(id)

  return (
    <div className='editEvent'>
      {editAction === "edit" && <div className='editEvent'><CreateEvent eventsData={eventsData} /></div>}
      {editAction === "check" && <EventPage />}
      {editAction === "info" && <EventInfo />}
    </div>
  )
}
