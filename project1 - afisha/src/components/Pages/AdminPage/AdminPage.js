import React, { useContext } from 'react'
import './AdminPage.css'

import EditEventPage from '../../templates/PagesTemps/AdminPage/EditEventPage'
import CreateEventContPage from '../CreateEventPage/CreateEventContPage'
import EventTable from '../../templates/PagesTemps/EditEventPage/EventTable'
import AdminNav from '../../templates/PagesTemps/AdminPage/AdminNav/AdminNav'

import { StatusUserContext } from '../../App/App'

import { useLoaderData } from 'react-router'

export default function AdminPage() {

    const { org } = useContext(StatusUserContext)

    const [action] = useLoaderData()

    return (
        <div>
            {org ?
                <div>
                    <AdminNav />
                    <div className='adminCont'>
                        {action === "allEvents" && <EventTable action="EVENT_LIST" />}
                        {action === "allUsers" && <EventTable action="USER" />}
                        <div className='adminPageCont'>
                            {action === "createEvent" && <CreateEventContPage />}
                            {action === "editEvent" && <EditEventPage />}
                        </div>
                    </div>
                </div> :
                <div className='notAccess'>У вас нет доступа к этой странице, обратитесь к вашему сисадмину! =)</div>
            }
        </div>
    )
}
