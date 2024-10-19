import React from 'react'
import "./RowTableReport.css"

import useChangeCheckBoxTable from '../../../../hooks/MakeReport_Broker/RowTabel/useChangeCheckBoxTable'
import useCheckCheckBoxAllAct from '../../../../hooks/MakeReport_Broker/RowTabel/useCheckCheckBoxAllAct'


export default function RowTableReport({ checkBox, data, id, activeButton }) {

  const [val, setVal] = useCheckCheckBoxAllAct(id, activeButton)
  const onChange = useChangeCheckBoxTable(id, checkBox, val, setVal)

  return (
    <tr>
      {Object.keys(data).map(keys => {
        if (keys !== "ID" && keys !== "OWNKURS" && keys !== "PREF")
          return <td key={keys} id={data[keys]} >{data[keys]}</td>
        return null
      })}
      {checkBox && <td><input onChange={onChange} checked={val} type="checkbox"></input></td>}

    </tr>
  )
}
