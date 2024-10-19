import { useState, useEffect } from 'react'

import useRecieveDataTable from '../../Recieve_API/useRecieveDataTable'

export default function useSwitchCheckBox() {

    const [reportsData, setReportsData] = useState()
    const [activeButton, setActiveButton] = useState()
    const { data } = useRecieveDataTable("cl_brokers")
    useEffect(() => setReportsData(data), [data])

    const swithcCheckBox = (e, id, state) => {        // Записывает все активные счета в state
        if (e.target.name === "allBtn") {
            let obj = {}
            Object.keys(reportsData).map(key => obj[reportsData[key].ID] = e.target.checked)
            setActiveButton(obj)
        } else setActiveButton(prev => { return { ...prev, [id]: state } })
    }

    return [reportsData, activeButton, swithcCheckBox]
}
