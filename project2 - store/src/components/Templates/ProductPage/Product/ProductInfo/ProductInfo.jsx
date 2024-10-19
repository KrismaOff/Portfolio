import React from 'react'
import './ProductInfo.css'

import Button from '../../../General/Button'

import Select from '../../../General/Select'

import useCheckWindowSize from '../../../../../hooks/general/useCheckWindowSize'

export default function ProductInfo({ productData, brandData }) {

  const [size] = useCheckWindowSize()

  const choseSize = (id) => {
    console.log(id);
  }

  const selectData = [
    { id: "1id", value: "42 ru/10 US" },
    { id: "2id", value: "42 ru/10 US" },
    { id: "3id", value: "42 ru/10 US" },
    { id: "4id", value: "42 ru/10 US" },
    { id: "5id", value: "42 ru/10 US" },
  ]

  return (
    <div className='product_info'>
      <div className='product_info_brand'>
        <img className='product_info_img' src={brandData.logo} alt="" />
        <span className='product_info_X'>X</span>
        <img className='product_info_img' src={brandData.logo} alt="" />
      </div>

      <div className='product_info_title_group'>
        {productData && productData.name.map((name, i) => <div key={i} className='product_info_title'>{name}</div>)}
      </div>

      <div className='product_info_title_undT'>Название товара типа кроссовки футболка</div>
      <div className='product_info_cost'>{productData.cost} руб.</div>
      {selectData ? <Select title="" data={selectData} func={choseSize} /> : <div className='product_info_size'>Один размер</div>}
      <div className='product_info_btn_grp'>
        {size && <Button title="В избранное" width="100%" borderR="50px" />}
        <Button title="Добавить в корзину" width="100%" borderR="50px" reverse />
      </div>
      <div className='product_info_add'>Еще от: {productData.brand}, Off-White</div>
    </div>
  )
}
