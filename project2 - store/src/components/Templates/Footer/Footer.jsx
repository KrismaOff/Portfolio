import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

import InfoBlock from './InfoBlock'
import useCheckWindowSize from '../../../hooks/general/useCheckWindowSize'
import Icon from '../General/Highlight/HighlightPage/Icon'

import { generalPageLink } from '../../../assets/varibles/generalData'

export default function Footer() {

  const [size] = useCheckWindowSize()

  const iconData = ["TG", "VK", "YT"]
  const info = [
    {
      name: "Контакты",
      textF: {
        name: "8-888-888-88-88",
        path: "/",
      },
      textS: {
        name: "subkul@mail.ru",
        path: "/",
      },
    },
    {
      name: "О нас",
      textF: {
        name: "О магазине",
        path: "/",
      },
      textS: {
        name: "Адрес",
        path: "/",
      },
    }
  ]

  return (
    <footer>
      <div className='footer_cont'>
        <div className="footer_part_left">
          <Link to={generalPageLink.main.path} className='footer_title'>Субкультура</Link>
          <div className='footer_icon_group'>
            {iconData.map((name, i) => <Icon name={name} size={!size ? [30, 30] : [25, 25]} color='white' key={i} />)}
          </div>
        </div>
        <div className='footer_part_right'>
          {info.map((val, i) => <InfoBlock key={i} {...val} />)}
        </div>
      </div>
    </footer>
  )
}
