import React, { useContext } from 'react'
import './AdminNav.css'

import CardCategory from '../../../../CardTemps/CardCategory';
import useGetEventsData from '../../../../../hooks/handleActionDB/RecieveDATA/useGetEventsData';
import useGetEventsListData from '../../../../../hooks/handleActionDB/RecieveDATA/useGetEventsListData';

import { StatusUserContext } from '../../../../App/App';

export default function AdminNav() {

    const { admin } = useContext(StatusUserContext)

    const { eventsData } = useGetEventsData("all")
    const { eventsListData } = useGetEventsListData("all")

    return (
        <div className='btnCont'>
            <CardCategory name="Все события" path="/Admin/allEvents" />
            <CardCategory name="Все пользователи" path="/Admin/allUsers" />
            <CardCategory name="Создать событие" path="/Admin/createEvent" />
            {admin && <>
                <div className='adminBtn' onClick={() => { indexedDB.deleteDatabase('AfishaSPFK_DB'); window.location.reload() }}>Сбросить базу данных</div>
                <div className='adminBtn' onClick={() => { localStorage.clear(); window.location.reload() }}>Сбросить localStorage</div>
                <div className='adminBtn' onClick={() => { console.log(eventsData); }}>EVENTS, см. консоль</div>
                <div className='adminBtn' onClick={() => { console.log(eventsListData); }}>LIST, см. консоль</div>
            </>}
        </div>
    )
}
