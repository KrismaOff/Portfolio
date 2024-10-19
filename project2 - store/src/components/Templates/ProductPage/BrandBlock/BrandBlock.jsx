import React from 'react'
import './BrandBlock.css'

export default function BrandBlock({ brandData: { name, logo, describe, img } }) {
    return (
        <div className='brand_block'> 
            <div className='brand_block_curcle'>
                <img src={logo} alt='' />
            </div>
            <div className="brand_block_cont">
                <div className='brand_block_part_left'>
                    <div className="brand_block_text">{describe}</div>
                    <button className='brand_block_button'>Перейти к товарам от {name}</button>
                </div>
                <div className='brand_block_part_right'>
                    <img src={img} alt='' />
                </div>
            </div>
        </div>
    )
}
