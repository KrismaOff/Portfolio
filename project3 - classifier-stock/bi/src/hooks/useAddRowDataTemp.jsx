import { useEffect, useState } from 'react'
import axios from 'axios'

import url, { classifierColumnData } from '../globalvVariable'

export default function useAddRowDataTemp(classifier, problem) {

    const [classifierIdName, setClassifierIdName] = useState({})
    const [loadingState, setLoadingState] = useState(false)
    const [templateToAdd, setTemplateToAdd] = useState({})
    const [templateForRow, setTemplateForRow] = useState({})

    useEffect(() => {
        setLoadingState(true)
        axios
            .get(`${url}/tables/read?cl=${classifier.cl_key}`)
            .then(({ data }) => {

                let nameOfRow = classifierColumnData[classifier.cl_key].columnName    // ["","",""]

                let cl_key = Object.keys(data.data[0]);
                let cl_data = data.data[0][cl_key][0];              // {act:"", reg:"", name:""} 

                let objCl_data = Object.assign({}, cl_data)
                delete objCl_data.ID

                let objTempPlaceHolder = {}
                let objTempToAdd = {}

                Object.keys(objCl_data).map((key, index) => {

                    if (problem) {
                        if (index === 0) objTempToAdd[key] = problem
                        else objTempToAdd[key] = ""
                    } 
                    else objTempToAdd[key] = ""
                    objTempPlaceHolder[key] = nameOfRow[index]
                    return (objTempToAdd, objTempPlaceHolder)
                })
                
                if (problem) setTemplateToAdd(objTempToAdd)
                

                setTemplateForRow(objTempPlaceHolder)          // {act:"...", reg:"...", name:"..."} (шаблон для заполнения)
                // setTemplateToAdd(objTempToAdd)                 // {act:"", reg:"", name:""} (шаблон для заполнения)
                setClassifierIdName(classifier)                // {cl_key:"", cl_name:""} (как называется)
                setLoadingState(false)
            })
            .catch(err => console.log("rowsError: " + err))
    }, [classifier, problem])

    return [classifierIdName, templateForRow, loadingState, templateToAdd, setTemplateToAdd]
}


