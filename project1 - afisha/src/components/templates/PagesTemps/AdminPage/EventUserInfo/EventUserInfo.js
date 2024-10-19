import React from 'react'
import "./EventUserInfo.css"

import useGetUniversalData from '../../../../../hooks/handleActionDB/RecieveDATA/useGetUniversalData'

export default function EventUserInfo({ title, name, data, rows }) {

  const { universalData } = useGetUniversalData(name, data)

  const handleObj = (obj) => {
    let res = {}
    obj && obj.map(val => {
      let id = name + "_" + val;
      universalData && Object.keys(universalData).map((idUser, i) => {
        let shortObj = universalData[idUser][id]
        res[i] ??= []
        res[i].push(Array.isArray(shortObj) ? shortObj.join(" ") : shortObj)
        return res
      })
      return res
    })
    return res
  }

  const exeptions = {
    handObjLength: data && Object.keys(handleObj(rows)).length !== 1 && data.length !== 0,
    leng: data && data.length
  }

  return (
    <tr className='eventUserInfo'>
      <th>{title}{data && exeptions.handObjLength && <>: {exeptions.leng}</>}</th>
      <th className='eventUserInfoTh'>
        {exeptions.leng === 0 ? "-" : Object.keys(handleObj(rows)).map(num => <span key={num}>{exeptions.handObjLength && <>{Number(num) + 1}:</>} {handleObj(rows)[num].join(" - ")}</span>)}
      </th>
    </tr>
  )
}
