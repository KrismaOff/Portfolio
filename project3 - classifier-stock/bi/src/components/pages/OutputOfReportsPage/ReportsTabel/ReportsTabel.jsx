import React from 'react'
import './ReportsTabel.css'

import RowTableReport from '../RowTableReport'

import useSwitchCheckBox from '../../../../hooks/MakeReport_Broker/Tabel/useSwitchCheckBox'
import useSendReportHandleData from '../../../../hooks/MakeReport_Broker/Tabel/useSendReportHandleData'

export default function ReportsTabel({ date, handleReportProblem, foundFiles, checkBox }) {

  const [reportsData, activeButton, swithcCheckBox] = useSwitchCheckBox()
  const sendReportHandleData = useSendReportHandleData(date, activeButton, reportsData, handleReportProblem)

  const exceptions = {
    reports: foundFiles === undefined && reportsData,
    found: foundFiles !== undefined
  }


  return (
    <div>

      <table className='tableReport'>
        <thead>
          <tr>
            <th>Брокеры</th>
            <th>Клиенты</th>
            <th>Счет</th>
            {exceptions.reports && <td><input onChange={swithcCheckBox} name="allBtn" type="checkbox"></input></td>}
          </tr>
        </thead>

        {exceptions.reports && <tbody>
          {Object.keys(reportsData).map(key => {
            return <RowTableReport
              activeButton={activeButton}
              key={key}
              checkBox={swithcCheckBox}
              data={reportsData[key]}
              id={reportsData[key].ID}
            />
          })}
        </tbody>}

        {exceptions.found && <tbody>
          {Object.keys(foundFiles).map(key => {
            return <RowTableReport
              key={key}
              checkBox={checkBox}
              data={foundFiles[key]}
              id={foundFiles[key].Sogl}
            />
          })}
        </tbody>}

      </table>
      {exceptions.reports && <button className='sendReport' onClick={sendReportHandleData}>Сформировать отчет</button>}
      {/* <button className='sendReport'>Загрузить сформированный отчет</button> */}
      {/* <button className='sendReport' onClick={() => handleReportProblem("cl_actives", ["2233", "dssd", "аввава"])}>Создать проблему</button> */}
    </div>
  )
}
