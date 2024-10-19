import { useState, useEffect } from 'react'
import axios from 'axios'

import url from '../globalvVariable'

export default function useRecieveDataTablesList(handleChange) {

  const [data, setData] = useState()
  const [selectedClassifier, setSelectedClassifier] = useState()

  useEffect(() => {
    axios
      .get(`${url}/tables/read`)
      .then(({ data }) => {
        let cl_data = data.data[0].Tables
        setData(cl_data)

        if (sessionStorage["activeClassifier"]) {
          let classifierCache = JSON.parse(sessionStorage.getItem("activeClassifier"))
          setSelectedClassifier(classifierCache.cl_name)                                         // название для списка
          handleChange({ cl_key: classifierCache.cl_key, cl_name: classifierCache.cl_name })     // данные для table
        } else {
          setSelectedClassifier(cl_data[0].CLDESC)                                    // название для списка
          handleChange({ cl_key: cl_data[0].CLNAME, cl_name: cl_data[0].CLDESC })     // данные для table
        }

      })
      .catch(err => console.log("dataTeblesList: " + err))
  }, [handleChange])

  return [data, selectedClassifier, setSelectedClassifier]
}
