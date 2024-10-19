import React from 'react'
import './BasketPage.css'

import { useLoaderData } from 'react-router'

import BasketProductCont from '../../Templates/BasketPage/BasketProductCont'
import HighlightContainer from '../../Templates/General/Highlight/HighlightContainer'
import AdvertSignUp from '../../Templates/General/AdvertSignUp'
import Back from '../../Templates/General/Back'
import BasketProductInfoCorrection from '../../Templates/BasketPage/BasketProductInfoCorrection'
import useCheckWindowSize from '../../../hooks/general/useCheckWindowSize'

import { useLocation } from 'react-router'

export default function BasketPage() {

  const {state} = useLocation()

  const [basket, product] = useLoaderData()
  const [size] = useCheckWindowSize()

  return (
    <div className='basket_page'>
      <div className='basket_page_cont'>
        <Back {...state} />
        {size && <div className='basket_page_cont_correct'><BasketProductInfoCorrection
          name="Заполните корзину еще на 7777 руб. и получите подарок"
          text="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al. "
          button="Дополнить корзину"
          link="/" /></div>}
      </div>
      <BasketProductCont data={basket} />
      <div className='basket_page_cont'>
        <HighlightContainer
          card="product"
          icon="heart"
          data={product.slice(0, 4)}
          title="Дополни образ"
          scroll
        />
        <HighlightContainer
          card="product"
          icon="heart"
          data={product.slice(0, 4)}
          title="Недавно смотрели"
          scroll
        />
      </div>
      <AdvertSignUp />
    </div>
  )
}
