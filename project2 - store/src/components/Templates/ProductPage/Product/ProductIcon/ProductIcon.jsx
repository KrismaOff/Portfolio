import React from 'react'
import './ProductIcon.css'

import useCheckWindowSize from '../../../../../hooks/general/useCheckWindowSize'

export default function ProductIcon({ check, title, icon, func }) {

    const [size] = useCheckWindowSize()
    const checkV = check && check[1] === check[0]

    return (
        <div className={size && checkV ? "product_icon_point" : "product_icon_point product_icon_point_w"} onClick={() => func(check[0])}>
            {!size && <div
                style={{ background: checkV && "black" }}
                className='product_icon'>
                {title && <div className='product_icon_title'>{title}</div>}
                {icon && <img className='product_icon_icon' src={icon} alt="" />}
            </div>}
        </div>
    )
}
