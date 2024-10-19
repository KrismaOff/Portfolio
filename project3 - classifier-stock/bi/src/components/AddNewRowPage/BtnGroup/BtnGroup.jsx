import React from 'react'
import './BtnGroup.css'

import useBackClassifier from '../../../hooks/Form_AddRow/useBackClassifier'
import useAddRow from '../../../hooks/Form_AddRow/useAddRow'

export default function BtnGroup({ setToggleList, templateForRow, templateToAdd, activePage, setActivePage, classifierId, setClassifier }) {

    const backClassifier = useBackClassifier(activePage, setActivePage, setClassifier)
    const addRow = useAddRow(setToggleList, classifierId, activePage, setActivePage, setClassifier)

    const checkAddRow = () => {
        let objWithInptplace = {};

        Object.keys(templateForRow).map(key => {
            if (templateToAdd[key] !== undefined) objWithInptplace[key] = templateToAdd[key]
            else objWithInptplace[key] = ""
            return objWithInptplace;
        })



        if (window.confirm("Создать новую строку?")) {

            Object.keys(objWithInptplace).map(key => {
                if (objWithInptplace["ACTPRICEBUY"] === "") objWithInptplace["ACTPRICEBUY"] = 0 
                if (objWithInptplace["ACTPRICEAVG"] === "") objWithInptplace["ACTPRICEAVG"] = 0 
                if (objWithInptplace[key] === "") objWithInptplace[key] = null
				//console.log(objWithInptplace)
                return objWithInptplace;
            })

            addRow(objWithInptplace)
        }

        //console.log(objWithInptplace);


    }
    
    const checkCanselRow = () => { if (window.confirm("Выйти из создания строки?")) window.location.reload() }

    return (
        <div className='btnForm'>
            <button className='btnGroupRow Send' onClick={checkAddRow}>Создать</button>
            {Object.keys(activePage).length > 1 && <button onClick={backClassifier} className='btnGroupRow Back'>Вернуться</button>}
            <button className='btnGroupRow Del' onClick={checkCanselRow}>Отменить</button>
        </div>
    )
}

