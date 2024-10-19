import React, { useState } from 'react'
import './GiftPage.css'

import HighlightContainer from '../../Templates/General/Highlight/HighlightContainer'
import AdvertSignUp from '../../Templates/General/AdvertSignUp'
import GiftContact from '../../Templates/GiftPage/GiftContact'
import GiftInfo from '../../Templates/GiftPage/GiftInfo'
import useCheckWindowSize from '../../../hooks/general/useCheckWindowSize'

import { useLoaderData } from 'react-router'

export default function GiftPage() {

    const [size] = useCheckWindowSize()

    const [product] = useLoaderData()

    const [giftChosenCard, setGiftChosenCard] = useState({})

    return (
        <div>
            <div className='gift_page'>
                <div className='gift_page_cont'>
                    {size && <GiftInfo />}
                    <GiftContact />
                    <div>
                        <div className='gift_page_title_cont'>
                            <div className='gift_page_title'>Подарки</div>
                            <div className='gift_page_text'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</div>
                        </div>
                        {!size && <GiftInfo />}
                    </div>
                </div>
                <HighlightContainer
                    chosenCard={[giftChosenCard, setGiftChosenCard]}
                    limit={2}
                    card="gift"
                    icon="heart"
                    data={product}
                    title="Подарки на выбор"
                    scroll
                />
            </div>
            <AdvertSignUp />
        </div>
    )
}
