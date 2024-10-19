import React from 'react'
import './UserSignUpPart.css'
import { useNavigate } from 'react-router-dom'

import SelectUserPerson from '../../../mainTemps/SelectUserPerson/SelectUserPerson'
import useHandleSignUp from '../../../../../hooks/UserPage/useHandleSign'

export default function UserSignUpPart({ side, act }) { // border-radius: 30px 0 0 30px;

  const exeptions = [
    { id: "USER_NAME", placeholder: "Фамилия и имя", type: "text" },
    { id: "USER_EMAIL", placeholder: "Почта", type: "mail" },
    { id: "USER_PHONE", placeholder: "Телефон", type: "tel" },
    { id: "USER_PASSWORD", placeholder: "Пароль", type: "password" },
  ]
  
  const [sign, changeFunc, status] = useHandleSignUp("signup", exeptions.length + 1)

  const navigate = useNavigate()
  const changeSt = () => {
    if (!act) navigate("/User/SignUp")
    else sign()
  }

  return (
    <div className="signUpPart" style={{ borderRadius: side }}>
      <h1>Создать аккаунт</h1>
      <span>Чтобы воспользоваться всем функционалом платформы, пожалуйста, зарегистрируйтесь в системе</span>
      {act && <>
          <SelectUserPerson defValue="Выберите себя" data="ACCESS_USER" goal="DESCRIBE_USER" func={changeFunc} />
          {exeptions.map((val, i) => <input className='inputSignUp' key={i} {...val} onChange={changeFunc}/>)}
          {status.status && <span className='error'>{status.error}</span>}
      </>}
      <button className='signUpBtn' onClick={changeSt}>Зарегистрироваться</button>
    </div>
  )
}
