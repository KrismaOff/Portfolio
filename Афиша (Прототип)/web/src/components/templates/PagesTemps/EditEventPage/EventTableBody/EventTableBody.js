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

    const filteredKeys = exeptionsDate[formatDate] && Object.keys(exeptionsDate[formatDate]).filter(key => {
        const mainObjKey = exeptionsDate[formatDate][key];
        const val = format && Object.values(format).at(0);
        const objStr = filterRetKey(mainObjKey, format && Object.keys(format).at(0));
        const name = Object.values(...filterRetVal(mainObjKey, "NAME")).join(" ").toLowerCase();

        return (!search && (val === mainObjKey[objStr.at(-1)] || val === "ALL")) || (name?.indexOf(search.toLowerCase()) !== -1);
    });

    return (
        <tbody>
            {filteredKeys?.map((key, i) => {
                const mainObjKey = exeptionsDate[formatDate][key];
                const exeptions = Object.assign({ COUNT: i + 1, key: key, id: id, data: data }, mainObjKey);
                return <EventDetailt {...exeptions} />;
            })}
        </tbody>
    )
}
