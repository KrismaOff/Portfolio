import React from 'react'
import './ScheduleBlock.css'

import ScheduleCont from '../ScheduleBlockCont'
import useCreateScheduleObj from '../../../../../../hooks/EventPage/useCreateScheduleObj'
import useGetPlacesListData from '../../../../../../hooks/handleActionDB/RecieveDATA/useGetPlacesListData'

export default function ScheduleBlock({ table, place }) {

  const { eventPlacesData } = useGetPlacesListData(place)
  const { scheduleData } = useCreateScheduleObj(table)

  return (
    <>
      {table?.length !== 0 && <div>
        <div className='scheduleTitle'>Расписание</div>
        <div className='scheduleContSc'>

          {eventPlacesData.EVENT_PLACE_NAMES && scheduleData ?
            eventPlacesData.EVENT_PLACE_NAMES && Object.keys(scheduleData).map(key =>
              <ScheduleCont
                key={key}
                place={eventPlacesData.EVENT_PLACE_NAMES[key]}
                data={scheduleData[key]} />
            ) :
            scheduleData && Object.keys(scheduleData).map(key =>
              <ScheduleCont
                key={key}
                data={scheduleData[key]} />)
          }
        </div>
      </div>}
    </>
  )
}
