import React from 'react'
import './TableRowDelEditBtn.css'
import BtnIcon from '../../templates/BtnIcon'

import editIcon from '../../../img/editIcon.svg';
import deleteIcon from '../../../img/deleteIcon.svg'
import downloadIcon from '../../../img/downloadIcon.svg'

import useDeleteRow from '../../../hooks/Tabel/BtnEditDelete/useDeleteRow';
import useEditRow from '../../../hooks/Tabel/BtnEditDelete/useEditRow';

export default function TableRowDelEditBtn({ classifierId, toggleList, rowVal, rowId, stateRow, setStateRow, valRowVal, setValRowVal }) {

    const deleteRow = useDeleteRow(classifierId.cl_key)
    const editRow = useEditRow(classifierId.cl_key)


    const handlerStateRow = () => {             // Показывает / Скрывает выпадающий список + передача данных
        if (stateRow) {
            if (window.confirm("Сохранить данные?")) {  // Сохранение строки / отправка на БД   
                editRow(valRowVal)
                setStateRow(false)
            } else {
                setStateRow(false)
                setValRowVal(rowVal)
            }
        } else setStateRow(true)
    }
    const checkDeleteRow = () => {              // Проверка, хочет ли пользователь удалить строку
        if (window.confirm("Удалить строку?")) {  // Удаление строки / отправка на БД   
            deleteRow(rowId)
        }
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
