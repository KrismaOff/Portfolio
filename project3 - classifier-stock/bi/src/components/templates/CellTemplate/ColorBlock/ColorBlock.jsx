import React from 'react'
import './ColorBlock.css'

export default function ColorBlock({ val }) {

  return (
    <div className='cellColorBlockCont'>
      <div className='cellColorBlock' style={{ backgroundColor: val }}/>
      {val}
    </div>
  )
}
