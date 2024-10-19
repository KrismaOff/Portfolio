import React, { useContext } from 'react'
import './CommentMessage.css'

import useGetUserData from '../../../../../../hooks/handleActionDB/RecieveDATA/useGetUserData'
import useGetAccessUserData from '../../../../../../hooks/handleActionDB/RecieveDATA/useGetAccessUserData'
import { getMonthDecl } from '../../../../../../helper/HandleDate/getMonthDecl'
import { handleDate } from '../../../../../../helper/HandleDate/handleDate'

import useDeleteComment from '../../../../../../hooks/EventPage/useDeleteComment'

import deleteIcon from '../../../../../../assets/img/IconEvent/delete.svg'
import startFill from '../../../../../../assets/img/IconEvent/startFill.svg'
import starEmpty from '../../../../../../assets/img/IconEvent/starEmpty.svg'

import { StatusUserContext } from '../../../../../App/App'

export default function CommentMessage({ ID, DATE, TIME, MESSAGE, SCORE, USER_ID, eventsData }) {

  const deleteComment = useDeleteComment(eventsData)

  const { user, admin } = useContext(StatusUserContext)

  const { userData } = useGetUserData(USER_ID)
  const { accessData } = useGetAccessUserData(userData?.ACCESS_USER_ID)

  const exeption = {
    name: userData?.USER_NAME.join(" "),
    role: accessData?.ACCESS_USER_NAME,
    date: getMonthDecl(handleDate(DATE)),
    time: TIME
  }

  return (
    <div className='commentMessage'>
      <div className='scoreCommentData'>
        {SCORE && Array.from({ length: Math.round(SCORE) }, (_, i) => <img key={i} src={startFill} width="20px" alt='' />)}
        {SCORE && Array.from({ length: 5 - Math.round(SCORE) }, (_, i) => <img key={i} src={starEmpty} width="20px" alt='' />)}
      </div>

      <div className='messageCommentData'>
        <div className='messageComment'>
          <div className='userCommentData'>
            <span>{exeption.name} ({exeption.role})</span>
            <span>{exeption.date}, {exeption.time}</span>
          </div>
          <hr></hr>
          {MESSAGE}
        </div>
      </div>
      {(user === USER_ID || admin === true) && <img src={deleteIcon} className="delBasket" onClick={() => deleteComment(ID)} alt='del'/>}
    </div>
  )
}
