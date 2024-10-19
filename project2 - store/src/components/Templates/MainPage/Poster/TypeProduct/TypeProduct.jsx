import React from 'react'
import './TypeProduct.css'

export default function TypeProduct({ name, img }) {
  return (
    <div className='type_product_main_block'>
      <div className="type_product_block">
        <p className='type_product_title'>{name}</p>
        <img className='type_product_img' src={img} alt='' />
      </div>
    </div>
  )
}
