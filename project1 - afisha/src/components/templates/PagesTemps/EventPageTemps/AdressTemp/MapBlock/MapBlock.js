import React from 'react'
import './MapBlock.css'

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function MapBlock({ cord }) {

  const exception = {
    cord: cord && cord.length === 2,
    map: {
      width: 100 + "%",
      height: 25 + "em",
      defaultState: cord && cord.length === 2 ? { center: cord, zoom: 17 } : { center: [55.755864, 37.617698], zoom: 10 }
    }
  }

  return (
    <div className='mapCont'>
      <YMaps>
        <Map {...exception.map}>
          {exception.cord ?
            <Placemark defaultGeometry={cord} /> :
            cord && cord.map((val, i) => <Placemark defaultGeometry={val} key={i} />)
          }
        </Map>
      </YMaps>
    </div>
  )
}
