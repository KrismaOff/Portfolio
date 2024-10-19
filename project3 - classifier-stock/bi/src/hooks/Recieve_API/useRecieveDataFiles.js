import { useState } from 'react'
import axios from 'axios'
import { url } from '../../globalvVariable'

import useHandleDate from '../ReplenishmentDB/useHandleDate'

export default function useRecieveDataFiles(setStateOfCheking) {

    const { handleDate } = useHandleDate()

    const [foundFiles, setFoundFiles] = useState()
    const [notFoundFiles, setNotFoundFiles] = useState()
    const [prevDate, setPrevDate] = useState()

    // const data = {
    //     "result": true,
    //     "message": "OK",
    //     "data": {
    //         "prevDate":"06.2.2023", 
    //         "sogls": {
    //             "Found": [
    //                 {
    //                     "Broker": "\u0410\u041e \u00ab\u041e\u0442\u043a\u0440\u044b\u0442\u0438\u0435 \u0411\u0440\u043e\u043a\u0435\u0440\u00bb",
    //                     "Client": "\u041e\u041e\u041e \"\u042d\u0420 \u042d\u0419\u0427 \u0421\u0418\"",
    //                     "Sogl": "160879-\u0411\u042e \u043e\u0442 14.11.2018"
    //                 },
    //                 {
    //                     "Broker": "\u0410\u041e \u00ab\u041e\u0442\u043a\u0440\u044b\u0442\u0438\u0435 \u0411\u0440\u043e\u043a\u0435\u0440\u00bb",
    //                     "Client": "\u041e\u041e\u041e \"\u042d\u0420 \u042d\u0419\u0427 \u0421\u0418\"",
    //                     "Sogl": "160879-\u0411\u042e \u043e\u0442 14.11.2018"
    //                 },
    //                 {
    //                     "Broker": "\u0411\u0430\u043d\u043a \u0412\u0422\u0411 (\u041f\u0410\u041e)",
    //                     "Client": "\u0428\u0443\u043f\u043b\u0435\u0446\u043e\u0432\u0430 \u041e. \u0412.",
    //                     "Sogl": "10WTBS \u043e\u0442 15.03.2021"
    //                 },
    //                 {
    //                     "Broker": "\u0411\u0430\u043d\u043a \u0412\u0422\u0411 (\u041f\u0410\u041e)",
    //                     "Client": "\u0428\u0443\u043f\u043b\u0435\u0446\u043e\u0432 \u041b. \u041d.",
    //                     "Sogl": "375437 \u043e\u0442 31.10.2016"
    //                 },
    //                 {
    //                     "Broker": "\u0411\u0430\u043d\u043a \u0412\u0422\u0411 (\u041f\u0410\u041e)",
    //                     "Client": "\u0428\u0443\u043f\u043b\u0435\u0446\u043e\u0432 \u041b. \u041d.",
    //                     "Sogl": "428208 \u043e\u0442 19.06.2018"
    //                 },
    //                 {
    //                     "Broker": "\u0411\u0430\u043d\u043a \u0412\u0422\u0411 (\u041f\u0410\u041e)",
    //                     "Client": "\u0428\u0443\u043f\u043b\u0435\u0446\u043e\u0432\u0430 \u041e. \u0412.",
    //                     "Sogl": "428214 \u043e\u0442 19.06.2018"
    //                 },
    //                 {
    //                     "Broker": "\u041e\u041e\u041e \"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u0411\u041a\u0421\"",
    //                     "Client": "\u0428\u0443\u043f\u043b\u0435\u0446\u043e\u0432 \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u041b\u0435\u043e\u043d\u0438\u0434\u043e\u0432\u0438\u0447",
    //                     "Sogl": "1071014\/21-\u043c\u0442\u043b-\u0438\u0438\u0441 \u043e\u0442 12.01.2021" //eslint-disable-line
    //                 },
    //                 {
    //                     "Broker": "\u041e\u041e\u041e \"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u0411\u041a\u0421\"",
    //                     "Client": "\u041c\u0435\u0434\u0432\u0435\u0434\u0435\u0432\u0430 \u0415\u0432\u0433\u0435\u043d\u0438\u044f \u0410\u043d\u0434\u0440\u0435\u0435\u0432\u043d\u0430",
    //                     "Sogl": "1270532\/21-\u043c \u043e\u0442 27.07.2021" //eslint-disable-line
    //                 },
    //                 {
    //                     "Broker": "\u041e\u041e\u041e \"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u0411\u041a\u0421\"",
    //                     "Client": "\u041c\u0435\u0434\u0432\u0435\u0434\u0435\u0432\u0430 \u0415\u0432\u0433\u0435\u043d\u0438\u044f \u0410\u043d\u0434\u0440\u0435\u0435\u0432\u043d\u0430",
    //                     "Sogl": "1643862\/22 \u043e\u0442 21.03.2022" //eslint-disable-line
    //                 },
    //                 {
    //                     "Broker": "\u041e\u041e\u041e \"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u0411\u041a\u0421\"",
    //                     "Client": "\u041c\u0435\u0434\u0432\u0435\u0434\u0435\u0432\u0430 \u0415\u0432\u0433\u0435\u043d\u0438\u044f \u0410\u043d\u0434\u0440\u0435\u0435\u0432\u043d\u0430",
    //                     "Sogl": "1741531\/22-\u0438\u0438\u0441 \u043e\u0442 26.04.2022" //eslint-disable-line
    //                 },
    //                 {
    //                     "Broker": "\u041e\u041e\u041e \"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u0411\u041a\u0421\"",
    //                     "Client": "\u0410\u0440\u0430\u0441\u043b\u0430\u043d\u043e\u0432 \u0422\u0438\u043c\u0443\u0440 \u041d\u0443\u0440\u0443\u043b\u043b\u043e\u0432\u0438\u0447",
    //                     "Sogl": "1794800\/22-\u0438\u0438\u0441 \u043e\u0442 26.05.2022" //eslint-disable-line
    //                 },
    //                 {
    //                     "Broker": "\u041e\u041e\u041e \"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u0411\u041a\u0421\"",
    //                     "Client": "\u0410\u0440\u0430\u0441\u043b\u0430\u043d\u043e\u0432\u0430 \u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0430 \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u043d\u0430",
    //                     "Sogl": "1796175\/22-\u0438\u0438\u0441 \u043e\u0442 26.05.2022" //eslint-disable-line
    //                 },
    //                 {
    //                     "Broker": "\u041e\u041e\u041e \"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u0411\u041a\u0421\"",
    //                     "Client": "\u0428\u0443\u043f\u043b\u0435\u0446\u043e\u0432 \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u041b\u0435\u043e\u043d\u0438\u0434\u043e\u0432\u0438\u0447",
    //                     "Sogl": "86289\/10-\u043c \u043e\u0442 22.04.2010" //eslint-disable-line
    //                 },
    //                 {
    //                     "Broker": "Interactive Brokers",
    //                     "Client": "Alexander Shupletsov",
    //                     "Sogl": "U4345894"
    //                 },
    //                 {
    //                     "Broker": "Interactive Brokers",
    //                     "Client": "Alexander Shupletsov",
    //                     "Sogl": "U4431274"
    //                 }
    //             ],
    //             "notFound": {
    //                 "List": [
    //                     {
    //                         "Broker": "\u041e\u041e\u041e \"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u0411\u041a\u0421\"",
    //                         "Client": "\u0428\u0443\u043f\u043b\u0435\u0446\u043e\u0432\u0430 \u0415\u0432\u0433\u0435\u043d\u0438\u044f \u041b\u0435\u043e\u043d\u0438\u0434\u043e\u0432\u043d\u0430",
    //                         "Sogl": "180894\/15-\u043c\u043a\u043f \u043e\u0442 16.10.2015" //eslint-disable-line
    //                     },
    //                     {
    //                         "Broker": "\u041e\u041e\u041e \u0418\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u0430",
    //                         "Client": "\u041e\u041e\u041e \"\u042d\u0420 \u042d\u0419\u0427 \u0421\u0418\"",
    //                         "Sogl": "759255-\u0411\u042e \u043e\u0442 25.03.2022"
    //                     },
    //                     {
    //                         "Broker": "\u041e\u041e\u041e \"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u0411\u041a\u0421\"",
    //                         "Client": "\u0428\u0443\u043f\u043b\u0435\u0446\u043e\u0432\u0430 \u0415\u0432\u0433\u0435\u043d\u0438\u044f \u041b\u0435\u043e\u043d\u0438\u0434\u043e\u0432\u043d\u0430",
    //                         "Sogl": "180893\/15-\u043c\u043a\u043f \u043e\u0442 16.10.2015" //eslint-disable-line
    //                     }
    //                 ],
    //                 "RecordExists": [
    //                     {
    //                         "Broker": "\u041e\u041e\u041e \"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u0411\u041a\u0421\"",
    //                         "Client": "\u0428\u0443\u043f\u043b\u0435\u0446\u043e\u0432\u0430 \u0415\u0432\u0433\u0435\u043d\u0438\u044f \u041b\u0435\u043e\u043d\u0438\u0434\u043e\u0432\u043d\u0430",
    //                         "Sogl": "180894\/15-\u043c\u043a\u043f \u043e\u0442 16.10.2015" //eslint-disable-line
    //                     },
    //                     {
    //                         "Broker": "\u041e\u041e\u041e \u0418\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u043f\u0430\u043b\u0430\u0442\u0430",
    //                         "Client": "\u041e\u041e\u041e \"\u042d\u0420 \u042d\u0419\u0427 \u0421\u0418\"",
    //                         "Sogl": "759255-\u0411\u042e \u043e\u0442 25.03.2022"
    //                     },
    //                     {
    //                         "Broker": "\u041e\u041e\u041e \"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u0411\u041a\u0421\"",
    //                         "Client": "\u0428\u0443\u043f\u043b\u0435\u0446\u043e\u0432\u0430 \u0415\u0432\u0433\u0435\u043d\u0438\u044f \u041b\u0435\u043e\u043d\u0438\u0434\u043e\u0432\u043d\u0430",
    //                         "Sogl": "180893\/15-\u043c\u043a\u043f \u043e\u0442 16.10.2015" //eslint-disable-line
    //                     }
    //                 ],
    //                 "NoRecord": []
    //             }
    //         }
    //     }
    // }

    const recieveFiles = (date) => {
        axios
            .post(`${url}/uploader/pred`, handleDate(date))
            .then(({ data }) => {
                switch (data.message) {
                    case "OK":
                        setPrevDate(data.data.prevDate)
                        setFoundFiles(data.data.sogls.Found);
                        setNotFoundFiles(data.data.sogls.notFound);
                        setStateOfCheking(true);
                        break;
                    case "Records exists":
                        alert("Данные за этот день были уже внесены в БД");
                        break;
                    case "No sogls":
                        alert("Не было найдено ни одного номера счета среди файлов");
                        break;
                    default: break;
                }
            })
            .catch(err => console.log(err))
    }

    return [recieveFiles, foundFiles, notFoundFiles, prevDate]
}
