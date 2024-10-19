// const urlDownData = 'http://localhost/traid'
//export const url = 'http://localhost:8012/traiddev/api'
//export const uploadUrl = 'http://localhost:8012/'
export const url = 'http://localhost:8012/TRAIDdev/api'
// export const url = 'http://192.168.88.12:8012/traiddev/api'
export const uploadUrl = 'http://192.168.88.12:8012/'
export const baseName = 'traiddev'
// export default url; 
// export default urlDownData;

export const classifierColumnData = { // useAddRowDataTemp, useDeleteAddEditRow, useDeleteEditRow, useHandleActionRowAdd, useRecieveDataTable
    cl_actives: {
        columnName: ["Названия позиции из отчета банка", "Номер гос. регистрации ЦБ/ ISIN", "Тип актива (для ЦБ - № вып.)", "Идентификатор", "Унифицированное название", "Тип актива", "Тип актива для расчета", "Область", "Страна", "Валюта актива", "Ср. цена актива", "Цена приобретения актива"],
        childName: "active",
        childClassifier: ["ACTIVEEDI"],
        // editTableRow: false
    },
    cl_brokers: {
        columnName: ["Брокер", "Клиент", "Счет", "Своя валюта для расчета", "Префикс", "Дата начала действия", "Дата окончаний действия"],
        childName: "broker",
        childClassifier: ["SOGLNUM"]
    },
    cl_clients: {
        columnName: ["Клиент", "Единая формулировка"],
        childName: "client"
    },
    cl_operations: {
        columnName: ["Категория", "Единая формулировка"],
        childName: "oper"
    },
    cl_activestypes: {
        columnName: ["Тип активов"],
        childName: "acttypes",
        childClassifier: ["ACTIVETYPE"]
    },
    cl_activescalctypes: {
        columnName: ["Категория", "Сокращенное название (для расчетов)"],
        childName: "actcalc",
        childClassifier: ["ACTIVECALCTYPE"]
    },
    cl_activesobl: {
        columnName: ["Область", "Цвет выделения в отчетах"],
        childName: "obl",
        childClassifier: ["ACTIVEOBL"]
    },
    cl_countries: {
        columnName: ["Страна", "Код"],
        childName: "country",
        childClassifier: ["COUNTRY"]
    },
    cl_currency: {
        columnName: ["Название валюты", "Код"],
        childName: "cur",
        childClassifier: ["ACTIVEVAL", "OPERVAL"]
    },
    cl_unactives: {
        columnName: ["Унифицированное название", "Тип актива", "Тип актива для расчета", "Область", "Страна", "Валюта актива"],
        childName: "unact",
        childClassifier: ["ACTIVEEDI"]
    },
    cl_unactavgprice: {
        columnName: ["id", "Актив", "Дата", "Количество", "Средняя цена"]
    },
    cl_unoperations: {
        columnName: ["Актив"],
        childName: "unoper"
    },
    vv: {
        columnName:  ["Счет","Действия","Дата","Сумма","Валюта"],
        childName: "vv",
        childClassifier: ["VVOPER"]
    },
    vv_operations: {
        columnName:  ["Действие","Операция"],
        childName: "vvAct",
        childClassifier: ["OPERNAME"],
        apiTable: true,
        // editTableRow: false
    },
    cl_vvcomm: {
        childClassifier: ["OPERCOMM"]
    }
}

// export const editCellId = { // Данные о ячейка, которые стоит / не стоит редактировать
//     simpleInput: ["ACTPRICEAVG", "ACTPRICEBUY", "OPERSUM"],
//     color: ["COLOR"],   
// }

export const exeptionsDataForApiEdit = {
    ACTPRICEBUY: {
        defaultSendApi: 0,
        conditionOutput: "number"
    },
    ACTPRICEAVG: {
        defaultSendApi: 0,
        conditionOutput: "number"
    },
    OPERSUM: {
        defaultSendApi: 0,
        conditionOutput: "number",
    },
    avgprice: {
        defaultSendApi: 0,
        conditionOutput: "number"  
    },
    COLOR: {
        defaultSendApi: "#FFFFFF",
        conditionOutput: "color"
    },
    OPERNAME: {
        conditionOutput: "text"
    },
    
}
// apiTable - useHandleDataTable, обозначает, что если true,
// childClassifier - название классификаторов в строках других кклассификаторов - ACTIVENAME: Названия позиции из отчета банка'
// childName - методы для добавления / удалени / редактирования
