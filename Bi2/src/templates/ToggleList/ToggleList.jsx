import React from 'react'
import './ToggleList.css'

import useChangeClassifier from '../../../hooks/Tabel/ToggleList/useChangeClassifier'
import useRecieveDataTablesList from '../../../hooks/Recieve_API/useRecieveDataTablesList'

export default function ToggleList({ setClassifier }) {

    const [data] = useRecieveDataTablesList()
    const [changeClassifier, selectedClassifier] = useChangeClassifier(data, setClassifier)

    return (
        <div className='listHeaderWrapper'>
            <select className='listHeader' onChange={changeClassifier}>
                <option>{selectedClassifier}</option>
                {data && data.map(val => {
                    if (val.CLDESC !== selectedClassifier) return <option className='listHeaderOpt' key={val.CLNAME}>{val.CLDESC}</option>
                    return true
                })}
            </select>
        </div>
    )
}
