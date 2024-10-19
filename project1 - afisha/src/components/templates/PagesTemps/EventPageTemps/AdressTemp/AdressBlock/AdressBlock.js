import React from 'react'
import './AdressBlock.css'

import AdressRow from '../AdressRow/AdressRow'
import MapBlock from '../MapBlock'
import useGetPlacesListData from '../../../../../../hooks/handleActionDB/RecieveDATA/useGetPlacesListData'


export default function AdressBlock({ table, place }) {

  const { eventPlacesData } = useGetPlacesListData(place)

  return (
    <div>
      <div className='titleDesc'>Адрес</div>

      {table && Object.keys(table).map(key => <AdressRow key={key} place={key} />)}
      <MapBlock cord={eventPlacesData.EVENT_PLACE_CORDINATES} />

    </div>
  )
}
