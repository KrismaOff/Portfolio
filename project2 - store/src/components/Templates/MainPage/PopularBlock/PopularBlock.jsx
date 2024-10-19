import React from 'react'
import './PopularBlock.css'

import PosterCarusel from '../Poster/PosterCarusel'
import PosterCardBig from '../Poster/PosterCardBig'

export default function PopularBlock({ data }) {

  return (
    <div className='popular_block'>
      <div className="popular_block_title">Самое популярное</div>
      <PosterCarusel arrow>
        {data.map(obj => <PosterCardBig key={obj.id} {...obj} />)}
      </PosterCarusel>
    </div>
  )
}
