import React from 'react'
import './BasketProductInfoTemp.css'

export default function BasketProductInfoTemp({name, value, bold, fs, green}) {

    const style = {
        fontWeight: bold ? 700 : "initial",
        fontSize: fs ? fs : "initial",
        color: green ? "#7EB607" : "black"
    }

    return (
        <div className="basket_product_info_temp" style={style}>
            <span>{name}</span>
            <span>{value} руб.</span>
        </div>
    )
}
