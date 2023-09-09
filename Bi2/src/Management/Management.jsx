import React from 'react'
import './Management.css'

import Navigation from '../Navigation'

import OutputOfReports from '../OutputOfReports/OutputOfReports'
import EditDB from '../EditDB'
import ReplenishmentDB from '../ReplenishmentDB/ReplenishmentDB'
import Table from '../TablePage/Table'

import useSwitchPageManagment from '../../hooks/Managment/useSwitchPageManagment'

export default function Management() {

  const [activeComp, switchPage] = useSwitchPageManagment()                  // переключение страниц + память состояния отчетов

  return (
    <div>
      <Navigation switchPage={switchPage} activeComp={activeComp} />

      {activeComp === "OUTPUTOFREPORTS" && <OutputOfReports />}
      {activeComp === "EDITDB" && <EditDB />}
      {activeComp === "REPLENISHMENTDB" && <ReplenishmentDB/> }
      {activeComp === "CLASSIFIER" && <Table/>}
    </div>
  )
}





