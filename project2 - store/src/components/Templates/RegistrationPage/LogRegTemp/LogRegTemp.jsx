import React from 'react'
import './LogRegTemp.css'

import { Link } from 'react-router-dom'

import SnickersReg from '../../../../assets/image/registr/snickersReg.jpg'
import SnickersLog from '../../../../assets/image/registr/SnickersLog.jpg'
import { generalPageLink } from '../../../../assets/varibles/generalData'

import Button from '../../General/Button'
import LogRegIcon from '../LogRegIcon'

export default function LogRegTemp({ mode }) {

  const imgData = {
    reg: SnickersReg,
    log: SnickersLog,
  }

  const data = {
    reg: {
      title: "Регистрация",
      btn: "Зарегистрироваться",
      btn2: "Войти",
      text: "Регистрируясь, вы вступаете в программу лояльности и соглашаетесь с документами «Условия пользования» и «Политика конфиденциальности».",
      sign: "уже есть аккаунт",
    },
    log: {
      title: "Вход",
      btn: "Войти",
      btn2: "Регистрация",
      text: "Не помню пароль",
      sign: "еще нет аккаунта",
    }
  }

  const icons = {
    VKR: "https://vk.com/",
    GGR: "https://www.google.ru/",
    YDR: "https://ya.ru/"
  }

  const regButton = () => {
    console.log("reg");
  }
  const logButton = () => {
    console.log("log");
  }

  const path = mode && mode === "reg" ? "log" : "reg"
  const btn = mode && mode === "reg" ? regButton : logButton

  return (
    <div className='log_reg_temp' style={{ flexDirection: mode === "reg" ? "row" : "row-reverse" }}>
      <div className='log_reg_temp_form'>
        <div className='log_reg_temp_form_cont'>
          <div className="log_reg_temp_form_cont_title">{data[mode].title}</div>
          <div className='log_reg_temp_form_cont_in_c'>
            <div>Email</div>
            <input type="email" />
          </div>
          <div className='log_reg_temp_form_cont_in_c'>
            <div>Пароль</div>
            <input type="password" />
          </div>
          <div className='log_reg_temp_form_cont_accept'>{data[mode].text}</div>
          <Button func={btn} title={data[mode].btn} reverse border="none" />
          <div className='log_reg_temp_form_cont_line' />
          <div className='log_reg_temp_form_cont_or'>или через</div>
          <div className='log_reg_temp_form_cont_icons'>
            {Object.keys(icons).map(key => <LogRegIcon key={key} id={key} src={icons[key]} />)}
          </div>
          <div className='log_reg_temp_form_cont_have'>{data[mode].sign}</div>
          <Link to={`${generalPageLink.authorization.path}/${path}`} className='log_reg_temp_form_cont_link'>{data[mode].btn2}</Link>
        </div>
      </div>
      <div className='log_reg_temp_img'>
        <img src={imgData[mode]} alt="" />
      </div>
    </div>
  )
}
