import { useEffect, useState } from 'react'
import axios from 'axios'

import { url } from '../../globalvVariable'

import { classifierColumnData } from '../../globalvVariable'

export default function useAddRowMakeTemp(classifier) {

    const [loadingState, setLoadingState] = useState(false)
    const [templateToAdd, setTemplateToAdd] = useState({})
    const [templateForRow, setTemplateForRow] = useState({})

    useEffect(() => {
        setLoadingState(true)

        axios
            .get(`${url}/${classifier.cl_key === "vv" ? `vv/read` : `tables/read?cl=${classifier.cl_key}`}`)
            .then(({ data }) => {
                let nameOfRow = classifierColumnData[classifier.cl_key].columnName    // ["","",""]

                let cl_key = Object.keys(data.data[0]);
                let cl_data = classifier.cl_key === "vv" ? data.data[0][0] : data.data[0][cl_key][0];       // {act:"", reg:"", name:""} 

                let objCl_data = Object.assign({}, cl_data)
                delete objCl_data.ID

                let objTempPlaceHolder = {}
                Object.keys(objCl_data).map((key, index) => {
                    objTempPlaceHolder[key] = nameOfRow[index]
                    return objTempPlaceHolder
                })
                setTemplateForRow(objTempPlaceHolder)          // {act:"...", reg:"...", name:"..."} (шаблон для заполнения)
                setLoadingState(false)
            })
            .catch(err => console.log("rowsError: " + err))
    }, [classifier])

    return [templateForRow, loadingState, templateToAdd, setTemplateToAdd]
}


