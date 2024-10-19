import React from 'react'
import loadingIcon from '../../../img/loadingIcon.svg'
import './Loading.css'

// const [loadingState, setLoadingState] = useState(true);
// {loadingState && <Loading />}

export default function Loading() {
  return (
    <div className='loading'>
        <img src={loadingIcon} className="loadingIcon" alt="loading..." />
    </div>
  )
}
