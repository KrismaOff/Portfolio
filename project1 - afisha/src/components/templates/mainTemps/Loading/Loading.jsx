import React from 'react'

// import loadingIconDark from '../../../assets/img/loading/loadingIconDark.svg'
import loadingIconLight from '../../../../assets/img/loading/loadingIconLight.svg'

import './Loading.css'

export default function Loading() {
  return (
    <div className='loading'>
        <img src={loadingIconLight} className="loadingIcon" alt="loading..." />
    </div>
  )
}
