import { useEffect, useState } from 'react'
import axios from 'axios'

import { url } from '../../globalvVariable'

export default function useRecieveToggleList() {

    const [toggleList, setToggleList] = useState()

    useEffect(() => {
        axios
            .get(`${url}/Combobox/read`)
            .then(({ data }) => setToggleList(data.data))
            .catch(err => console.log("toggleList: " + err))
    }, [])

    return { toggleList }
}