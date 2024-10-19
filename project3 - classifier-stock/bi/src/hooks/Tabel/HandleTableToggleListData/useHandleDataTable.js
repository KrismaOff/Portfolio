import { useEffect, useState } from 'react'
import axios from 'axios'

import { url, classifierColumnData } from '../../../globalvVariable';

export default function useRecieveDataTable(classifier) {

    const [rows, setRows] = useState();
    const [columnName, setColumnName] = useState();

    const [loadingState, setLoadingState] = useState(true);

    useEffect(() => {
        setLoadingState(true);
        let cl = classifier.cl_key
        let checkCl = cl.includes("cl_") || (classifierColumnData[cl] && classifierColumnData[cl].apiTable)
        classifier.cl_key && axios
            .get(`${url}/${!checkCl ? `${cl}/read` : `tables/read?cl=${cl}`}`)
            // .get("api/combobox/read?cbtype=vv_operations")
            .then(({ data }) => {
                let cl_key = Object.keys(data.data[0]);
                let cl_data = data.data[0][cl_key];
                setRows(checkCl ? Object.keys(cl_data).map(key => key = cl_data[key]) : data.data[0]);
                setColumnName(classifierColumnData[cl].columnName);
                setLoadingState(false);
            })
            .catch(err => console.log("dataTable: " + err))


    }, [classifier])

    return [rows, columnName, loadingState];
}
