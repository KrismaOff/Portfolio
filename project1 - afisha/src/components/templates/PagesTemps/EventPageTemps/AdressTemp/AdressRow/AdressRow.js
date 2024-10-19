import React from 'react'
import './AdressRow.css'

import useGetPlacesListData from '../../../../../../hooks/handleActionDB/RecieveDATA/useGetPlacesListData'
import useGetUniversalData from '../../../../../../hooks/handleActionDB/RecieveDATA/useGetUniversalData'

export default function AdressRow({ place }) {

    const { eventPlacesData } = useGetPlacesListData(place)
    const { universalData } = useGetUniversalData("CITY", eventPlacesData?.CITY_ID)

    return (
        <div className='adressDesc'>
            <span>Метро "{eventPlacesData.EVENT_PLACE_NAME}"</span>,&ensp;
            <span>{universalData?.CITY_NAME}</span>,&ensp;
            <a className='adressCl' href={eventPlacesData.EVENT_PLACE_ADRESS_LINK}>
                {eventPlacesData.EVENT_PLACE_ADRESS}.
            </a>&ensp;
        </div>
    )
}
