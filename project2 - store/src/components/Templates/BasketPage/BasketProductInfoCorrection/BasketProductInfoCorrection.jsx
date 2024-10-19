import React, { useState } from 'react'
import './BasketProductInfoCorrection.css'

import svg from '../../../../assets/image/svg'
import Button from '../../General/Button'

export default function BasketProductInfoCorrection({ name, text, button, link }) {

    const [active, setActive] = useState(false)

    return (
        <div className='basket_product_info_correction'>
            <div onClick={() => setActive(!active)} className='basket_product_info_correction_cont'>
                <span>{name}</span>
                <div className='basket_product_info_correction_message_icon'>{svg("question", 23, 23)}</div>
            </div>
            {active && <div onClick={() => setActive(!active)} className='basket_product_info_correction_message'>
                <div className='basket_product_info_correction_message_icon'>{svg("question", 23, 23)}</div>
                <div className='basket_product_info_correction_message_text'>{text}</div>
                {button && <Button title={button} link={link} reverse />}
            </div>}
        </div>
    )
}
