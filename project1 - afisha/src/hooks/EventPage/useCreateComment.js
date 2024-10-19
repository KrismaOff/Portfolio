import { useContext } from "react"

import { StatusUserContext } from "../../components/App/App"
import { useNavigate } from "react-router"

import { getDateToday } from "../../helper/HandleDate/getDateToday"
import { handleDate } from "../../helper/HandleDate/handleDate"

import useHandleReqEvents from "../handleActionDB/nativeDB/useHandleReqEvents"

export default function useCreateComment(eventsData) {

    const handleReqEvents = useHandleReqEvents()
    const navigate = useNavigate()
    const { user } = useContext(StatusUserContext)

    const createComment = (message, score) => {
        if (!user) { if (window.confirm("Чтобы оставить свою оценку, вам нужно войти или зарегистрироваться, продолжить?")) navigate("/User/SignUp") }
        else {
            const time = new Date().toLocaleTimeString()
            let comment = {
                USER_ID: user,
                MESSAGE: message,
                DATE: handleDate(getDateToday("system"), "system"),
                TIME: time.substring(0, time.length - 3),
                SCORE: score,
            }
            if (window.confirm("Оставить свою оценку?")) handleReqEvents("addComment", comment, eventsData)
        }
    }

    return createComment
}
