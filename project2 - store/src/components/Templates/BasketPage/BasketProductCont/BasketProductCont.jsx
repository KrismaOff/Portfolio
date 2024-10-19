import React from 'react'
import './BasketProductCont.css'

import BasketProductBlock from '../BasketProductBlock'
import BasketProductInfo from '../BasketProductInfo'

export default function BasketProductCont({data}) {

  // const deleteProduct = id => {
  //   console.log(id);
  // }
  // const restoreProduct = id => {
  //   console.log(id);
  // }

  return (
    <div className='basket_product_cont'>
        <div>
          {data.map((obj, i) => <BasketProductBlock key={i} data={obj}/>)}
        </div>
        <BasketProductInfo data={data}/>
    </div>
  )
}
