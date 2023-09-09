import React, { useState } from 'react'
import "./TableRow.css"

import TableCell from '../../TablePage/TableCell'

import TableRowDelEditBtn from '../TableRowDelEditBtn/TableRowDelEditBtn';
import useHandleToggleList from '../../../hooks/Tabel/HandleTableToggleListData/useHandleToggleList';

export default function TableRow({ rowId, rowVal, toggleList, tableName }) {

    const [stateRow, setStateRow] = useState(false)         // Состояние выпадающего списка (акт/не_акт)
    const [valRowVal, setValRowVal, valArrData, processedToggleList] = useHandleToggleList(rowVal, toggleList)

    const changeValCell = (val, id) => {                    // Меняет значение ячеек
        setValRowVal(prev=> {return{ ...prev, [id]: val }})
    }

    return (
        <tr className={stateRow ? "rowActive" : ""} key={rowId}>
            {valArrData().map(key => {
                return (
                    <TableCell
                        cellId={key}                                                            // id ячейки
                        cellVal={valRowVal[key]}                                                // значение ячейки
                        valToggleList={valArrData()[0] !== key && processedToggleList(key)}     // значения списка
                        changeValCell={changeValCell}                                           // изменения ячейки 
                        stateRow={stateRow}                                                     // активация выпадающий список
                        key={key}
                    />)
            })}

            <TableRowDelEditBtn
                classifierId={tableName}
                toggleList={toggleList}
                rowVal={rowVal}
                rowId={rowId}
                stateRow={stateRow}
                setStateRow={setStateRow}
                valRowVal={valRowVal}
                setValRowVal={setValRowVal}
            />
        </tr>
    )
}
