import React from 'react'
import './OrderMethodButton.css'

export default function OrderMethodButton({id, title, cost, method, func}) {
  return (
    <div className={method === id ? 'order_method_button' : 'order_method_button order_method_button_unactive'} onClick={()=>func(id)}>
      <div className='order_method_button_title'>{title}</div>
      <div className='order_method_button_cost'>{typeof cost === "number" ? `${cost} руб.` : cost}</div>
    </div>
  )
}
