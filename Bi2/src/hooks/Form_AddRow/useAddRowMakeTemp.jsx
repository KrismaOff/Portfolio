import { useEffect, useState } from 'react'
import axios from 'axios'

import { url } from '../../globalvVariable'

import { columnNameData } from '../../helper/differentData'

export default function useAddRowMakeTemp(classifier) {

    const [loadingState, setLoadingState] = useState(false)
    const [templateToAdd, setTemplateToAdd] = useState({})
    const [templateForRow, setTemplateForRow] = useState({})

    useEffect(() => {
        setLoadingState(true)

        axios
            .get(`${url}/tables/read?cl=${classifier.cl_key}`)
            .then(({ data }) => {

                let nameOfRow = columnNameData[classifier.cl_key]    // ["","",""]

                let cl_key = Object.keys(data.data[0]);
                let cl_data = data.data[0][cl_key][0];              // {act:"", reg:"", name:""} 

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


