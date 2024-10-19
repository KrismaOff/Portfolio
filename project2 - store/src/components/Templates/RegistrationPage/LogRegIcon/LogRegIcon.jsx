import React from 'react'
import './LogRegIcon.css'

import svg from '../../../../assets/image/svg'

export default function LogRegIcon({ src, id }) {
    return (
        <a href={src} target="_blank" rel="noreferrer" className='log_reg_icon'>
            {svg(id, 30, 30)}
        </a>
    )
}
