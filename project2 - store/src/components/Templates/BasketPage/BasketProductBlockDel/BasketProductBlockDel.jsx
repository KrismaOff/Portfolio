import React from 'react'
import './BasketProductBlockDel.css'

import svg from '../../../../assets/image/svg'
import useCheckWindowSize from '../../../../hooks/general/useCheckWindowSize'

export default function BasketProductBlockDel({ cost, del, res, data }) {

  const [size] = useCheckWindowSize()

  return (
    <div className='basket_product_block_del'>
      <div className='basket_product_block_del_cont'>
        <div>
          <img src={data.brand} alt="" className='basket_product_block_del_brand' />
          <div className='basket_product_block_del_title'>
            <span>{data.name}</span>
            <span className='basket_product_block_del_title_cost'>{cost} руб.</span>
          </div>
        </div>
        <div className='basket_product_block_del_btn'>
          <span className='basket_product_block_del_cross' onClick={() => del(data.id)}>{svg("cross", size ? 15 : 20)}</span>
          <div onClick={res} className='basket_product_block_del_restore'>Восстановить</div>
        </div>
      </div>
    </div>
  )
}
