import React, { useContext } from 'react'
import './CardsCont.css'

import CardEvent from '../CardEvent/'

import { StatusUserContext } from '../../App/App'

import { handleDate } from '../../../helper/HandleDate/handleDate'
import { getDateToday } from '../../../helper/HandleDate/getDateToday'

export default function CardsCont({ id, filter, eventsListData }) {

    const { access } = useContext(StatusUserContext)

    return (
        <div className='cardContainer'>
            {Object.keys(eventsListData).map(key => {
                const { EVENT_ID, EVENT_DATE, ACCESS_USER_ID, TAG_ID, EVENT_PLACE_ID } = eventsListData[key];
                const shortComp = <CardEvent key={key} id={EVENT_ID} />, date = handleDate(EVENT_DATE);
                let comp, accessPost

                access === "ADMIN" || access === "ORGANIZER" ? accessPost = true : accessPost = ACCESS_USER_ID === access || ACCESS_USER_ID === "ALL"

                switch (filter) {
                    case "allevents": if (accessPost) comp = shortComp; break;
                    case "date": if (date === handleDate(id) && accessPost) comp = shortComp; break;
                    case "pastevents": if (date < handleDate(getDateToday()) && accessPost) comp = shortComp; break;
                    case "futureevents": if (date > handleDate(getDateToday()) && accessPost) comp = shortComp; break;
                    case "tag": if (TAG_ID === id && accessPost) comp = shortComp; break;
                    case "event_place": if (EVENT_PLACE_ID === id && accessPost) comp = shortComp; break;
                    default: break;
                }

                return comp;
            })}
        </div>
    )
}
