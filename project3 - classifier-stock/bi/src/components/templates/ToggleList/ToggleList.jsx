import React from 'react'
import './ToggleList.css'

import useChangeClassifier from '../../../hooks/Tabel/ToggleList/useChangeClassifier'
import useRecieveDataTablesList from '../../../hooks/Recieve_API/useRecieveDataTablesList'

export default function ToggleList({ setClassifier }) {

    const [data] = useRecieveDataTablesList()
    const [selectedClassifier, changeClassifier] = useChangeClassifier(data, setClassifier)

    return (
        <div className='listHeaderWrapper'>
            <select className='listHeader' onChange={changeClassifier}>
                <option defaultChecked>{selectedClassifier}</option>
                {data && data.map(val => <option className='listHeaderOpt' key={val.CLNAME}>{val.CLDESC}</option>)}
            </select>
        </div>
    )
}
