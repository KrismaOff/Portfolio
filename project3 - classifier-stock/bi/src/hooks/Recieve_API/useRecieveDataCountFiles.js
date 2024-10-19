import { useState, useEffect } from 'react'
import axios from 'axios'
import { url } from '../../globalvVariable'

export default function useRecieveDataCountFiles() {

    const [countOfFiles, setCountOfFiles] = useState(0)

    useEffect(() => {

        axios
            .get(`${url}/uploader/Start`)
            .then(({ data }) => {
                let cl_key = Object.keys(data.data);
                let cl_data = data.data[cl_key];
                setCountOfFiles(cl_data)
            })
            .catch((err) => console.log("dataCountFiles" + err))

    }, [])

    return countOfFiles

}
