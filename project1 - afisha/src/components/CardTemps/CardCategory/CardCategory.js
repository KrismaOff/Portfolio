import React from 'react'
import './CardCategory.css'

import { Link } from 'react-router-dom'

export default function CardCategory({ name, path, pathArr, actBtn, setActButton, id }) {

  const checkPathAuto = (id, actBtn, path, pathArr) => {

    if (actBtn) return actBtn === id ? "CardCategoryContAct" : "CardCategoryCont" 
    else {
      let winPath = window.location.pathname, res = "CardCategoryCont";
      if (pathArr) pathArr.map(val => { if (val === winPath) res = "CardCategoryContAct"; return res })
      else if (path === winPath) res = "CardCategoryContAct"
      return res
    }
  }

  return (
    <Link className='CardCategoryLink' to={path} onClick={() => id && setActButton(id)}>
      <div className={checkPathAuto(id, actBtn, path, pathArr)}>{name}</div>
    </Link>
  )
}
