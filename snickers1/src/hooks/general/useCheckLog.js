import { useEffect, useState } from "react"

export default function useCheckLog() {

    const [log, setLog] = useState()

    useEffect(() => {
        // localStorage.setItem("logIdUser", true)
        const prom = new Promise((res) => res(localStorage.getItem("logIdUser")))
        prom
            .then(res => setLog(res))
            .catch(() => setLog(false))
    }, [])


    return [log]
}
