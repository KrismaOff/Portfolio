import React, { useState } from 'react'
import './ProductCarusel.css'

import ProductImg from '../ProductImg'
import ProductIcon from '../ProductIcon'

import svg from '../../../../../assets/image/svg'

export default function ProductCarusel({ img }) {

  const [count, setCount] = useState(0)
  const [offset, setOffset] = useState(0)

  const handleTopArrow = () => {
    if (count !== 0) {
      setCount(count - 1)
      setOffset(prev => prev + Math.round(100 / (img.length + 1)))
    } else {
      setCount(0)
      setOffset(0)
    }

  }
  const handleBottomArrow = () => {
    const len = img.length
    if (count !== len - 1) {
      setCount(count + 1)
      setOffset(prev => prev - Math.round(100 / (len + 1)))
    } else {
      setCount(0)
      setOffset(0)
    }
  }

  const handleIconClick = (count) => setCount(count)

  return (
    <div className='product_carusel'>
      <div className='product_carusel_cont'>
      <div className='product_carusel_cont_arr' onClick={handleTopArrow}>{svg("arrowTop")}</div>
        <div className='product_carusel_window'>
          <div className='product_carusel_items' style={{ transform: `translateY(${offset}%)` }}>
            <ProductIcon title="3D" />
            {img.map((val, i) => <ProductIcon key={i} check={[i, count]} icon={val} func={handleIconClick} />)}
          </div>
        </div>
        <div className='product_carusel_cont_arr' onClick={handleBottomArrow}>{svg("arrowBottom")}</div>
      </div>
      <ProductImg img={img[count]} />
    </div>
  )
}