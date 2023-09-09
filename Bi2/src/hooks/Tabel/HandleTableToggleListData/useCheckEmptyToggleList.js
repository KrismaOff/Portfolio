import useRecieveToggleList from "../../Recieve_API/useRecieveDataToggleList";

import { recieveIdTableFromToggleList } from "../../../helper/makeIdToggleListTabel";

export default function useCheckEmptyToggleList() {

    const { toggleList } = useRecieveToggleList()

    const checkEmptyToggleList = (rows) => {
        let arr = []
        Object.keys(rows).map(val => {
            let toggleListId = recieveIdTableFromToggleList(val)
            if (toggleListId) arr.push(toggleListId)
            return arr
        })

        if (arr.length === 0) return undefined
        else return toggleList
    }
    
    return checkEmptyToggleList
}
