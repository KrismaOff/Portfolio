import React from 'react'
import './AdvertSignUp.css'

import Button from '../Button'

export default function AdvertSignUp() {
    return (
        <div className='advert_signup_block'>
            <div className='adver_signup_block_cont'>
                <div className='advert_signup_title_block'>
                    <div className="advert_signup_title">Зарегистрируйтесь и получите скидку в 10% на первый заказ</div>
                    <Button title="Регистрация" link="/" w="150px" reverse />
                </div>
                <img className='advert_signup_img' src='https://i.pinimg.com/originals/a0/33/2a/a0332a69c5feab929c6a9e208a9de9f0.gif' alt='' />
            </div>
        </div>
    )
}
