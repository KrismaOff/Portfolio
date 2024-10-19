import React from 'react'
import './EventPage.css'

import { useLoaderData } from 'react-router';

import useGetEventsData from '../../../hooks/handleActionDB/RecieveDATA/useGetEventsData'

import TitleBlock from '../../templates/PagesTemps/EventPageTemps/TitleBlock';
import DetailsBlock from '../../templates/PagesTemps/EventPageTemps/DetailsBlock'
import CommenBlock from '../../templates/PagesTemps/EventPageTemps/ComentTemp/CommenBlock';
import SignUpEventBlock from '../../templates/PagesTemps/EventPageTemps/SignUpEventBlock'

export default function EventPage() {

  const [,id] = useLoaderData()

  const { eventsData, eventsData:
    { EVENT_NAME, EVENT_IMG, EVENT_DATE, EVENT_DESCRIBE, EVENT_SPEAKERS, EVENT_MODERATORS, EVENT_TABLE, EVENT_COMMENTS, EVENT_PLACE_ID, EVENT_TIME, TAG_ID }
  } = useGetEventsData(id)

  return (
    <div className='eventPage'>
      <TitleBlock
        title={EVENT_NAME}
        img={EVENT_IMG}
        tagId={TAG_ID} />

      <SignUpEventBlock
        eventsId={id}
        date={EVENT_DATE}
        place={EVENT_PLACE_ID}
      />

      <DetailsBlock
        time={EVENT_TIME}
        date={EVENT_DATE}
        place={EVENT_PLACE_ID}
        describe={EVENT_DESCRIBE}
        speakers={EVENT_SPEAKERS}
        moderators={EVENT_MODERATORS}
        table={EVENT_TABLE}
      />

      <CommenBlock
        eventsData={eventsData}
        // img={EVENT_IMG}
        // name={EVENT_NAME}
        comments={EVENT_COMMENTS}
      />
    </div>
  )
}
