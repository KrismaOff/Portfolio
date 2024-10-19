import React from 'react'
import './ProductContainer.css'

import ProductCarusel from '../ProductCarusel'
import ProductInfo from '../ProductInfo'
import PosterCarusel from '../../../MainPage/Poster/PosterCarusel'
import useCheckWindowSize from '../../../../../hooks/general/useCheckWindowSize'

export default function ProductContainer({ productData, brandData }) {

    const [size] = useCheckWindowSize()

    return (
        <div className='product_container'>
            <div className='product_container_main'>
                {size ?
                    <div className='product_container_carusel_mob'>
                        <PosterCarusel scroll>
                            {productData.img.map((val, i) => <img key={i} src={val} alt='' />)}
                        </PosterCarusel>
                    </div>
                    :
                    <ProductCarusel img={productData.img} />
                }
                <ProductInfo productData={productData} brandData={brandData} />
            </div>
        </div>
    )
}
