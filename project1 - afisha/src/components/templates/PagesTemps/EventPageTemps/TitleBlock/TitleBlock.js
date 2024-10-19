import React from 'react'
import './TitleBlock.css'

import TagsBlock from '../TagsBlock'

export default function TitleBlock({title, img, tagId}) {

    return (
        <div className='titleBlockCont'>
            <TagsBlock tag={tagId} />
            <div className='eventTextUpLayout'>
                <div className='eventTitle'>{title}</div>
            </div>
            <div className='eventImgCont'>
                <img className='eventImg' src={img} alt="" />
                <div className='eventImgBack'></div>
            </div>
        </div>
    )
}
