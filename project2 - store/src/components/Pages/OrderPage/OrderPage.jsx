import React from 'react'
import './OrderPage.css'

import BasketProductInfo from '../../Templates/BasketPage/BasketProductInfo'
import OrderMethodContainer from '../../Templates/OrderPage/OrderMethodContainer'
import Back from '../../Templates/General/Back'

import { useLocation } from 'react-router'
import { useLoaderData } from 'react-router'
import useCheckWindowSize from '../../../hooks/general/useCheckWindowSize'

export default function OrderPage() {

    const [basket] = useLoaderData()
    const { state } = useLocation()
    const [size] = useCheckWindowSize()

    return (
        <div className='order_page'>
            <Back page="Оформление заказа" path="basket" />
            <div className='order_page_cont'>
                <OrderMethodContainer />
                {!size && <BasketProductInfo promData={state} basket={basket} />}
            </div>
        </div>
    )
}
