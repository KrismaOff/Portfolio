import React, { useState } from 'react'
import './OrderMethodContainer.css'

import OrderMethodButton from '../OrderMethodButton'

import OrderMethodCourier from '../OrderMethodCourier'
import OrderMethodPickUp from '../OrderMethodPickUp'
import OrderMethodSDEC from '../OrderMethodSDEC'

export default function OrderMethodContainer() {

  const DATA = {
    PickUp: "PickUp",
    Courier: "Courier",
    SDEC: "SDEC"
  }

  const exeptions = [
    { id: "PickUp", title: "Самовывоз", cost: "Беслпатно" },
    { id: "Courier", title: "Доставка", cost: 500 },
    { id: "SDEC", title: "СДЭК", cost: "Беслпатно" },
  ]


  const [activeMethod, setActiveMethod] = useState(DATA.PickUp)

  const changeActiveMethod = id => setActiveMethod(id)


  return (
    <div className='order_method_container'>
      <div className='order_method_container_title'>Выберете способ получения</div>
      <div className='order_method_container_group_button'>
        {exeptions.map((obj, i) => <OrderMethodButton
          id={obj.id}
          key={i}
          title={obj.title}
          cost={obj.cost}
          method={activeMethod}
          func={changeActiveMethod}
        />)}
      </div>
      <div className='order_method_container_order'>
        {activeMethod === DATA.PickUp && <OrderMethodPickUp/>}
        {activeMethod === DATA.Courier && <OrderMethodCourier/>}
        {activeMethod === DATA.SDEC && <OrderMethodSDEC/>}
      </div>

    </div>
  )
}
