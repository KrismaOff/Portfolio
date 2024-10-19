import React, { useEffect } from 'react'
import './RegistrationPage.css'

import { useLoaderData } from 'react-router'

import useRedirectPage from '../../../hooks/general/useRedirectPage'
import useCheckLog from '../../../hooks/general/useCheckLog'
import useCheckWindowSize from '../../../hooks/general/useCheckWindowSize'

import LogRogTepmp from '../../Templates/RegistrationPage/LogRegTemp'

export default function RegistrationPage() {

  const [size] = useCheckWindowSize()

  const [log] = useCheckLog()
  useRedirectPage(!log, "profile")

  const [mode] = useLoaderData()

  const style = {
    log: { background: "#84BFE1", },
    reg: { background: "#B3E140", },
  }

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (size) footer.style.display = "none"

  }, [mode, size])

  return (
    <div className='registration_page'>
      <div className='registration_page_bg' style={style[mode]} />
      {mode === "log" ?
        <LogRogTepmp mode="log" /> :
        <LogRogTepmp mode="reg" />
      }
    </div>
  )
}
