import React from 'react'
import './OrderMethodCourier.css'

import Button from '../../General/Button'
import MapNat from '../../MainPage/Map/Map/MapNat'
import OrderSelect from '../OrderSelect'
import useCheckWindowSize from '../../../../hooks/general/useCheckWindowSize'

export default function OrderMethodCourier() {

  const [size] = useCheckWindowSize()

  const exeptions = [
    { id: "flat", placeholder: "Квартира" },
    { id: "entrance", placeholder: "Подъезд" },
    { id: "floor", placeholder: "Этаж" },
  ]

  const selectTime = [
    { id: "1", title: ["18:00", "23:00"] },
    { id: "2", title: ["19:00", "23:00"] },
    { id: "3", title: ["17:00", "23:00"] },
    { id: "4", title: ["16:00", "23:00"] },
    { id: "5", title: ["13:00", "23:00"] },
  ]
  const selectDate = [
    { id: "1", title: "06.09.2023" },
    { id: "2", title: "07.09.2023" },
    { id: "3", title: "08.09.2023" },
    { id: "4", title: "09.09.2023" },
    { id: "5", title: "10.09.2023" },
  ]

  const returnDate = id => {
    console.log(id);
  }
  const returnTime = id => {
    console.log(id);
  }

  return (
    <div className='order_method_courier'>
      <div className='order_method_courier_title'>Доставка по городу Санкт-Перербург</div>
      <div className='order_method_courier_text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to</div>
      <form className='order_method_courier_form'>
        <input className='order_method_courier_form_adress' placeholder='Куда удобнее привезти' />
        <div className='order_method_courier_form_cont'>
          <div className='order_method_courier_form_cont_cont'>{exeptions.map(obj => <input className='order_method_courier_form_inp' key={obj.id} placeholder={obj.placeholder} />)}</div>
          {!size ? <>
            <OrderSelect params={selectDate} title="Дата" func={returnDate} />
            <OrderSelect params={selectTime} func={returnTime} w="100%" /></>
            :
            <div className='order_method_courier_form_cont_cont'>
              <OrderSelect params={selectDate} title="Дата" func={returnDate} />
              <OrderSelect params={selectTime} func={returnTime} w="100%" />
            </div>
          }
        </div>
        <textarea className='order_method_courier_form_text' placeholder='Комментарий для курьера' />
      </form>

      <Button title="Подтвердить" w='160px' reverse={size} />
      <MapNat cord={[55.761193, 37.579457]} mark={[55.761193, 37.579457]} zoom={13} sizeAd={["", 20]} search />

    </div>
  )
}
