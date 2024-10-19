import axios from 'axios'
import { url } from '../../../globalvVariable'

import { base64ToFile } from '../../../helper/base64ToFile'

export default function useSendReportAPI(handleReportProblem) {

    const sendReportAPI = async (obj) => {         // Отправка JSON объекта на сервер
        await axios
            .post(`${url}/reports/report1`, obj)
            .then(({ data }) => {
                console.log(data);
                switch (data.message) {
                    case "OK":
                        alert("Отчет был успешно сформирован!")
                        base64ToFile(data.data.content, data.data.name)
                        break;
                    case "data error":
                        let cl_count = Object.values(data.data)[0].length
                        let cl_key = Object.keys(data.data)[0]
                        let cl_arr = Object.values(data.data)[0]

                        alert(`Произошла ошибка формирования отчета, не найдено позиции - ${cl_count}`)
                        handleReportProblem(cl_key, cl_arr)
                        break;
                    case "No data":
                        alert("Отсутствует информация в БД за указанную дату")
                        break;
                    default: break;
                }
            })
            .catch(err => console.log("useSendReportAPI: " + err))
    }

    return sendReportAPI
}