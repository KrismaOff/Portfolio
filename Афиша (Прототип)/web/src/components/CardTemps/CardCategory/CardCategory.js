import React from 'react'
import './CardCategory.css'

import { Link } from 'react-router-dom'

export default function CardCategory({ name, path, pathArr }) {

  const checkPath = (path, pathArr) => {
    let winPath = window.location.pathname, res = false;
    if (pathArr) pathArr.map(val => { if (val === winPath) res = true; return res })
    else if (path === winPath) res = true
    return res
  }
  

  return (
    <Link className='CardCategoryLink' to={path}>
      <div className={checkPath(path, pathArr) ? "CardCategoryContAct" : "CardCategoryCont"}>{name}</div>
    </Link>
  )
}
