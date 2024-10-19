import { useEffect, useState } from 'react'

export default function useGetIdSelect(data) {

    const [id, setId] = useState()

    useEffect(() => {
        let arr = []
        for (let key in data) if (key.includes("ID")) arr.push(data[key]);
        setId(arr[0])
    }, [data])

    return [id]
}
