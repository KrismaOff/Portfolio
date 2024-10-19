import React from 'react'
import './DateBlock.css'

import { handleDateForUser } from '../../../../helper/handleDateForUser'

export default function DateBlock({val}) {
  return (
    <div className='cellSimple'>
      {val && <>{handleDateForUser(val)}</>}
    </div>
  )
}
