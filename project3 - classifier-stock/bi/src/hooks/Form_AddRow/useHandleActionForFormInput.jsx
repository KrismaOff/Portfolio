import axios from 'axios'
import { useState, useEffect } from 'react';
import { url } from '../../globalvVariable';

import useRecieveToggleList from '../Recieve_API/useRecieveDataToggleList';
import { recieveIdTableFromToggleList } from '../../helper/makeIdToggleListTabel';

export default function useHandleActionForFormInput(setTemplateToAdd, templateToAdd, classifier, setClassifier, activePage, setActivePage) {

    const [toggleList] = useRecieveToggleList()
    const [toggleListData, setToggleListData] = useState(toggleList)

    useEffect(() => {
      if (toggleList) {
        setToggleListData(toggleList)
      }
    }, [toggleList])
    

    
    const catchClassifierData = (e) => {                    // подтягивание и добавление данных второуровневого классификатора
        let obj = {};
        axios
            .post(`${url}/tables/read?un=${e}`)
            .then(({ data }) => {
                let dataAct = data.data[0][Object.keys(data.data[0])][0];

                Object.keys(dataAct).map(key => {
                    if (key === "NAME") obj["ACTIVEEDI"] = dataAct[key];
                    else obj[key] = dataAct[key];
                    return obj;
                })

                setTemplateToAdd()
                setTemplateToAdd({ ...templateToAdd, ...obj })
            })

    }
    const selectedToggleList = (idRow, type) => {           // возвращени от списка ключа и значений
        let word = recieveIdTableFromToggleList(idRow)

        let finalRes;
        if (toggleListData && type === "list") finalRes = toggleListData[0][word];
        else if (type === "key") finalRes = word;
        return finalRes;
    }
    const addOpenClassifier = (idClassifier) => {           // погруженние в дочерний классификатор (кнопка +)
        setClassifier({ cl_key: idClassifier })
        setActivePage({ ...activePage, [idClassifier]: "" })
    }
    const touch = (key) => {                                // можно ли взаимодействовать с select
        let touch;
        if (classifier.cl_key === "cl_actives") {
            if (key === "ACTIVEEDI") touch = true
            else touch = false
        } else {
            touch = true
        }
        return touch;
    }

    return [setToggleListData, catchClassifierData, selectedToggleList, addOpenClassifier, touch]
}
