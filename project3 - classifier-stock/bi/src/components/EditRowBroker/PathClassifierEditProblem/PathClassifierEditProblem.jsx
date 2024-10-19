import React from 'react'
import "./PathClassifierEditProblem.css"

import useRecieveDataTablesList from '../../../hooks/Recieve_API/useRecieveDataTablesList'

export default function PathClassifierEditProblem({ activePage }) {

  const [data] = useRecieveDataTablesList()

  const selectionClName = (key) => {
    let name;
    if (activePage && data) {
      Object.keys(data).map(keyData => {
        if (key === data[keyData].CLNAME) {
          name = data[keyData].CLDESC
        }
        return name
      })
      return name
    }
  }

  return (
    <div className='pathClassifierEditProblem'>
      {Object.keys(activePage).map(key => {
        let lastValActivePage = Object.keys(activePage).reverse()[0]
        return <span key={key} className={lastValActivePage === key ? "activePathClassifieProblem" : ""}> -&nbsp;{selectionClName(key)}&nbsp;</span>
      })}
    </div>
  )
}
