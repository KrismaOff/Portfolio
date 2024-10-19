import { useEffect, useState } from 'react'

export default function useCheckCheckBoxAllAct(id, activeButton) {

    const [val, setVal] = useState(false)

    useEffect(() => {
        if (activeButton !== undefined) {
            Object.keys(activeButton).map(key => {
                if (key === id) setVal(activeButton[key])
                return true
            })
        }
    }, [id, activeButton, setVal])

    return [val, setVal]
}
