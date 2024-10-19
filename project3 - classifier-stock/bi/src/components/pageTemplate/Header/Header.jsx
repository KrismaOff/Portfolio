import React from 'react'

import "./Header.css"
import icon from '../../../img/icon.png'
import Date from '../../templates/Date'

export default function Header() {
  
  return (
    <div className='mainContainerHeader'>
      <div className='iconHeader'>
        <img width="50px" src={icon} alt="icon" />
      </div>

      <p className='titleHeader'>Аналитика инвестиционного портфеля</p>

      <Date/>

    </div>
  )
}

