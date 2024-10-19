import React from 'react'
import './FilterSelect.css'

import { useNavigate } from 'react-router'

import { filterStr } from '../../../helper/Filter/filterStr'
import useGetUniversalData from '../../../hooks/handleActionDB/RecieveDATA/useGetUniversalData'

export default function FilterSelect({ title, table }) {

    const navigate = useNavigate();
    const { universalData } = useGetUniversalData(table, "all")
    const handleSelect = e => {
        let pathOpt = table.charAt(0).toUpperCase() + table.slice(1).toLowerCase()
        navigate(`/Calendar/Filter/${pathOpt}/${e.target[e.target.selectedIndex].id}`)
    }

    return (
        <select className='selectFilter' onChange={handleSelect} value={title}>
            <option className='optionFilter' id='allEvents' disabled>{title}</option>
            {universalData && Object.keys(universalData).map(key => {
                let comp;
                if (!filterStr("ID", universalData[key]).includes("ALL"))
                    comp = <option className='optionFilter' key={key} id={filterStr("ID", universalData[key])}>{filterStr("CITY", universalData[key])} {filterStr("NAME", universalData[key])}</option>
                return comp
            })}
        </select>
    )
}
