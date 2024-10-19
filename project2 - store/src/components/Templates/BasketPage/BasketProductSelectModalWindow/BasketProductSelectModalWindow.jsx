import React from 'react'
import './BasketProductSelectModalWindow.css'

export default function BasketProductSelectModalWindow({ ch, func, data, count }) {

    return (
        <div className={count ?
            "basket_product_select_modal_cont basket_product_select_modal_cont_count" :
            "basket_product_select_modal_cont basket_product_select_modal_cont_size"}>
            {count ? Array.from({ length: count }, (_, i) =>
                <div onClick={() => func(i+1)} key={i} className={ch === i ? "basket_product_select_modal_count modal_window_active" : "basket_product_select_modal_count"}>
                    <span>{i+1}</span>
                </div>)
                :
                data.map(obj =>
                    <div onClick={() => func(obj.id)} key={obj.id} className={ch.id === obj.id ? "basket_product_select_modal modal_window_active" : "basket_product_select_modal"}>
                        <span>{obj.name}</span> 
                        {/* &mdash; <span>{obj.availability} в наличии</span> */}
                    </div>)}
        </div>
    )
}