import React from 'react'
import './IconWeb.css'

import { Link } from 'react-router-dom'

export default function IconWeb({ img, link, page }) {
  return (
    <>
      {page ?
        <Link to={link} className='imgCont'>
          <img className='iconImg' src={img} alt="" />
        </Link>
        :
        <div className='imgCont' onClick={() => window.open(link)}>
          <img className='iconImg' src={img} alt="" />
        </div>
      }

    </>
  )
}
