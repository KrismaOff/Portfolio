import React from 'react'
import { Link } from 'react-router-dom'
import './PosterBlock.css'

import TypeProduct from '../TypeProduct'

import BackImg from '../../../../../assets/image/poster/BackImg.jpg'
import Bear from '../../../../../assets/image/poster/Bear.png'
import Hoodies from '../../../../../assets/image/poster/Hoodies.png'
import Snickers from '../../../../../assets/image/poster/Snickers.png'
import Wallet from '../../../../../assets/image/poster/Wallet.png'

import useCheckWindowSize from '../../../../../hooks/general/useCheckWindowSize'

export default function PosterBlock() {

    const typeProductData = [
        {
            name: "Кроссовки",
            img: Snickers,
        },
        {
            name: "Одежда",
            img: Hoodies,
        },
        {
            name: "Акксесуары",
            img: Wallet,
        },
        {
            name: "Коллекция",
            img: Bear,
        },
    ]

    const [size] = useCheckWindowSize()

    return (
        <div className='poster_block'>
            <div className='poster_block_main_poster'>
                <div className='poster_block_info'>
                    <div>Магазин премиальной реплики Именитых брендов</div>
                    <Link className='poster_block_button'>{!size && "Подробнее про " }оффлайн магазин</Link>
                </div>
                <img className='poster_block_img' alt='' src={BackImg} />
            </div>
            <div className="poster_block_types_products">
                {typeProductData.map((obj, i) => <TypeProduct  key={i} {...obj} />)}
            </div>
        </div>
    )
}
