import React from 'react'
import './BtnGroup.css'

import useBackClassifier from '../../../hooks/Form_AddRow/useBackClassifier'
import useHandleRowBeforeAdd from '../../../hooks/Form_AddRow/useHandleRowBeforeAdd'
import useAddRow from '../../../hooks/Form_AddRow/useAddRow'

export default function BtnGroup({ setToggleList, templateForRow, templateToAdd, activePage, setActivePage, classifierId, setClassifier, problemName, problemsTotalNum, setProblemArr }) {

    const backClassifier = useBackClassifier(activePage, setActivePage, setClassifier)
    const addRow = useAddRow(setToggleList, classifierId, activePage, setActivePage, setClassifier, problemName, problemsTotalNum, setProblemArr)
    const handleRowBeforeAdd = useHandleRowBeforeAdd(templateForRow, templateToAdd, classifierId, problemName, addRow)
    const checkCanselRow = () => window.confirm("Выйти из создания строки?") && window.location.reload() 

    return (
        <div className='btnForm'>
            <button className='btnGroupRow Send' onClick={handleRowBeforeAdd}>Создать</button>
            {Object.keys(activePage).length > 1 && <button onClick={backClassifier} className='btnGroupRow Back'>Вернуться</button>}
            {!problemName && <button className='btnGroupRow Del' onClick={checkCanselRow}>Отменить</button>}
        </div>
    )
}

