import axios from 'axios'

import url, { classifierColumnData } from '../globalvVariable';

export default function useDeleteAddEditRow(tableName) {

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
    return [deleteRow, editRow]
}
