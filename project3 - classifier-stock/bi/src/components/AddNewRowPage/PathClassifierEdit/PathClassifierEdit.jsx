import React from 'react'
import "./PathClassifierEdit.css"

import useRecieveDataTablesList from '../../../hooks/Recieve_API/useRecieveDataTablesList'

export default function PathClassifierEdit({ activePage, problemIndex }) {

  const [data] = useRecieveDataTablesList()

  const selectionClName = (key) => {
    let name;
    if (key.includes("cl_")) activePage && data && Object.keys(data).map(keyData => {
      if (key === data[keyData].CLNAME) name = data[keyData].CLDESC
      return name
    })
    return name
  }

  return (
    <div className='pathClassifierEditCont'>
      {problemIndex !== undefined && <div className='indexProblemReport'>{problemIndex + 1}</div>}
      <div className='pathClassifierEdit'>
        {Object.keys(activePage).map(key => {
          let lastValActivePage = Object.keys(activePage).reverse()[0]
          return <span key={key} className={lastValActivePage === key ? "activePathClassifier" : ""}>&nbsp; {selectionClName(key)}&nbsp;</span>
        })}
      </div>
    </div>
  )
}
