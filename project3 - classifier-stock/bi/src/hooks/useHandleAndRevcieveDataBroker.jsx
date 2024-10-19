import { useState, useEffect } from 'react'
import axios from 'axios'

import useRecieveDataTable from './Recieve_API/useRecieveDataTable'

import { url } from '../globalvVariable'

export default function useRevcieveDataBroker(date, hanldeAddPosition) {

    const [data] = useRecieveDataTable("cl_brokers")

    const [reportsData, setReportsData] = useState()
    const [activeButton, setActiveButton] = useState({})

    useEffect(() => {
        setReportsData(data)
    }, [data])

    const recordsAllCheckBoxes = (e) => {          // Записывает все счета в state
        let obj = {}
        Object.keys(reportsData).map(key => {
            obj[reportsData[key].ID] = e.target.checked
            return obj
        })
        setActiveButton(obj)
    }
    const swithcCheckBox = (id, state) => {        // Записывает все активные счета в state
        setActiveButton({ ...activeButton, [id]: state })
    }
    const sendReportAPI = async (obj) => {         // Отправка JSON объекта на сервер

        //"cl_unactives", ["KZOSP_55", "KZOS_55", "TRNFP_55", "KZOS_55"]

        await axios
            .post(`${url}/reports/report1`, obj)
            .then(({ data }) => {
                console.log(data.result);
                console.log(data.message);
                // console.log(data); //{"result":false,"message":"data error",data:{"cl_actives":["ALRS"]}}
                if (data.result) {
                    switch (data.message) {
                        case "OK":
                            alert("Отчет был успешно сформирован")
                            break;

                        default:
                            break;
                    }
                } else if (!data.result) {
                    switch (data.message) {
                        case "data error":
                            let cl_count = Object.values(data.data)[0].length
                            let cl_key = Object.keys(data.data)[0]
                            let cl_arr = Object.values(data.data)[0]
                            alert(`Произошла ошибка формирования отчета, не найдено - ${cl_count}`)

                            hanldeAddPosition(cl_key, cl_arr)
                            break;
                        case "No data":
                            alert("Отсутствует информация в БД за указанную дату")
                            break

                        default:
                            break;
                    }

                    // let cl_count = Object.values(data.data)[0].length
                    // let cl_key = Object.keys(data.data)[0]
                    // let cl_arr = Object.values(data.data)[0]
                    // alert(`Произошла ошибка формирования отчета, не найдено - ${cl_count}`)
                    // // alert(`Произошла ошибка формирования отчета, не найдено`)
                    // hanldeAddPosition(cl_key, cl_arr)
                }
            })
            // .catch(err => alert("Произошла ошибка формирования отчета: " + err))
            .catch(err => console.log(err))
    }
    const sendReport = async () => {               // Обработка входящих счетов => JSON, Отправка на базу
        let arr = []
        let obj = {
            "Report1": {
                "crdate": date,
                "sogllist": []
            }
        }

        if (Object.keys(activeButton).length === 0)
            alert("Не выбрано ниодного отчета, выберите хотя бы один")
        else {
            if (activeButton) {
                Object.keys(activeButton).map(key => {              // - данные checkboxes в массив для передачи отчетов в бд
                    if (activeButton[key] === true) arr.push(key)
                    return arr
                })
                arr.map(val => {                                    // - данные из массива переносятся в объект
                    Object.keys(reportsData).map(key => {
                        if (reportsData[key].ID === val) obj.Report1.sogllist.push(reportsData[key].SOGLNUM)
                        return obj
                    })
                    return obj
                })
                let objForAPI = JSON.stringify(obj)
                if (window.confirm("Сформировать отчет?")) sendReportAPI(objForAPI)
            }
        }
    }

    return [reportsData, activeButton, recordsAllCheckBoxes, swithcCheckBox, sendReport]
}