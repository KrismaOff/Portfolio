import React from 'react'
import './Management.css'

import Navigation from '../Navigation'

import OutputOfReports from '../../pages/OutputOfReportsPage/OutputOfReports'
import ReplenishmentDB from '../../pages/ReplenishmentDB/ReplenishmentPage'
import InputOutputPage from '../../pages/InputOutputPage'
import Table from '../../pages/TablePage/Table'
import EditDB from '../../pages/EditDBPage'

import useSwitchPageManagment from '../../../hooks/Managment/useSwitchPageManagment'

export default function Management() {

  const [activeComp, switchPage] = useSwitchPageManagment()                  // переключение страниц + память состояния отчетов

  return (
    <div>
      <Navigation switchPage={switchPage} activeComp={activeComp} />

      {activeComp === "OUTPUTOFREPORTS" && <OutputOfReports />}
      {activeComp === "REPLENISHMENTDB" && <ReplenishmentDB />}
      {activeComp === "INPUTOUTPUT" && <InputOutputPage/>}
      {activeComp === "CLASSIFIER" && <Table classifierRoot={{ cl_key: "", cl_name: "" }}/>}
      {activeComp === "EDITDB" && <EditDB />}
    </div>
  )
}





