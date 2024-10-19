import React, { useState } from 'react'
import './BasketProductInfo.css'

import BasketProductInfoTemp from '../BasketProductInfoTemp'
import BasketProductInfoCorrection from '../BasketProductInfoCorrection'
import BasketProm from '../BasketProm'
import Loyalty from '../../General/Loyalty'
import Button from '../../General/Button'
import useCheckWindowSize from '../../../../hooks/general/useCheckWindowSize'
import svg from '../../../../assets/image/svg'
import { generalPageLink } from '../../../../assets/varibles/generalData'

import OrderScrollCont from '../../OrderPage/OrderScroll/OrderScrollCont'

export default function BasketProductInfo({ promData, basket }) {

    const [size] = useCheckWindowSize()

    const [active, setActive] = useState(false)
    const [prom, setProm] = useState()

    const switchActive = () => setActive(prev => !prev)
    const recieveProm = (promo) => setProm(promo)

    return (
        <div className='basket_product_info_cont'>
            <div className='basket_product_info_cont_main'>
                <div className='basket_product_info'>
                    {size && <div onClick={switchActive} className='basket_product_info_svg'>{svg(active ? "arrowBottom" : "arrowTop", 25, 25)}</div>}
                    {(active || !size) && <div>
                        <div className='basket_product_info_title'>Ваш заказ</div>
                        {basket && <OrderScrollCont data={basket} />}
                        <BasketProductInfoTemp name="Товары" value="12.000" />
                        <BasketProductInfoTemp name="Доставка" value="400" />
                        <BasketProductInfoTemp name="Скидка" value={`-  ${900}`} />
                        {!promData?.prom && <BasketProm recieveFunc={recieveProm} />}
                        {promData?.prom && <BasketProductInfoTemp name={promData?.prom} value={`-  ${999}`} green />}
                        <div className='basket_product_info_line' /></div>}
                    <BasketProductInfoTemp name={size && !active ? "Ваш заказ" : "Итого"} value="11.500" bold fs={size && !active && 25} />
                    {(!size && !promData) && <BasketProductInfoCorrection
                        name="Заполните корзину еще на 7777 руб. и получите подарок"
                        text="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al. "
                        button="Дополнить корзину"
                        link="/" />}
                    <Button title="Оформить заказ" reverse link={generalPageLink.order.path} params={{ prom: prom }} m="25px 0 0" border="none" />
                </div>
            </div>
            {!promData && <div>
                <div className='basket_product_info_white_cont'>
                    <div /><div /><div />
                </div>
                <div className='basket_product_info basket_product_info_loyal'>
                    <Loyalty procent="60" level={[0, 1]} cost={[0, 15000]} remains="3500" />
                </div>
            </div>}
        </div>
    )
}
