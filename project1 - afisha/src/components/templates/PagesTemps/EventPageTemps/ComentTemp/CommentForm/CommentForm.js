import React, { useState } from 'react'
import './CommentForm.css'

import StarBlock from '../../StarBlock/StarBlock'

import useCreateComment from '../../../../../../hooks/EventPage/useCreateComment'

export default function CommentForm({ eventsData }) {

    const [score, setScore] = useState(4)
    const [message, setMessage] = useState()

    const createComment = useCreateComment(eventsData)

    return (
        <div>
            <div className='commentWriteBlock'>
                <div className='scoreTitle'>Как вам событие?</div>
                <StarBlock score={score} setScore={setScore} />
                <textarea className='scoreText' onChange={e => setMessage(e.target.value)} placeholder="Поделитесь своими впечатлениями" />
                <button className='sendScore' onClick={() => createComment(message, score)}>Оценить</button>
            </div>
        </div>
    )
}
