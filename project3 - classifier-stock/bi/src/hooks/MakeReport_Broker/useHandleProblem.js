import { useState } from "react"

export default function useHandleProblem(setActivePage) {

    const [classifier, setClassifier] = useState({ cl_key: ""})
    const [problems, setProblems] = useState()

    const handleReportProblem = (classifierKey, problemName) => {
        let filterProblemName = problemName.filter((item, index) =>  problemName.indexOf(item) === index )
        
        setActivePage("REPORT_PROBLEM")
        setClassifier({ cl_key: classifierKey})
        setProblems(filterProblemName)
    }
    return [classifier, problems, handleReportProblem]
}   
