import React from 'react'
import './DetailsString.css'

import svg from '../../../../../assets/image/svg'

export default function DetailsString({ title }) {
  return (
    <div className='details_string'>
      {svg("info")}
      {title}
    </div>
  )
}
