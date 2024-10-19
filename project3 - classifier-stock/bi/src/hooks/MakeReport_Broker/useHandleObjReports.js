
export default function useHandleObjReports() {
  
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

    return [sendReport]
}
