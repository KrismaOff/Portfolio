import React, { useState } from 'react'
import "./Table.css"

import TableHeader from '../TableHeader'
import TableBody from '../TableBody'
import InputsAddRow from '../../../AddNewRowPage/InputsAddRow'

import ToggleList from '../../../templates/ToggleList'
import Loading from '../../../templates/Loading'
import useHandleDataTable from '../../../../hooks/Tabel/HandleTableToggleListData/useHandleDataTable'

export default function Table({classifierRoot, toggleList=true}) {

  const [activeTableState, setActiveTableState] = useState(true)
  const [classifier, setClassifier] = useState(classifierRoot) 

  const [rows, columnName, loadingState] = useHandleDataTable(classifier)

  return (
    <div>
      {toggleList && <ToggleList setClassifier={setClassifier} />}
      {loadingState && <Loading />}

      {!loadingState && activeTableState && Object.entries(rows).length !== 0 &&
        <table>
          <TableHeader
            tableName={classifier}
            columnName={columnName}
            addNewRow={setActiveTableState}
          />
          <TableBody
            tableName={classifier}
            rows={rows}
          />
        </table>
      }
      {!loadingState && !activeTableState && <InputsAddRow classifierKeyName={classifier}/>}

    </div>
  )
}
