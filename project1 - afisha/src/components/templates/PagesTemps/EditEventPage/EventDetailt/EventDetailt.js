import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './EventDetailt.css'

import EventDetCell from '../EventDetCell'

import useHandleReqEvents from '../../../../../hooks/handleActionDB/nativeDB/useHandleReqEvents'
import useHandleReqUser from '../../../../../hooks/handleActionDB/nativeDB/useHandleReqUser'

import { StatusUserContext } from '../../../../App/App'

export default function EventDetailt({ id, data, ...props }) {

  const { admin } = useContext(StatusUserContext)

  const handleReqUser = useHandleReqUser()
  const handleReqEvents = useHandleReqEvents()

  const deleteCell = () => {
    if (window.confirm("Вы уверены?")) {
      if (id === "EVENT_LIST") handleReqEvents("del", null, props.EVENT_ID)
      else if (id === "USER") handleReqUser("del", null, props.USER_ID)
    }
  }

  const exeptions = {
    event_list: id === "EVENT_LIST",
    user: id === "USER" && admin
  }

  return (
    <tr>
      {data.map(key => {
        let comp;
        if (key) comp = <EventDetCell id={key.str} key={key.str} val={props[key.str]} name={key.name} linkBt={props.EVENT_ID} />
        return comp;
      })}

      {exeptions.event_list && <>
        <td><Link to={`/Admin/editEvent/${props.EVENT_ID}/info`}><button className='tableBtn'>Информация</button></Link></td>
        <td><Link to={`/Admin/editEvent/${props.EVENT_ID}/edit`}><button className='tableBtn'>Редактировать</button></Link></td>
        <td><button className='tableBtn' onClick={deleteCell}>Удалить</button></td>
      </>}
      {exeptions.user && <td><button className='tableBtn' onClick={deleteCell}>Удалить</button></td>}
    </tr>
  )
}
