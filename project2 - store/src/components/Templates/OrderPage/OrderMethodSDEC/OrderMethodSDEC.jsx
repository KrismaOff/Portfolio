import React, { useState } from 'react'
import './OrderMethodSDEC.css'

import Button from '../../General/Button'
import MapNat from '../../MainPage/Map/Map/MapNat'
import useCheckWindowSize from '../../../../hooks/general/useCheckWindowSize'

export default function OrderMethodSDEC() {

  const [size] = useCheckWindowSize()
  const changeState = i => setActiveState(i)

  const exeption = [
    { id: 0, btn: "Доставка до дома", place: "Выбрать город" },
    { id: 1, btn: "Из пункта выдачи", place: "Выбрать удобный пункт выдачи" },
  ]


  const [activeState, setActiveState] = useState(1)

  return (
    <div className='order_method_sdec'>

      <div className='order_method_sdec_cont'>
        {exeption.map(obj => <div
          key={obj.id}
          className='order_method_sdec_cont_block'
          style={obj.id === activeState ? { border: "1px solid black", borderRadius: "50px" } : {}}
          onClick={() => changeState(obj.id)}
        >{obj.btn}</div>)}
      </div>

      <div className='order_method_sdec_title'>Доставка СДЭК в пункты выдачи</div>
      <div className='order_method_sdec_text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to</div>
      <input className='order_method_sdec_inp' placeholder={exeption[activeState].place} />
      <Button title="Подтвердить" w='160px' reverse={size}/>
      <MapNat cord={[55.636937, 37.597813]} mark={[55.636937, 37.597813]} zoom={13} sizeAd={["", 20]} search />
    </div>
  )
}
