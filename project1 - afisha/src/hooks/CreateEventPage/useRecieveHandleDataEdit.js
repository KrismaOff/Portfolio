import { useEffect, useState, useContext } from 'react'

import { StatusUserContext } from '../../components/App/App'

export default function useRecieveHandleDataEdit(eventsData, tagsData, eventPlacesData) {

    const { user } = useContext(StatusUserContext)

    const [data, setData] = useState({
        ACCESS_USER_ID: "",
        EVENT_PLACE_ID: "",
        TAG_ID: "",
        EVENT_DATE: "",
        EVENT_TIME: [],
        EVENT_NAME: "",
        EVENT_DESCRIBE: "",
        EVENT_DESCRIBE_MD: "",
        EVENT_SPEAKERS: {},
        EVENT_MODERATORS: {},
        EVENT_IMG: "",
        EVENT_TABLE: [],
        EVENT_EDITERS: [],
        USER_ID: user && user,
    })

    useEffect(() => {
        if (eventsData) {
            let obj = JSON.parse(JSON.stringify(eventsData))

            delete obj.EVENT_LIKES

            let EVENT_SPEAKERS = {}, EVENT_MODERATORS = {};
            obj.EVENT_TABLE && Object.keys(obj.EVENT_TABLE).map(key => {
                obj.EVENT_TABLE[key].map(val => {// [{},{}]

                    EVENT_SPEAKERS[key] ??= []
                    EVENT_SPEAKERS[key].push(val.SPEAKERS);

                    EVENT_MODERATORS[key] ??= []
                    EVENT_MODERATORS[key].push(val.MODERATORS);

                    return EVENT_SPEAKERS && EVENT_MODERATORS
                })
                return EVENT_SPEAKERS && EVENT_MODERATORS
            })
            obj.EVENT_SPEAKERS = EVENT_SPEAKERS; obj.EVENT_MODERATORS = EVENT_MODERATORS

            setData(obj)
        }
    }, [eventsData, tagsData, eventPlacesData, user])

    return [data, setData]
}