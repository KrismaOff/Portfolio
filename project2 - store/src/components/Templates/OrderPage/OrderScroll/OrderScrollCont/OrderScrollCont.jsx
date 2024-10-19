import React, { useState } from 'react'
import './OrderScrollCont.css'

import OrderScrollElement from '../OrderScrollElement'

export default function OrderScrollCont({ data }) {

    const [scrollV, setScrollV] = useState(0)

    const checkScrolling = e => {
        const pos = e.currentTarget.scrollTop
        const lenAll = (data.length - 3) * 100
        const res = ((100 * pos) / lenAll) * 3
        setScrollV(res <= 250 ? res : 250);
      }

  return (
    <div className='order_scroll_cont'>
        <div className='order_scroll_cont_cont' onScroll={checkScrolling}>
            {data.map(obj => <OrderScrollElement key={obj.id} {...obj}/>)}
        </div>
        <div className='order_scroll_cont_scrollbar'>
            <div className='order_scroll_cont_scrollbar_elem' style={{marginTop: `${scrollV}px`}}/>
        </div>
    </div>
  )
}
