// import React from 'react'
import { url } from "../../globalvVariable";
import axios from "axios";

export default function useCatchClassifierData(setTemplateToAdd, classifier) {
    const catchClassifierData = (e) => {                    // подтягивание и добавление данных второуровневого классификатора
        let obj = {};
        axios
            .post(`${url}/tables/read?un=${e}`)
            .then(({ data }) => {
                let dataAct = data.data[0][Object.keys(data.data[0])][0];

                Object.keys(dataAct).map(key => {
                    if (key === "NAME") obj["ACTIVEEDI"] = dataAct[key];
                    else obj[key+classifier.cl_key] = dataAct[key];
                    return obj;
                })
                setTemplateToAdd(prev => { return { ...prev, ...obj } })
            })
    }
    return catchClassifierData
}
