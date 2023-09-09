import React, { useState } from 'react'
import "./Table.css"

import TableHeader from '../TableHeader'
import TableBody from '../TableBody/TableBody'
import InputsAddRow from '../../AddNewRowPage/InputsAddRow'

import ToggleList from '../../templates/ToggleList'
import Loading from '../../templates/Loading'

import useHandleDataTable from '../../../hooks/Tabel/HandleTableToggleListData/useHandleDataTable'

export default function Table() {

  const [activeTableState, setActiveTableState] = useState(true)
  const [classifier, setClassifier] = useState({ cl_key: "", cl_name: "" })

  const [rows, rowsIdName, columnName, loadingState] = useHandleDataTable(classifier)

  return (
    <div>
      <ToggleList setClassifier={setClassifier} />
      {loadingState && <Loading />}

      {!loadingState && activeTableState && Object.entries(rows).length !== 0 &&
        <table>
          <TableHeader
            tableName={rowsIdName}
            columnName={columnName}
            addNewRow={setActiveTableState}
          />
          <TableBody
            tableName={rowsIdName}
            rows={rows}
          />
        </table>
      }
      {!loadingState && !activeTableState && <InputsAddRow
        classifierKeyName={rowsIdName}
      />}

    </div>

  )
}
