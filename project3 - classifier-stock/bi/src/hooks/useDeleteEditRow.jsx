import axios from 'axios'
import { useState, useEffect } from 'react';

import url, { classifierColumnData } from '../globalvVariable';

export default function useDeleteEditRow(tableName, valArrData,) {

    const toggleListName = ["ACTIVEEDI","ACTIVETYPE","ACTIVECALCTYPE","ACTIVEOBL","COUNTRY","ACTIVEVAL"]
    const found = toggleListName.some(r=> valArrData.includes(r))
    const [stateSwitchButton, setStateSwitchButton] = useState(false)

    useEffect(() => {
        if (found) setStateSwitchButton(true)
    }, [found])

    const deleteRow = async (e) => {
        await axios.post(`${url}/writer/${classifierColumnData[tableName].childName}Del`, JSON.stringify({ "ID": e }))
            .then(() => window.location.reload())
            .catch(error => { console.log(error); })
    }
    const editRow = async (e) => {
        await axios.post(`${url}/writer/${classifierColumnData[tableName].childName}Edit`, JSON.stringify(e))
            .then(() => window.location.reload())
            .catch(error => { console.log(error); })
    }
    return [deleteRow, editRow, stateSwitchButton]
}
