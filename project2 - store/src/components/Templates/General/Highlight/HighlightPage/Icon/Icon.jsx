import React from 'react'
import { Link } from 'react-router-dom'
import './Icon.css'

import { generalPageLink } from '../../../../../../assets/varibles/generalData'
import src from '../../../../../../assets/image/svg'

export default function Icon({ state, name, size = [20, 20], color = "black", options}) {

  return (
    <div className='icon_block_cont' style={{...options}}>
      <Link to={generalPageLink[name]?.path} state={state} className='icon_block'>
        {src(name, size[0], size[1], color)}
      </Link>
    </div>
  )
}
