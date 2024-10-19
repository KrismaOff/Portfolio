import useSendReportAPI from "./useSendReportAPI";

export default function useSendReportHandleData(date, activeButton, reportsData, handleReportProblem) {

    const sendReportAPI = useSendReportAPI(handleReportProblem)
    
    const sendReportHandleData = async () => {               // Обработка входящих счетов => JSON, Отправка на базу
        let obj = {
            "Report1": {
                "crdate": date,
                "sogllist": []
            }
        }

        if (!activeButton || !Object.values(activeButton).includes(true)) alert("Не выбрано ниодного отчета, выберите хотя бы один");
        else {
            Object.keys(reportsData).map(keyRowTable => {
                Object.keys(activeButton).map(keyActiveBtn => {
                    if (reportsData[keyRowTable].ID === keyActiveBtn && activeButton[keyActiveBtn]) 
                    obj.Report1.sogllist.push(reportsData[keyRowTable].SOGLNUM)
                    return obj
                })
                return obj
            })
            let objForAPI = JSON.stringify(obj)
			console.log(objForAPI)
            // if (window.confirm("Сформировать отчет?")) console.log(obj);
            if (window.confirm("Сформировать отчет?")) sendReportAPI(objForAPI)
            // if (window.confirm("Сформировать отчет?")) sendReportAPI(JSON.stringify(obj))
        }
    }

    return sendReportHandleData

}
