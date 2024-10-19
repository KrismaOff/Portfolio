import React from 'react'
import './SelectCellOption.css'

import useGetIdSelect from '../../../../../hooks/AdminPage/useGetIdSelect'

export default function SelectCellOption({ data }) {

    const [id] = useGetIdSelect(data)

    return (
        <>{data && Object.keys(data).map(key => {
            let comp;
            const value = Array.isArray(data[key]) ? data[key].join(" ") : data[key]
            if (key.includes("NAME") && !key.includes("NAMES")) comp = <option id={id} className='optionCellAdPg' key={key}>{value}</option>
            return comp;
        })}</>
    )
}
