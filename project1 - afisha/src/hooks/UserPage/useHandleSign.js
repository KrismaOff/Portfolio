import { useState, useEffect } from "react"
import { useNavigate } from "react-router"

import useHandleReqUser from '../handleActionDB/nativeDB/useHandleReqUser'

export default function useHandleSignUp(action, length) {

    const handleReqUser = useHandleReqUser()
    const navigate = useNavigate()

    const err = {
        inp: "Заполните все поля!",
        data: "Такая почта уже зарегистрирована в системе",
        length: "Минимальное кол-во символов пароля - 10",
        signin: { data: "Неверно указаны почта или пароль" },
        signup: { data: "Такая почта уже зарегистрирована в системе" }
    }

    const [data, setData] = useState()
    const [status, setStatus] = useState({ status: false, error: "" })
    const [objData, setObjData] = useState("")

    useEffect(() => {
        if (action === "signin") {
            if (objData) { // IN
                localStorage.setItem("userId", objData)
                window.location.reload()
            }
            if (objData === undefined) setStatus({ status: true, error: err[action].data })
        } else if (action === "signup") {
            if (Array.isArray(objData)) { // UP
                alert(objData.join(" ") + ", вы уже зарегистрированы на платформе")
                navigate("/User/SignIn")
                setObjData("")
            } else if (objData === undefined) {
                let obj = Object.assign({}, data)
                obj.USER_NAME = data.USER_NAME.split(" ")
                handleReqUser("add", obj)
                window.location.reload()
            }
        }
        // eslint-disable-next-line
    }, [objData, data])

    const changeFunc = e => {
        if (e.target.className.includes("input")) setData(prev => { return { ...prev, [e.target.id]: e.target.value } })
        else setData(prev => { return { ...prev, [e.target.id]: e.target[e.target.selectedIndex].id } })
    }

    const sign = () => {
        if (data) {
            if (data && Object.values(data).filter(val => val.length !== 0).length !== length) setStatus({ status: true, error: err.inp })
            else if (data.USER_PASSWORD.length < 10) setStatus({ status: true, error: err.length })
            else {
                setStatus({ status: false, error: "" })
                handleReqUser(action, setObjData, data)
            }
        } else setStatus({ status: true, error: err.inp })
    }

    return [sign, changeFunc, status]

}
