import React, { useState } from 'react'
import './TableCell.css'

import ToggleList from '../../../templates/CellTemplate/ToggleList'
import InputPlace from '../../../templates/CellTemplate/InputPlace'
import ColorBlock from '../../../templates/CellTemplate/ColorBlock'
import SimpleBlock from '../../../templates/CellTemplate/SimpleBlock'
import DateBlock from '../../../templates/CellTemplate/DateBlock'

import { exeptionsDataForApiEdit } from '../../../../globalvVariable'

export default function TableCell({ cellId, cellVal, valToggleList, changeValCell, stateRow }) {

  const [oldCellVal] = useState(cellVal)
  const [value, setValue] = useState()

  const defaultProps = {
    id: cellId,
    changeValCell: changeValCell
  }

  const checkDate = cellId.toLowerCase().includes("date")

  const exceptions = {
    toggleList: valToggleList,
    text: Object.keys(exeptionsDataForApiEdit).includes(cellId) && exeptionsDataForApiEdit[cellId].conditionOutput !== "color",
    color: Object.keys(exeptionsDataForApiEdit).includes(cellId) && exeptionsDataForApiEdit[cellId].conditionOutput === "color",
    simpleWithList: !valToggleList,
    date: checkDate,
    simple: cellId !== "COLOR" && !checkDate,
  }

  return (
    <td key={cellId} className={cellId === "ACTIVENAME" ? "tableCellName" : ""}>
      {stateRow ?
        <div>
          {exceptions.toggleList && <ToggleList {...defaultProps} val={cellVal} list={valToggleList} />}
          {exceptions.text && <InputPlace {...defaultProps} value={value} change={setValue} type={exeptionsDataForApiEdit[cellId].conditionOutput} />}
          {exceptions.date && <InputPlace {...defaultProps} value={value} change={setValue} type="date" />}
          {exceptions.simpleWithList && <SimpleBlock val={oldCellVal} />}
        </div>
        :
        <div>
          {exceptions.color && <ColorBlock val={cellVal} />}
          {exceptions.simple && <SimpleBlock val={cellVal} />}
          {exceptions.date && <DateBlock val={cellVal} />}
        </div>
      }
    </td>
  )
}


