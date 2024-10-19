import React from 'react'
import './SimpleBlock.css'

export default function SimpleBlock({val}) {
  return (
    <div className='cellSimple'>
      {Number(val) === 0 ? <span></span> : <span>{val}</span>}
    </div>
  )
}
