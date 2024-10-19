import { useEffect, useState } from 'react'

export default function useSwitchPageManagment() {

    const [activeComp, setActiveComp] = useState("CLASSIFIER")

    useEffect(() => {
        if (sessionStorage.length !== 0) setActiveComp(sessionStorage.getItem("activePage"))
        else sessionStorage.setItem("activePage", activeComp)
    }, [activeComp])

    const switchPage = (page) => {
        if (activeComp !== page) {
            sessionStorage.setItem("activePage", page)
            setActiveComp(page)
        }
    }

    return [activeComp, switchPage]
}
