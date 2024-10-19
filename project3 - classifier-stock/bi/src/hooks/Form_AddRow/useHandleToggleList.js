import { useState, useEffect } from 'react';

import useRecieveToggleList from '../Recieve_API/useRecieveDataToggleList';
import { classifierColumnData } from '../../globalvVariable';

export default function useHandleActionForFormInput() {

    const { toggleList } = useRecieveToggleList()
    const [toggleListData, setToggleListData] = useState()

    useEffect(() => { toggleList && setToggleListData(toggleList) }, [toggleList])
    const selectedToggleList = (idRow, type) => {
        let finalRes;
        let word;
        Object.keys(classifierColumnData).map(key => { // возвращени от списка ключа и значений
            let childCl = classifierColumnData[key].childClassifier
            if (childCl && Object.values(childCl).includes(idRow)) word = key
            return word
        })

        if (toggleListData)
            if (type === "list") finalRes = toggleListData[0][word];
            else if (type === "key") finalRes = word;
        return finalRes;

    }

    return [setToggleListData, selectedToggleList]
}