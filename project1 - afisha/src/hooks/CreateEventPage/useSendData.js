import useHandleReqEvents from '../handleActionDB/nativeDB/useHandleReqEvents'
import { checkAllInp } from '../../helper/checkAllInp'

import { StatusUserContext } from '../../components/App/App'
import { useContext } from 'react'

export default function useSendData(eventsData) {

  const { user } = useContext(StatusUserContext)

  const handleReqEvents = useHandleReqEvents()

  const sendData = (data) => {
    if (!checkAllInp(data)) alert("Вы должны заполнить все поля!")
    else {
      if (window.confirm("Вы уверены?")) {
        if (eventsData) {
          let obj = JSON.parse(JSON.stringify(data))
          obj.EVENT_EDITERS.push(user)
          handleReqEvents("edit", obj)
        }
        else handleReqEvents("add", data, null)
      }
    }
  }

  return sendData
}
