import React from 'react'
import './CommenBlock.css'

import CommentForm from '../CommentForm/CommentForm'
import CommentMessage from '../CommentMessage'

export default function CommenBlock({ eventsData, comments }) {

  return (
    <div className='commentBlock'>
        <div className='titleDesc'>Отзывы</div>
      {comments && comments.length !== 0 ?
        comments.map((obj, i) => <CommentMessage key={i} {...obj} eventsData={eventsData} />) :
        <span className='commentEmpty'>Тут пока что нет отзывов, вы можете стать первым!</span>
      }
      <CommentForm eventsData={eventsData}/>
    </div>
  )
}
