import React from 'react'
import './EventDetCell.css'

import { Link } from 'react-router-dom';

import useGetUniversalData from '../../../../../hooks/handleActionDB/RecieveDATA/useGetUniversalData';

export default function EventDetCell({ id, val, name, linkBt }) {

    const exeptions = {
        key: id.replace("ID", "NAME"),
        name: id.includes("ID") && id.replace("_ID", ""),
        value: Array.isArray(val) ? val.join(" ") : val,
        link: id === "EVENT_NAME"

    }

    const { universalData } = useGetUniversalData(exeptions.name, val)

    const exeptionsVal = () => {
        let objVal = universalData && universalData[exeptions.key]
        return Array.isArray(objVal) ? objVal.join(" ") : objVal
    }

    return (
        <td>
            {exeptions.link ?
                <Link to={`/Admin/editEvent/${linkBt}/check`} className='linkEvDelCell'>{exeptions.value}</Link> :
                <>{id.includes("ID") && name !== "ID" ? exeptionsVal() : exeptions.value}</>}
        </td>
    )
}
