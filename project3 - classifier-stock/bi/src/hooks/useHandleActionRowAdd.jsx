import axios from 'axios'

import url, { classifierColumnData } from '../globalvVariable';

export default function useHandleActionRowAdd(setToggleList, classifierId, activePage, setActivePage, setClassifier, problem, setProblemArr, problemArr) {

    const addRow = async (e) => {           // добавление строки
        // if (window.confirm("Создать новую строку?")) {
		console.log(`${url}/writer/${classifierColumnData[tableName].childName}Add`)
        await axios.post(`${url}/writer/${classifierColumnData[tableName].childName}Add`, JSON.stringify(e))
            .then(() => {
                if (problem) {
					//console.log(`${url}/writer/${idClassifier()}Add`);
					//console.log(problemArr);
                    if (Object.keys(activePage).length > 1) {
                        backClassifier()
                    }
                    else if (problemArr.length === 1) {
                        window.location.reload()
                    }
                    else {
                        setProblemArr(problem)
                    }
                } else {
                    if (Object.keys(activePage).length === 1) window.location.reload()
                    else backClassifier()
                }

            })
            .catch(error => { console.log(error); })

        await axios
            .get("http://localhost/traid/api/Combobox/read.php")
            .then(({ data }) => { setToggleList(data.data) })
            .catch(err => console.log("toggleList: " + err))
        // }
    }
    const backClassifier = () => {          // возращение к компоненту прошлому
        let obj = {}
        Object.keys(activePage).map(key => {
            let lastValActivePage = Object.keys(activePage).reverse()[0]

            obj[key] = activePage[key]
            delete obj[lastValActivePage]
            return obj
        })
        const classifierKey = Object.keys(obj).reverse()[0]

        setClassifier({ cl_key: classifierKey, cl_name: "" })
        setActivePage(obj)


    }
    const canselAddRow = () => {                // отменить создание строки
        window.location.reload()
    }
    return [addRow, backClassifier, canselAddRow]
}

