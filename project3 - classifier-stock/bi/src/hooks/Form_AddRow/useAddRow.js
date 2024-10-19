import axios from 'axios'

import { url } from '../../globalvVariable'

import { classifierColumnData } from '../../globalvVariable'

import useBackClassifier from './useBackClassifier'

export default function useAddRow(setToggleList, classifierId, activePage, setActivePage, setClassifier, problem, setProblemArr, problemArr) {

    const backClassifier = useBackClassifier(activePage, setActivePage, setClassifier)

    const addRow = async (e) => {           // добавление строки
        console.log(e);
        await axios.post(`${url}/writer/${classifierColumnData[classifierId].childName}Add`, JSON.stringify(e))
            .then(() => {
                if (problem) {
                    if (Object.keys(activePage).length > 1) backClassifier()
                    else if (problemArr.length === 1) window.location.reload()
                    else setProblemArr(problem)
                } else {
                    if (Object.keys(activePage).length === 1) window.location.reload()
                    else backClassifier()
                }

            })
            .catch(error => console.log(error))

        await axios
            .get(`${url}/Combobox/read.php`)
            .then(({ data }) => { setToggleList(data.data) })
            .catch(err => console.log("toggleList: " + err))

    }
    return addRow
}
