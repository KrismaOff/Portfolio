import React, { useState } from 'react'
import './AdressCont.css'

import DetailsString from '../../General/DetailsString'

import AdressEdit from '../AdressEdit'

export default function AdressCont({ adress }) {

  const [stateAdd, setStateAdd] = useState(false)

  const handleChangeAdd = () => setStateAdd(prev => !prev)

  return (
    <div className='adress_cont'>
      <div className="profile_page_title">Адреса</div>
      <DetailsString title="Сохраняйте новые удобные адреса для быстрого оформления заказа" />
      <div className='adress_cont_cont'>
        <div className="profile_page_title_sec">Сохраненные адреса</div>
        <div onClick={handleChangeAdd} className="adress_cont_cont_btn">{!stateAdd ? <><span>+</span> добавить новый адресс</> : <span className='retCan'>Отмена</span>}</div>
        {stateAdd && <AdressEdit/>}
        <hr />
        {adress.map(obj => <AdressEdit object={obj} key={obj.id} />)}
      </div>
    </div>
  )
}
