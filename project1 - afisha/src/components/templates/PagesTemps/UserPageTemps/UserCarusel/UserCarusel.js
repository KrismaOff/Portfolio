import React, { useContext } from 'react'
import './UserCarusel.css'

import CardEvent from '../../../../CardTemps/CardEvent'

import { StatusUserContext } from '../../../../App/App'

import useGetEventsListData from '../../../../../hooks/handleActionDB/RecieveDATA/useGetEventsListData'
import useFilterDate from '../../../../../hooks/AdminPage/useFilterDate'
import useHandleReqUser from '../../../../../hooks/handleActionDB/nativeDB/useHandleReqUser'

export default function UserCarusel({ events, formatSpace, formatDate }) {

    const { user } = useContext(StatusUserContext)

    const handleReqUser = useHandleReqUser()

    const [upDown, downUp] = useFilterDate()
    const { eventsListData } = useGetEventsListData(events)

    const unsubscribe = eventId => {
        if (window.confirm("Вы уверены что хотите отписаться")) {
            handleReqUser("delFavourites", eventId, user);
            window.location.reload()
        }
    }

    const comp = (i, val) =>
        <div key={i} className={`cardEventCont cardEventCont${formatSpace}`}>
            <button onClick={() => unsubscribe(val)} className='delBtn'>Отписаться</button>
            <CardEvent name={formatSpace !== 2} id={val} />
        </div>

    const mapFunc = obj => obj.map((val, i) => comp(i, val))

    const exeptions = {
        all: formatDate === 0 && events && events.length !== 0,
        futurepast: formatDate === 1 && eventsListData,
        pastfuture: formatDate === 2 && eventsListData,
        sortFP: downUp(eventsListData),
        sortPF: upDown(eventsListData)
    }

    return (
        <div>
            {events && events.length === 0 ? <div className='notEv'>Нет избранных событий</div>
                :
                <div className={`userCaruselCont userCarusel${formatSpace}`}>
                    {exeptions.all && events.map((val, i) => comp(i, val))}
                    {exeptions.futurepast && mapFunc(exeptions.sortFP)}
                    {exeptions.pastfuture && mapFunc(exeptions.sortPF)}
                </div>
            }

        </div>
    )
}
