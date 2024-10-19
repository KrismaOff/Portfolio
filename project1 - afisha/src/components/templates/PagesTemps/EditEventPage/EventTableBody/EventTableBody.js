import React from 'react'
import './EventTableBody.css'

import EventDetailt from '../EventDetailt'

import useGetUniversalData from '../../../../../hooks/handleActionDB/RecieveDATA/useGetUniversalData'
import useFilterDate from '../../../../../hooks/AdminPage/useFilterDate'
import { filterRetVal, filterRetKey } from '../../../../../helper/Filter/filterArr'

export default function EventTableBody({ data, id, format, formatDate, search }) {

    const [upDown, downUp] = useFilterDate()
    const { universalData } = useGetUniversalData(id, "all")

    const exeptionsDate = {
        "up": upDown(universalData)?.map(val => universalData[val]),
        "down": downUp(universalData)?.map(val => universalData[val]),
        "undefined": universalData
    }

    return (
        <tbody>
            {universalData && Object.keys(exeptionsDate[formatDate]).map((key, i) => {
                const mainObjKey = exeptionsDate[formatDate][key]
                const exeptions = Object.assign({ COUNT: i + 1, key: key, id: id, data: data }, mainObjKey)
                const idString = format && Object.values(format).at(0)
                const objStr = filterRetKey(mainObjKey, format && Object.keys(format).at(0))
                const allNames = Object.values(...filterRetVal(mainObjKey, "NAME")).join(" ").toLowerCase();

                let res, comp = (idString === mainObjKey[objStr.at(-1)] || idString === "ALL") && <EventDetailt{...exeptions} />

                if (!search) res = comp;
                else if (allNames?.indexOf(search.toLowerCase()) !== -1) res = comp;
                return res;
            })}
        </tbody>
    )
}
