import React from 'react'
import './InfoBlock.css'

export default function InfoBlock({ name, ...text }) {

    return (
        <div className='info_block'>
            <div className='info_block_title'>{name}</div>
            <div className="info_block_text">
                {Object.keys(text).map(key => <p key={key}>{text[key].name}</p>)}
            </div>
        </div>
    )
}
