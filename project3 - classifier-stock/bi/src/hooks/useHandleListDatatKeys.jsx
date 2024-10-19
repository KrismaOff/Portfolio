import { useState } from "react";
import { classifierColumnData } from "../globalvVariable";

export default function useHandleListDatatKeys(rowVal, toggleList) {
    const [valRowVal, setValRowVal] = useState(rowVal)

    console.log(1);

    const valArrData = () => {                              // Получение всех ключей из объекта, кроме ID и ACTIVENAME
        let arr = [] //  ['GOSREG', 'CBACTIVETYPE', 'ACTIVEID', 'ACTIVEEDI', 'ACTIVETYPE', 'ACTIVECALCTYPE', 'ACTIVEOBL', 'COUNTRY', 'ACTIVEVAL']
        if (valArrData) {
            Object.keys(valRowVal).map(key => {
                if (key !== "ID") arr.push(key)
                return arr;
            })
            return arr;
        }
    }
    const valToggleList = () => {                           // Видоизменяет ключи выпадающего списка cb_activetype => ACTIVETYPE
        if (toggleList) {
            let obj = {} // {ACTIVETYPE: Array(5), ACTIVECALCTYPE: Array(5), ACTIVEOBL: Array(16)}
            Object.keys(toggleList[0]).map(key => {
                obj[classifierColumnData[key].childClassifier] = toggleList[0][key]
                return obj
            })
            return obj
        }
    }
    const processedToggleList = (key) => {
        let toggleList;
        if (valToggleList()) {
            Object.keys(valToggleList()).map(keyVal => {
                if (key === keyVal) toggleList = valToggleList()[keyVal]
                return toggleList
            })
        }
        return toggleList;
    }
    return [valRowVal, setValRowVal, valArrData, processedToggleList, valToggleList]
}
