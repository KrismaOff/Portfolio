import React from 'react'
import { Link } from 'react-router-dom'
import './PosterCardBig.css'

import { generalPageLink } from '../../../../../assets/varibles/generalData'

export default function PosterCardBig({ style, src, name, cost, id, state }) {

    return (
        <div className='poster_card_big' style={style}>
            <div className='poster_card_big_image_block'>
                <img className='poster_card_big_image' src={src} alt='Snickers' />
            </div>
            <div className='poster_card_big_title'>{name}</div>
            <div className='poster_card_big_cost'>от {cost}р</div>
            <Link to={`${generalPageLink.product.path}/${id}`} page={state} className='poster_card_big_button'>Перейти</Link>
        </div>
    )
}
