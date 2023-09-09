import { useEffect, useState } from 'react'
import axios from 'axios'

import { url } from '../../../globalvVariable';
import { columnNameData } from '../../../helper/differentData';

export default function useRecieveDataTable(classifierData) {

    const [rows, setRows] = useState();
    const [rowsIdName, setRowsIdName] = useState({ cl_key: "", cl_name: "" });
    const [columnName, setColumnName] = useState();
    
    const [loadingState, setLoadingState] = useState(true);

    useEffect(() => {
        setLoadingState(true);
        axios
            .get(`${url}/tables/read?cl=${classifierData.cl_key}`)
            .then(({ data }) => {
                let cl_key = Object.keys(data.data[0]);
                let cl_data = data.data[0][cl_key];

                let cl_data_rows = Object.keys(cl_data).map(key => {
                    let obj = {};
                    return obj[key] = cl_data[key];
                })

                setRows(cl_data_rows);
                setColumnName(columnNameData[classifierData.cl_key]);
                setRowsIdName({ cl_key: classifierData.cl_key, cl_name: classifierData.cl_name });
                setLoadingState(false);
            })
            .catch(err => console.log("dataTable: " + err))

    }, [classifierData])

    return [rows, rowsIdName, columnName, loadingState];
}
