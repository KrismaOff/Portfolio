import { useState, useEffect } from "react";

export default function useHanldeSessionClassifier(data, setClassifier) {
    const [selectedClassifier, setSelectedClassifier] = useState()

    useEffect(() => {
        if (sessionStorage["activeClassifier"]) {
            let classifierCache = JSON.parse(sessionStorage.getItem("activeClassifier"))
            setSelectedClassifier(classifierCache.cl_name)                                         // название для списка
            setClassifier({ cl_key: classifierCache.cl_key, cl_name: classifierCache.cl_name })     // данные для table
        } else if (data) {
            setSelectedClassifier(data[0].CLDESC)                                    // название для списка
            setClassifier({ cl_key: data[0].CLNAME, cl_name: data[0].CLDESC })     // данные для table
        }
    }, [data, setClassifier])


    return [selectedClassifier, setSelectedClassifier]
}
