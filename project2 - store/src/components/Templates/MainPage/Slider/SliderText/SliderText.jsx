import React from 'react'
import './SliderText.css'

import Button from '../../../General/Button'

export default function SliderText({ title, link }) {
    return (
        <div className='slider_text_block'>
            <div className='slider_text_title'>
            Узнай о новой коллекции<span>{title}</span>
            </div>
            <Button title="Подробнее" link={link} w="20%" m="25px 0 0 5%"/>
        </div>
    )
}
