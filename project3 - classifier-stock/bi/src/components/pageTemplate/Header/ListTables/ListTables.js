import React from 'react'
import "./ListTables.css"

export default function ListTables({ data, changeClassifier, selectedClassifier }) {
    return (
        <div className='listHeaderWrapper'>
            {data !== undefined &&
                <select className='listHeader' onChange={changeClassifier}>
                    <option>{selectedClassifier}</option>
                    {data.map(val => {
                        if (val.CLDESC !== selectedClassifier) return <option className='listHeaderOpt' key={Math.random()}>{val.CLDESC}</option>
                        return true
                    })}
                </select>
            }
        </div>
    )
}
