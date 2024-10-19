import { classifierColumnData } from "../globalvVariable"

export const handleChildToId = (value) => {
    let result;
    Object.keys(classifierColumnData).map(key => {
        console.log(key, value);
        let childCl = classifierColumnData[key].childClassifier
        if (childCl && Object.values(childCl).includes(value)) result = key
        return result
    })
}