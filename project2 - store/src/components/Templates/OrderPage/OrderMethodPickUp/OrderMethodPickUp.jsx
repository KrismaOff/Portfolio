import React from 'react'
import './OrderMethodPickUp.css'

import MapNat from '../../MainPage/Map/Map/MapNat'
import Button from '../../General/Button'
import useCheckWindowSize from '../../../../hooks/general/useCheckWindowSize'

export default function OrderMethodPickUp() {

  const [size] = useCheckWindowSize()

  return (
    <div className='order_method_pickup'>
      <div className='order_method_pickup_title'>Наш  оффлайн магазин</div>
      <div className='order_method_pickup_info_group'>
        <div className='order_method_pickup_info'>
          <span className='order_method_pickup_info_title'>Адрес:</span>
          <span className='order_method_pickup_info_info'>Большая Грузинская улица, 2/12с1.</span>
        </div>
        <div className='order_method_pickup_info'>
          <span className='order_method_pickup_info_title'>Телефон поддержки {!size && "магазина"}:</span>
          <span className='order_method_pickup_info_info'>+7 499 444 34 81</span>
        </div>
      </div>
      <Button title="Подтвердить" w='160px' reverse={size}/>
      <MapNat cord={[55.761193, 37.579457]} mark={[55.761193, 37.579457]} zoom={13} sizeAd={["", 20]} />
    </div>
  )
}
