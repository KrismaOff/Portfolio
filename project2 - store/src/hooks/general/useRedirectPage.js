import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { generalPageLink } from "../../assets/varibles/generalData";

export default function useRedirectPage(condition, path = "main") {

    const navigate = useNavigate()
    const [state, setState] = useState(false)
    
    useEffect(() => {
        const [firstPath, secondPath] = path.split(",")
        const pathF = `${generalPageLink[firstPath].path}/${secondPath ? secondPath : ""}`
        if (condition !== undefined && Boolean(condition) !== true) {
            navigate(pathF)
            setState(true)
        }
    }, [path, condition, navigate])
    

    return [state]
}
