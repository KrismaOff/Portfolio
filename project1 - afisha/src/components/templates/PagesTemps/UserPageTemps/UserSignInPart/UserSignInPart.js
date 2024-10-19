import React from 'react'
import './UserSignInPart.css'
import { useNavigate } from 'react-router-dom'

import useHandleSign from '../../../../../hooks/UserPage/useHandleSign'

export default function UserSignInPart({ side, act }) { //    border-radius: 0 30px 30px 0;

  const exeptions = [
    { id: "USER_EMAIL", placeholder: "Почта", type: "mail" },
    { id: "USER_PASSWORD", placeholder: "Пароль", type: "password" },
  ]

  const [sign, changeFunc, status] = useHandleSign("signin", exeptions.length)

  const navigate = useNavigate()
  const changeSt = () => {
    if (!act) navigate("/User/SignIn")
    else sign()
  }

  return (
    <div className="signInPart">
      <h1>Войти</h1>
      <span>Чтобы воспользоваться всем функционалом платформы, пожалуйста, войдите в систему</span>
      {act && <>
        {exeptions.map((val, i) => <input className='inputSignIn' onChange={changeFunc} key={i} {...val} />)}
        {status.status && <span className='error'>{status.error}</span>}
      </>}
      <button className='signInBtn' onClick={changeSt}>Войти</button>
    </div>
  )
}
