import React, { useState } from 'react'
import './TableCell.css'

import ToggleList from '../../templates/CellTemplate/ToggleList'
import InputPlace from '../../templates/CellTemplate/InputPlace'
import ColorBlock from '../../templates/CellTemplate/ColorBlock'
import SimpleBlock from '../../templates/CellTemplate/SimpleBlock'

export default function TableCell({ cellId, cellVal, valToggleList, changeValCell, stateRow }) {

  const [oldCellVal] = useState(cellVal)
  const [value, setValue] = useState()

  const defaultProps = {
    id: cellId,
    changeValCell: changeValCell
  }

  const exceptions = {
    toggleList: valToggleList,
    num: cellId === "ACTPRICEAVG" || cellId === "ACTPRICEBUY",
    color: cellId === "COLOR",
    simpleWithList: !valToggleList,
    simple: cellId !== "COLOR",
  }

  return (
    <td key={cellId} className={cellId === "ACTIVENAME" ? "tableCellName" : ""}>
      {stateRow ?
        <div>
          {exceptions.toggleList && <ToggleList {...defaultProps} val={cellVal} list={valToggleList} />}
          {exceptions.num && <InputPlace {...defaultProps} value={value} change={setValue} />}
          {exceptions.simpleWithList && <SimpleBlock val={oldCellVal} />}
        </div>
        :
        <div>
          {exceptions.color && <ColorBlock val={cellVal} />}
          {exceptions.simple && <SimpleBlock val={cellVal} />}
        </div>
      }
    </td>
  )
}


