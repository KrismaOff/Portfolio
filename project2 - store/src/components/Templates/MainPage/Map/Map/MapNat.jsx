import React from 'react'
import './MapNat.css'

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'; //SearchControl
import useCheckWindowSize from '../../../../../hooks/general/useCheckWindowSize';

export default function MapNat({ cord, mark, zoom, sizeAd }) {

  const [size] = useCheckWindowSize()

  const exception = {
    map: {
      width: !sizeAd ? 100 + "%" : sizeAd[0] + "%",
      height: !sizeAd ? !size ? 30 + "em" : 10 + "em" : sizeAd[1] + "em",
      defaultState: { center: cord, zoom: zoom } //{ center: [55.755864, 37.617698], zoom: 10 }
    }
  }

  return (
    <div className='map_nat'>
      <YMaps>
        <Map {...exception.map}>
          <Placemark defaultGeometry={mark} />
          {/* {search && <SearchControl options={{ float: "right"}} />} */}
        </Map>
      </YMaps>
    </div>
  )
}
