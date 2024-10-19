import React from 'react'
import './TableBody.css';

import useCheckEmptyToggleList from '../../../../hooks/Tabel/HandleTableToggleListData/useCheckEmptyToggleList';

import TableRow from '../TableRow'

export default function TableBody({ rows, tableName }) {

    const checkEmptyToggleList = useCheckEmptyToggleList()

    return (
        <tbody>
            {Object.keys(rows).map(key => {
                return (
                    <TableRow
                        tableName={tableName}
                        key={key}
                        rowId={rows[key].ID}                            // Id строки
                        rowVal={rows[key]}                              // Данные строк            
                        toggleList={checkEmptyToggleList(rows[key])}    // Данные выпадающих списков (если они есть)
                    />
                )
            })}
        </tbody>
    )
}
