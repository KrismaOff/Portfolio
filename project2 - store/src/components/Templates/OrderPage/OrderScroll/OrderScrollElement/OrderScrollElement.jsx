import React from 'react'
import './OrderScrollElement.css'

export default function OrderScrollElement({ name, cost, src }) {
    return (
        <div className='order_scroll_element'>
            <div className='order_scroll_element_img_cont'>
                <img src={src} alt="" className='order_scroll_element_img'/>
            </div>
            <div className='order_scroll_element_cont'>
                <div className='order_scroll_element_title'>{name}</div>
                <div className='order_scroll_element_cost'>{cost} руб.</div>
            </div>
        </div>
    )
}
