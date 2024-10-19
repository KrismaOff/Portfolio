import { useState, useEffect } from 'react';

export default function useSwitchEditButton(valArrData) {

    const toggleListName = ["ACTIVEEDI","ACTIVETYPE","ACTIVECALCTYPE","ACTIVEOBL","COUNTRY","ACTIVEVAL"]
    const found = toggleListName.some(r=> valArrData.includes(r))
    const [stateSwitchButton, setStateSwitchButton] = useState(false)

    useEffect(() => {
        if (found) setStateSwitchButton(true)
    }, [found])

    return stateSwitchButton
}
