import React, { useState } from 'react'
import './ProfilePage.css'

import useRedirectPage from '../../../hooks/general/useRedirectPage'
import useCheckLog from '../../../hooks/general/useCheckLog'

import NavBarProfile from '../../Templates/ProfilePage/NavBarProfile'
import AdressCont from '../../Templates/ProfilePage/AdressProfile/AdressCont'
import MethodPayProfile from '../../Templates/ProfilePage/MethodPayProfile/MethodPayProfile'
import DetailsCont from '../../Templates/ProfilePage/DetailsProfile/DetailsCont'
import OrderCont from '../../Templates/ProfilePage/OrderReturnProfile/OrderCont'

import { useLoaderData } from 'react-router'

export default function ProfilePage() {

  const [adress] = useLoaderData()
  const [log] = useCheckLog()
  useRedirectPage(log, "authorization,reg")

  const navBarData = {
    detail: {
      title: "детали аккаунта",
      comp: <DetailsCont/>,
      icon: "profile"
    },
    order: {
      title: "заказы и возвраты",
      comp: <OrderCont/>,
      icon: "edit"
    },
    adress: {
      title: "адреса",
      comp: <AdressCont adress={adress}/>,
      icon: "adress"
    },
    // pay: {
    //   title: "методы оплаты",
    //   comp: <MethodPayProfile/>,
    // },
  }

  const [actTemp, setActTemp] = useState("detail")

  return (
    <div className='profile_page'>
      <NavBarProfile data={navBarData} func={setActTemp} active={actTemp}/>
      {navBarData[actTemp].comp}
    </div>
  )
}
