import React from 'react'
import './ColorBlock.css'

export default function ColorBlock({size, color}) {
    
  return (
    <div style={{width:size, height:size, backgroundColor:color}}>
    </div>
  )
}
