import React, { useState } from 'react'
import "./TableRow.css"

import TableCell from '../../TablePage/TableCell'

import TableRowDelEditBtn from '../TableRowDelEditBtn/TableRowDelEditBtn';
import useHandleToggleListForRow from '../../../../hooks/Tabel/HandleTableToggleListData/useHandleToggleListForRow';

export default function TableRow({ rowId, rowVal, toggleList, tableName }) {

    const [stateRow, setStateRow] = useState(false)         // Состояние выпадающего списка (акт/не_акт)
    const [valRowVal, setValRowVal, processedToggleList] = useHandleToggleListForRow(rowVal, toggleList)

    const changeValCell = (val, id) => {                    // Меняет значение ячеек
        setValRowVal(prev=> {return{ ...prev, [id]: val }})
    }

    return (
        <tr className={stateRow ? "rowActive" : ""} key={rowId}>
            {Object.keys(valRowVal).filter(key => key !== "ID").map(key => {
                const exeptionsToggleList = tableName.cl_key !== 'cl_actives' && key !== 'OPERNAME'
                return (
                    <TableCell
                        cellId={key}                               // id ячейки
                        cellVal={valRowVal[key]}                   // значение ячейки
                        valToggleList={exeptionsToggleList && processedToggleList(key)}   // значения списка (есть список => редактировать | cl_actives - исключение)
                        changeValCell={changeValCell}              // изменения ячейки 
                        stateRow={stateRow}                        // активация выпадающий список
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
