import React, { lazy, Suspense } from 'react'
import './MainPage.css'

import Loading from '../../templates/mainTemps/Loading'
// import CardsCont from '../../CardTemps/CardsCont'
import CalendarCarusel from '../../FilterTemps/CalendarCarusel'
import useGetEventsListData from '../../../hooks/handleActionDB/RecieveDATA/useGetEventsListData'
import { useLoaderData } from 'react-router'

const CardCarusel = lazy(() => import('../../CardTemps/CardCarusel/CardCarusel'));
const CardsCont = lazy(() => import('../../CardTemps/CardsCont'));

export default function MainPage() {

  const { eventsListData } = useGetEventsListData("all")

  const [state, id] = useLoaderData()

  const exception = { id: id, filter: state, eventsListData: eventsListData }

  return (
    <main>
      <div className='mainPage'>
        <CalendarCarusel {...exception} />
        <Suspense fallback={<Loading />}>
          <CardCarusel
            eventsListData={eventsListData}
            title="Кафедральные события колледжа!"
            conditionName="TAG_ID"
            conditionValue="DEPARTMENT" />
          <CardsCont {...exception} />
        </Suspense>
      </div>
    </main>
  )
}
