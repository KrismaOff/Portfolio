import React from 'react'
import './GiftContact.css'

import svg from '../../../../assets/image/svg'

export default function GiftContact() {
    return (
        <div className='gift_contact'>
            <div className='gift_contact_block'>
                <div className='gift_contact_block_cont'>
                    <div className='gift_contact_block_cont_title'>
                        <span>{svg("adress")}</span>
                        <span>2118 Thornridge Cir. Syracuse</span>
                    </div>
                    <div className='gift_contact_block_cont_title'>
                        <span>{svg("phone")}</span>
                        <span>8-888-888-88-88</span>
                    </div>
                </div>
                <div className='gift_contact_block_img'>
                    <img className='gift_contact_block_img_img' src='https://mebpilot.ru/800/600/https/flora.bio/img/cms/per-armadi.jpg' alt=''/>
                </div>
            </div>
        </div>
    )
}
