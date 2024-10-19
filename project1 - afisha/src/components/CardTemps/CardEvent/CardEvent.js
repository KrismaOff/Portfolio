import React, { useState } from 'react'
import './CardEvent.css'


import Loading from '../../templates/mainTemps/Loading'

import { Link } from 'react-router-dom'

import { getMonthDecl } from '../../../helper/HandleDate/getMonthDecl'
import { handleDate } from '../../../helper/HandleDate/handleDate'
import { getExpectationDate } from '../../../helper/HandleDate/getExpectationDate'
import useGetTagsData from '../../../hooks/handleActionDB/RecieveDATA/useGetTagsData'
import useGetPlacesListData from '../../../hooks/handleActionDB/RecieveDATA/useGetPlacesListData'
import useGetEventsData from '../../../hooks/handleActionDB/RecieveDATA/useGetEventsData'

export default function CardEvent({ name = true, id }) {

    const { eventsData } = useGetEventsData(id)
    const { eventPlacesData } = useGetPlacesListData(eventsData?.EVENT_PLACE_ID)
    const { tagsData } = useGetTagsData(eventsData?.TAG_ID)

    const [state, setState] = useState(false)
    const checkWind = (bool) => window.innerWidth > 500 && setState(bool)

    return (
        <Link to={`/Events/${eventsData && eventsData.EVENT_ID}`} className="Link">
            <div className='card' onMouseOver={() => checkWind(true)} onMouseOut={() => checkWind(false)}>
                <div className={state ? "upLayerCard layerAct" : "upLayerCard"}>
                    {(name || state) && <div className={state ? "cardName nameAct" : "cardName"}>{eventsData?.EVENT_NAME}</div>}

                    {state && <div>
                        <span className='cardTag'>{tagsData.TAG_NAME}</span>
                        <div className='line' />
                        <span className="cardTimePlace">{getMonthDecl(handleDate(eventsData?.EVENT_DATE))} - {eventPlacesData.EVENT_PLACE_NAME} | {eventsData.EVENT_TIME?.join("-")}</span>
                        {eventsData.EVENT_DATE && <div className='countDays'>{getExpectationDate(eventsData.EVENT_DATE)}</div>}
                    </div>}

                </div>
                <div className='cardBackground'>
                    {eventsData?.EVENT_IMG ?
                        <>{(name || state) && <div className={state ? "upLayerCardBackground layerBackAct " : "upLayerCardBackground"}></div>}
                        <img className='cardBackgroundImg' src={eventsData?.EVENT_IMG} alt="" /></> :
                        <div className='picNone'><Loading/></div>}
                </div>
            </div>
        </Link>
    )
}
