import React from 'react'
import './BtnGroupProblem.css'

import useAddRow from '../../../hooks/Form_AddRow/useAddRow'
import useBackClassifier from '../../../hooks/Form_AddRow/useBackClassifier'

export default function BtnGroupProblem({ problem, problemArr, setProblemArr, setToggleList, templateForRow, templateToAdd, activePage, setActivePage, classifierId, setClassifier }) {

    const backClassifier = useBackClassifier(activePage, setActivePage, setClassifier)
    const addRow = useAddRow(setToggleList, classifierId, activePage, setActivePage, setClassifier, problem, setProblemArr, problemArr)

    const checkAddRow = () => {
        let objWithInptplace = {};

        Object.keys(templateForRow).map(key => {
            let keyFirstElem = Object.keys(templateForRow)[0]

            // objWithInptplace[key] = 
            objWithInptplace[key] = ""

            // console.log(templateForRow);

            if (templateToAdd[key] !== undefined) objWithInptplace[key] = templateToAdd[key]
            else if (problem !== undefined) objWithInptplace[keyFirstElem] = problem
            return objWithInptplace;
        })


        if (window.confirm("Создать новую строку?")) {

            Object.keys(objWithInptplace).map(key => {
                if (objWithInptplace["ACTPRICEBUY"] === "") objWithInptplace["ACTPRICEBUY"] = 0
                if (objWithInptplace["ACTPRICEAVG"] === "") objWithInptplace["ACTPRICEAVG"] = 0
                if (objWithInptplace[key] === "") objWithInptplace[key] = null
                return objWithInptplace;
            })

            addRow(objWithInptplace)
            //console.log(objWithInptplace);

        }

    }

    return (
        <div className='btnForm'>
            <button className='btnGroupRowProblem Send' onClick={checkAddRow}>Создать</button>
            {Object.keys(activePage).length > 1 && <button onClick={backClassifier} className='btnGroupRowProblem Back'>Вернуться</button>}
        </div>
    )
}