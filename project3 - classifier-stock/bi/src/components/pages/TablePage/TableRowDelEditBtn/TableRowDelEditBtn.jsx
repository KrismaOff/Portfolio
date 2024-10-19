import React from 'react'
import './TableRowDelEditBtn.css'
import BtnIcon from '../../../templates/BtnIcon'

import editIcon from '../../../../img/editIcon.svg';
import deleteIcon from '../../../../img/deleteIcon.svg'
import downloadIcon from '../../../../img/downloadIcon.svg'

import useEditDelRow from '../../../../hooks/Tabel/useEditDelRow';

export default function TableRowDelEditBtn({ classifierId, toggleList, rowVal, rowId, stateRow, setStateRow, valRowVal, setValRowVal }) {

    const editDelRow = useEditDelRow(classifierId.cl_key)

    const handlerStateRow = () => {         
        if (stateRow) {
            if (window.confirm("Сохранить данные?")) {
                editDelRow(valRowVal, "Edit")
                setStateRow(false)
            } else {
                setStateRow(false)
                setValRowVal(rowVal)
            }
        } else setStateRow(true)
    }
    const checkDeleteRow = () => {
        if (window.confirm("Удалить строку?")) editDelRow(rowId, "Del")
    }

    return (
        <td className='btnTable'>
            <div className='iconBtnCont btnRowEdit'>
                {toggleList && <BtnIcon
                    func={handlerStateRow}
                    icon={stateRow ? downloadIcon : editIcon}
                    purpose="iconBtn"
                />}
            </div>
            <div className='iconBtnCont rowDelete'>
                <BtnIcon
                    func={checkDeleteRow}
                    icon={deleteIcon}
                    purpose="iconBtn"
                />
            </div>
        </td>
    )
}
