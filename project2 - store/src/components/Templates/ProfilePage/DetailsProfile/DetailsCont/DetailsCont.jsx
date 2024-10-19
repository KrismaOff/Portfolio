import React, { useState } from 'react'
import './DetailsCont.css'

import DetailsStringInfo from '../DetailsStringInfo'
import DetailsString from '../../General/DetailsString'

export default function DetailsCont() {

  const [state, setState] = useState(false)

  const data = {
    lastname: {
      title: "фамилия",
      value: "Иванов",
      edit: state,
    },
    name: {
      title: "имя",
      value: "Иван",
      edit: state,
    },
    mail: {
      title: "почта",
      value: "IvanovIvan@mail.ru",
      edit: state,
    },
    phone: {
      title: "телефон",
      value: "+79251234567",
      edit: state,
    },
    date: {
      title: "дата рождения",
      value: "01.02.1989",
      edit: state,
    },
    password: {
      title: "пароль",
      value: "password123",
      edit: state,
    },
  }

  return (
    <div className='details_cont'>
      <div className="profile_page_title">Детали аккаунта</div>
      <div className='profile_page_cont'>
      <DetailsStringInfo id="lastname" {...data.lastname} />
      <DetailsStringInfo id="name" {...data.name} />
      <DetailsStringInfo id="mail" {...data.mail} />
      {state && <DetailsString title="Проверьте свой адрес электронной почты и подтвердите в сопроводительном письме"/>}

      {state && <button>Подтвердить</button>}
      </div>
      <div className='profile_page_btn' onClick={() => setState(prev => !prev)}>Редактировать</div>
    </div>
  )
}
