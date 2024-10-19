import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

import { PageContext } from '../../App/App'

import Icon from '../General/Highlight/HighlightPage/Icon'
import HeaderSearch from './HeaderSearch/HeaderSearch'
import { generalPageLink } from '../../../assets/varibles/generalData'

export default function Header({ location }) {

  const value = useContext(PageContext)

  const iconData = ["basket", "heart", "profile"]
  const buttonData = [
    {
      name: "Каталог",
      path: "catalog"
    },
    {
      name: "Бренды",
      path: "brand"
    },
    {
      name: "Контакты",
      path: "contact"
    },
  ]
  
  const iconGroup = iconData.map((name, i) => <Icon state={value} name={name} size={[23, 24]} key={i} />)

  return (
    <header>
      <div className='header'>
        <div className='header_main_block'>
          <Link to={generalPageLink.main.path} className='header_name'>Субкультура</Link>
          <div className='header_group_button'>
            {buttonData.map((obj, i) => <Link key={i} className='header_button' to={generalPageLink[obj.path].path} state={value}>{obj.name}</Link>)}
          </div>
          <div className='header_group_icon'>
            <HeaderSearch />
            {iconGroup}
          </div>
        </div>
          
          <div className='header_main_block_adapt'>{iconGroup}</div>
      </div>
    </header>
  )
}
