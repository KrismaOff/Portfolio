import React from 'react'
import './SocialNetwork.css'

import Icon from '../../General/Highlight/HighlightPage/Icon'

import useCheckWindowSize from '../../../../hooks/general/useCheckWindowSize'

export default function SocialNetwork() {

    const [size] = useCheckWindowSize()

    const social = [
        {
            src: "TG",
            name: "Telegram"
        },
        {
            src: "VK",
            name: "VK"
        },
        {
            src: "YT",
            name: "YouTube"
        },

    ]

    const checkSize = size ? "40" : "108"

    return (
        <div className='socialNetwork_block'>
            <div className='socialNetwork_block_title'>Наши соц. сети</div>
            <div className='socialNetwork_block_group_icon'>
                {social.map(obj => {
                    return <div className='socialNetwork_block_group_icon_text' key={obj.src}>
                        <Icon name={obj.src} color='black' size={[checkSize, checkSize]} />
                        <p className='socialNetwork_block_icon_text'>{obj.name}</p>
                    </div>
                })}
            </div>
        </div>
    )
}
