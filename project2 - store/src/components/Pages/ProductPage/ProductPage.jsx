import React from 'react'
import './ProductPage.css'

import { useLoaderData } from 'react-router'

import ProductContainer from '../../Templates/ProductPage/Product/ProductContainer/ProductContainer'
import DescribeBlock from '../../Templates/ProductPage/DescribeBlock'
import HighlightCard from '../../Templates/General/Highlight/HighlightContainer'
import AdvertSignUp from '../../Templates/General/AdvertSignUp'
import BrandBlock from '../../Templates/ProductPage/BrandBlock'
import Back from '../../Templates/General/Back'

import { useLocation } from 'react-router'

export default function ProductPage() {

  const { state } = useLocation()
  const [productData, product, brandData] = useLoaderData()

  return (
    <div>
      <div className='product_page_add_cont'><Back {...state} /></div>
      <ProductContainer productData={productData} brandData={brandData} />
      <DescribeBlock text={productData.describe} article={productData.article} />
      <div className='product_page_add_cont'>
        <HighlightCard
          stateLocation={state}
          card="product"
          icon="heart"
          data={product}
          title="Дополни образ"
          scroll
        />
        <HighlightCard
          card="product"
          icon="heart"
          data={product}
          title="Рекомендации"
          button={["Каталог"]}
          scroll
        />
      </div>
      <AdvertSignUp />
      <div className='product_page_add_cont'>
        <HighlightCard
          card="product"
          icon="heart"
          data={product}
          title="Недавно смотрели"
          scroll
        />
        <BrandBlock brandData={brandData} />
      </div>
    </div>
  )
}
