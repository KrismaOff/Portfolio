import { useEffect, useState } from 'react'
import axios from 'axios'

import { url } from '../../globalvVariable';

export default function useRecieveDataTable(classifierData) {

    const [data, setData] = useState()

    useEffect(() => {
        axios
            .get(`${url}/tables/read?cl=${classifierData}`)
            .then(({ data }) => {
                let cl_key = Object.keys(data.data[0]);
                let cl_data = data.data[0][cl_key];
                setData(cl_data)
            })
            .catch(err => console.log("dataTable: " + err))
    }, [classifierData])

    return { data };
}
