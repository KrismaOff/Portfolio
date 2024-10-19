import React, { useState } from 'react'
import "./OutputOfReports.css"

import CalendarTemp from '../CalendarTemp'
import ReportsTabel from '../ReportsTabel'
import ContainerLoopProblem from '../../../AddNewRowPage/ContainerLoopProblem'

import useHandleProblem from '../../../../hooks/MakeReport_Broker/useHandleProblem'

export default function OutputOfReports() {

    const [activePage, setActivePage] = useState("REPORT_BROKER")
    
    const [classifier, problems, handleReportProblem] = useHandleProblem(setActivePage)
    const [date, setDate] = useState()

    return (
        <div>
            <div className='outputOfReports'>
                {activePage === "REPORT_BROKER" && <CalendarTemp reportDate={setDate} />}
                {activePage === "REPORT_BROKER" && <ReportsTabel date={date} handleReportProblem={handleReportProblem} />}
                {activePage === "REPORT_PROBLEM" && <ContainerLoopProblem classifierKeyName={classifier} problems={problems} />}
            </div>

        </div>
    )
}

