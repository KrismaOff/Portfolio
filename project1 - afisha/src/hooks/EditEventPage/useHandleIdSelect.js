import { useEffect, useState } from 'react'

export default function useHandleIdSelect(id, valueID, data) {

    const [val, setVal] = useState();

    useEffect(() => {
        let str;
        Object.keys(data).map(key => {
            if (data[key][id] === valueID) str = data[key][id.replace("ID", "NAME")]; 
            return str
        })
        setVal(str)
    }, [data, valueID, id])

    return [val]
}
