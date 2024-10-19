import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { generalPageLink } from "../../assets/varibles/generalData";

export default function useDetermLoc() {

    const { pathname } = useLocation();

    const [location, setLocation] = useState()

    useEffect(() => {
        let key = Object.keys(generalPageLink).filter(key => {
            const data = generalPageLink[key]?.path
            return pathname?.includes(data) && key;
        })
        setLocation(generalPageLink[key])
    }, [pathname])

    return { location }
}
