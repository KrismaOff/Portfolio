import { useState } from "react";
import { classifierColumnData } from "../../../globalvVariable";

export default function useHandleToggleListForRow(rowVal, toggleList) {

    const [valRowVal, setValRowVal] = useState(rowVal)

    const processedToggleList = (key) => {          // Выводится список с данными (относительно ключа)
        let object = {}
        toggleList && Object.keys(toggleList[0]).map(keyL => {
            let childCL = classifierColumnData[keyL] && classifierColumnData[keyL].childClassifier
            if (childCL) Object.values(childCL).map(val => object[val] = toggleList[0][keyL]) 
            return object
        })
        return object[key]
    }

    return [valRowVal, setValRowVal, processedToggleList]
}