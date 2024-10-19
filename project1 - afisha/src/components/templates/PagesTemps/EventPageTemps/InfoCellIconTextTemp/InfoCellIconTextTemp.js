import React from 'react'
import './InfoCellIconTextTemp.css'

export default function InfoCellIconTextTemp({ title, src, val, text }) {

    return (
        <div className='infoDet imgDetails' data-title={title}>
            <img src={src} alt="" className="icon" width="40px" />
            {val && val.length !== 0 ? <span className='infoCellTextText'>{val}</span> : <span className='whModer'>{text}</span>}
        </div>
    )
}
