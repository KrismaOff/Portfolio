import { useState, useEffect } from 'react'
import axios from 'axios'

import { url } from '../../globalvVariable'

export default function useRecieveDataTablesList() {

  const [data, setData] = useState()

  useEffect(() => {
    axios
      .get(`${url}/tables/read`)
      .then(({ data }) => setData(data.data[0].Tables))
      .catch(err => console.log("dataTeblesList: " + err))
  }, [])

  return [data]
}
