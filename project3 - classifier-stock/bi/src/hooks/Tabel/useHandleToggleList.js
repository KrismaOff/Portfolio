import { useState } from "react";
import { recieveValToggleList } from "../../helper/makeIdMethodToggleList";

export default function useHandleToggleList(rowVal, toggleList) {
    
    const [valRowVal, setValRowVal] = useState(rowVal)

    const valArrData = () => {                      // Получение всех ключей из объекта, кроме ID и ACTIVENAME
        let arr = [] //  ['GOSREG', 'CBACTIVETYPE', 'ACTIVEID', 'ACTIVEEDI', 'ACTIVETYPE', 'ACTIVECALCTYPE', 'ACTIVEOBL', 'COUNTRY', 'ACTIVEVAL']
        if (valArrData) {
            Object.keys(valRowVal).map(key => {
                if (key !== "ID") arr.push(key)
                return arr;
            })
            return arr;
        }
    }
    const processedToggleList = (key) => {          // Выводится список с данными (относительно ключа)
        let toggleListValue;
        if (recieveValToggleList(toggleList)) {
            Object.keys(recieveValToggleList(toggleList)).map(keyVal => {
                if (key === keyVal) toggleListValue = recieveValToggleList(toggleList)[keyVal]
                return toggleListValue
            })
        }
        return toggleListValue;
    }
    const checkCellFirst = (key) => {
        if (valArrData()[0] !== key) return processedToggleList(key)
    }

    return [valRowVal, setValRowVal, valArrData, processedToggleList, checkCellFirst]
}
