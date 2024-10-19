import { useEffect, useState } from 'react'
import { EventsList, EventPlaces, Events, Users, Tags, AccessUser, Cities } from '../../../dataDB';

import { createTable, pullDB } from '../../../helper/DBfunc';

export default function useCreateDB() {

    const [status, setStatus] = useState()

    useEffect(() => {
        let openReq = indexedDB.open("AfishaSPFK_DB", 2);
        
        setStatus(true)

        openReq.onupgradeneeded = (e) => {
            createTable("event_list", "EVENT_ID", e)
            createTable("user", "USER_ID", e)
            createTable("tag", "TAG_ID", e)
            createTable("access_user", "ACCESS_USER_ID", e)
            createTable("event_place", "EVENT_PLACE_ID", e)
            createTable("city", "CITY_ID", e)
            createTable("event", "EVENT_ID", e)
            setStatus(false)
        }
        openReq.onsuccess = (e) => {
            pullDB("event_list", EventsList, e)
            pullDB("user", Users, e)
            pullDB("tag", Tags, e)
            pullDB("access_user", AccessUser, e)
            pullDB("event_place", EventPlaces, e)
            pullDB("city", Cities, e)
            pullDB("event", Events, e)
            setStatus(true)
        }
        openReq.onerror = _ => console.log("error useCreateDB");
    }, [])


    return [status]

}
