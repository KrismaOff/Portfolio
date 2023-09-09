import axios from 'axios'

import { url } from '../../globalvVariable'

import { recieveIdClassifier } from '../../helper/makeIdClassifier'

import useBackClassifier from './useBackClassifier'

export default function useAddRow(setToggleList, classifierId, activePage, setActivePage, setClassifier, problemName, problemsTotalNum, setProblemArr) {

    const backClassifier = useBackClassifier(activePage, setActivePage, setClassifier)

    const addRow = async (e) => {           // добавление строки
        const idClassifier = recieveIdClassifier(classifierId)

        await axios.post(`${url}/writer/${idClassifier}Add`, JSON.stringify(e))
            .then(() => {

                const activePageNum = Object.keys(activePage).length

                if (problemName) {
                    if (activePageNum > 1) backClassifier()
                    else if (problemsTotalNum === 1) window.location.reload()
                    else setProblemArr(problemName)
                } else {
                    if (activePageNum === 1) window.location.reload()
                    else backClassifier()
                }

            })
            .catch(error => { console.log(error); })

        await axios
            .get(`${url}/Combobox/read.php`)
            .then(({ data }) => { setToggleList(prev=>data.data) })
            .catch(err => console.log("toggleList: " + err))
    }

    return addRow
}
