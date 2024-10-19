import React from 'react'
import './SelectCellWithKey.css'

import useGetUniversalData from '../../../../../hooks/handleActionDB/RecieveDATA/useGetUniversalData'
import SelectCellOption from '../SelectCellOption/SelectCellOption'

export default function SelectCellWithKey({ name, func, id, format, options }) {

  const { universalData } = useGetUniversalData(id, "all")

  return (
    <th className={format && Object.keys(format).at(0) === id ? "formatActTh" : ""}>
      <select className='selectCellAdPg' value={name} id={id ? id : "DATE"} onChange={e=>func(e)}>
        <option className='optionCellAdPgMn' disabled>{name}</option>
        {universalData?.map((val, i) => <SelectCellOption data={val} key={i}/>)}
        {options && Object.keys(options).map(key => <option key={key} id={key} className='optionCellAdPg'>{options[key]}</option>)}
      </select>
    </th>
  )
}
