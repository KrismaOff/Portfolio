import React, { useState } from 'react'
import './BasketProductBlock.css'

import BasketProductSelect from '../BasketProductSelect'
import BasketProductBlockDel from '../BasketProductBlockDel'

import svg from '../../../../assets/image/svg'
import useCheckWindowSize from '../../../../hooks/general/useCheckWindowSize'

export default function BasketProductBlock({ data }) {

  const [size] = useCheckWindowSize()

  const selectDataSize = [
    { id: "1id", name: "12 ru/10 US", availability: "12" },
    { id: "2id", name: "22 ru/10 US", availability: "12" },
    { id: "3id", name: "32 ru/10 US", availability: "12" },
    { id: "4id", name: "42 ru/10 US", availability: "12" },
    { id: "5id", name: "52 ru/10 US", availability: "12" },
  ]

  const [sizeVal, setSizeVal] = useState(selectDataSize[0])
  const [countVal, setCountVal] = useState(1)
  const [cost, setCost] = useState(data.cost)
  const [delState, setDelState] = useState(false)

  const recieveSize = id => {
    let chOp = selectDataSize.filter(obj => id === obj.id)
    setSizeVal(...chOp)
  }
  const recieveCount = id => {
    setCountVal(id)
    setCost(data.cost * id)
  }

  const deleteProduct = () => {
    setDelState(true)
    // console.log(data.id);
  }
  const restoreProduct = () => {
    setDelState(false)
  }

  return (
    <div>
      {delState ?
        <BasketProductBlockDel cost={cost} data={data} res={restoreProduct} /> :
        <div className='basket_product_block'>
          <div className='basket_product_path_top'>
            <div className='basket_product_path_top_icon'>{svg("heart", 23)}</div>
            <div className='basket_product_path_top_icon' onClick={deleteProduct}>{svg("cross", size ? 15 : 23)}</div>
          </div>
          <div className='basket_product_block_cont'>
            <div className='basket_product_path_left'>
              <img className='basket_product_block_img' src={data.src} alt="" />
            </div>
            <div className='basket_product_path_right'>
              <div>
                <img className='basket_product_block_img_brand' src={data.brand} alt="" />
                <div className='basket_product_block_name'>{data.name}</div>
                {size && <div className='basket_product_block_cost'>{cost} руб.</div>}
                <div className='basket_product_block_select_group'>
                  {sizeVal === 1 ? <span className='basket_product_block_size'>Один размер</span> : <BasketProductSelect ch={sizeVal} data={selectDataSize} recieveFunc={recieveSize} />}
                  <BasketProductSelect ch={countVal} recieveFunc={recieveCount} count={10} />
                </div>
              </div>
              {!size && <span className='basket_product_block_cost'>{cost} руб.</span>}
            </div>
          </div>
        </div>}
    </div>
  )
}
