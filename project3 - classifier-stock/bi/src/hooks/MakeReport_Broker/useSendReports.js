import axios from 'axios'
import url from '../../globalvVariable';

export default function useSendReports() {

    const sendReportAPI = async (obj) => {         // Отправка JSON объекта на сервер
        await axios
            .post(`${url}/reports/report1`, obj)
            .then(({ data }) => {

                if (data.result) {
                    switch (data.message) {
                        case "OK":
                            alert("Отчет был успешно сформирован")
                            break;
                        default: break;
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
                        default: break;
                    }
                }

            })
            .catch(err => console.log("sendReport: "+ err))
    }

    return [sendReportAPI]
}
