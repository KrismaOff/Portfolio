import React, { useContext } from 'react'
import './Header.css'

import IconWeb from '../templates/mainTemps/iconWeb'

import { socWeb } from '../../helper/data'

import InstIcon from '../../assets/img/IconWeb/inst.svg'
import VKIcon from '../../assets/img/IconWeb/vk.svg'
import WebIcon from '../../assets/img/IconWeb/web.svg'
import Profile from '../../assets/img/IconWeb/profile.svg'
import Ithub_Icon_Dark from '../../assets/img/IconWeb/Ithub_Icon_Dark.svg'

import СategoryCarusel from '../FilterTemps/СategoryCarusel'
import SearchInput from '../FilterTemps/SearchInput/SearchInput'

import { StatusUserContext } from '../App/App'

export default function Header() {

  const { user } = useContext(StatusUserContext)

  const exeptions = (link) => {
    let res;
    if (!user) res = link.guest
    // else if (admin) res = link.admin
    else res = link.user
    return res;
  }

  return (
    <header>
      <div className='header'>
        <div className='projectNameIconCont'>
          <img className='logo' src={Ithub_Icon_Dark } alt="" />
          <div className='projectName'>IThub Афиша</div>
        </div>
        
        <SearchInput />

        <div className='iconWebGroup'>
          <IconWeb img={Profile} link={exeptions(socWeb.profile)} page={true}/>
          <IconWeb img={InstIcon} link={socWeb.inst} />
          <IconWeb img={VKIcon} link={socWeb.vk} />
          <IconWeb img={WebIcon} link={socWeb.web}/>
        </div>

      </div>
      <СategoryCarusel />
    </header>
  )
}
