import React from 'react'
import './TableHeader.css'
import BtnIcon from '../../../templates/BtnIcon'
import addIcon from '../../../../img/addIcon.svg'

export default function TableHeader({ columnName, addNewRow, tableName }) {

    return (
        <thead className='columnFixed'>
            {tableName && <tr><th colSpan={100}>{tableName.cl_name}</th></tr>}
            <tr>
                {columnName && columnName.map(name => <th key={tableName + "-" + name}>{name}</th>)}
                <th className='btnAddRow' colSpan={2}>
                    <BtnIcon
                        func={() => addNewRow(false)}
                        icon={addIcon}
                        purpose="iconBtn"
                    />
                </th>
            </tr>
        </thead>
    )
}
