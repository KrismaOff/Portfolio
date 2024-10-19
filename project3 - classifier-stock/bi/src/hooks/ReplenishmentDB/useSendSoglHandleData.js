import useSendSoglAPI from "./useSendSoglAPI";

export default function useSendSoglHandleData(selectedSogl, date) {

    const sendSoglAPI = useSendSoglAPI()

    const sendSoglHandleData = () => {
        let obj = {
            "Uploader": {
                "crdate": "",
                "prevsogllist": []
            }
        }

        obj.Uploader.crdate = date


        if (!selectedSogl || !Object.values(selectedSogl).includes(true)) {
            let objForAPI = JSON.stringify(obj)
            if (window.confirm("Пополнить БД?")) sendSoglAPI(objForAPI)
        }
        else {
            Object.keys(selectedSogl).map(key => {
                if (selectedSogl[key]) obj.Uploader.prevsogllist.push({ "Sogl": key });
                return obj
            })

            let objForAPI = JSON.stringify(obj)
            if (window.confirm("Пополнить БД?")) sendSoglAPI(objForAPI)
        }

        // if (selectedSogl || Object.values(selectedSogl).includes(true)) {
        //     Object.keys(selectedSogl).map(key => {
        //         if (selectedSogl[key]) obj.Uploader.prevsogllist.push({ "Sogl": key });
        //         return obj
        //     })
        // }

        // let objForAPI = JSON.stringify(obj)
        // if (window.confirm("Пополнить БД?")) sendSoglAPI(objForAPI)

    }
    return sendSoglHandleData
}
