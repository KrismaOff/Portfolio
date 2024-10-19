import React from 'react'
import './BasketProductSelectSwitcher.css'

import useCheckWindowSize from '../../../../hooks/general/useCheckWindowSize'
import svg from '../../../../assets/image/svg'

export default function BasketProductSelectSwitcher({ option, title, func }) {

  const [size] = useCheckWindowSize()

  return (
    <>
      {!size && <>{option}:</>}
      <span className='basket_product_select_title_name'>{title}</span>
      {size && <span onClick={func} className='basket_product_select_title_arrow'>{svg("arrowBottom", 30, 10)}</span>}
    </>
  )
}
