import React from 'react'
import './EventScheduleCont.css'

import EventSchedule from '../EventSchedule/EventSchedule'

export default function EventScheduleCont({ place, placeId, onChange, data }) {

  return (
    <div>

      {placeId === "ALLPLACE" ?
        <div>
          <div className='EventScheduleTitle'>Тайминги мероприятия</div>
          <div className='EventScheduleAllPlace'>
            {Object.keys(place).map(key => {
              let comp;
              if (place[key].EVENT_PLACE_ID !== "ALLPLACE")
                comp = <EventSchedule
                  key={key}
                  data={data && data[place[key].EVENT_PLACE_ID]}
                  allPlace={true}
                  idPlace={place[key].EVENT_PLACE_ID}
                  onChange={onChange}
                  title={place[key].EVENT_PLACE_NAME} />
              return comp;
            })}
          </div>
        </div>
        :
        <EventSchedule onChange={onChange} idPlace={placeId} data={data[Object.keys(data)]}/>
      }
    </div>
  )
}
