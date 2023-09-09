import { useState, useEffect } from 'react';

import useRecieveToggleList from '../Recieve_API/useRecieveDataToggleList';
import { recieveIdTableFromToggleList } from '../../helper/makeIdToggleListTabel';

export default function useHandleActionForFormInput() {

    const { toggleList } = useRecieveToggleList()
    const [toggleListData, setToggleListData] = useState()

    useEffect(() => { if (toggleList) setToggleListData(toggleList) }, [toggleList])
    const selectedToggleList = (idRow, type) => {           // возвращени от списка ключа и значений
        let word = recieveIdTableFromToggleList(idRow)
        let finalRes;

        if (toggleListData) {
            if (type === "list") finalRes = toggleListData[0][word];
            else if (type === "key") finalRes = word;
            return finalRes;
        }
    }

    return [setToggleListData, selectedToggleList]
}
