import React from 'react'
import './ProductImg.css'

import svg from '../../../../../assets/image/svg'

export default function ProductImg({img}) {

  return (
    <div className='product_img'>
      <div className='product_img_icon'>{svg("heart", 20, 20, "black")}</div>
      <img className='product_img_img' src={img} alt="" />
    </div>
  )
}
