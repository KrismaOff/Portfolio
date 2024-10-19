import useRecieveToggleList from "../../Recieve_API/useRecieveDataToggleList";

import { classifierColumnData } from "../../../globalvVariable";

export default function useCheckEmptyToggleList() {

    const { toggleList } = useRecieveToggleList()

    const checkEmptyToggleList = (rows) => {
        let arr = []
        Object.keys(rows).map(val => {

            let toggleListId;
            Object.keys(classifierColumnData).map(key => {
                let childCl = classifierColumnData[key].childClassifier
                if (childCl && Object.values(childCl).includes(val)) toggleListId = key
                return toggleListId
            })

            // console.log(handleChildToId(val));
            if (toggleListId) arr.push(toggleListId)
            return arr
        })

        if (arr.length === 0) return undefined
        else return toggleList
    }

    return checkEmptyToggleList
}
