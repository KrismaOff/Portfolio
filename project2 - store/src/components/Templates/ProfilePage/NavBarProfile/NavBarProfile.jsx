import React from 'react'
import './NavBarProfile.css'

import svg from '../../../../assets/image/svg'

export default function NavBarProfile({ data, func, active }) {

  const activePlus = (key) => active === key ? "white" : "black"
  const activeMinus = (key) => active === key ? "black" : "white"

  const logOut = () => {
    if (window.confirm("Вы уверены что хотите выйти?")) {
      // localStorage.setItem("logIdUser", false)
    }
  }

  return (
    <div>
      <div className='nav_bar_profile'>
        <div className='profile_page_title'>Аккаунт</div>
        {Object.keys(data).map(key => <p key={key} onClick={() => func(key)}>{data[key].title}</p>)}
        <p onClick={logOut}>выйти</p>
      </div>
      <div className='nav_bar_profile_adapt'>
        {Object.keys(data).map(key => <span
          key={key}
          onClick={() => func(key)}
          style={{background: activePlus(key), transition: ".2s"}}
        >{svg(data[key].icon, 20, 20, activeMinus(key))}</span>)}
        <span onClick={logOut}>{svg("logout", 20, 20, "white")}</span>
      </div>
    </div>
  )
}
