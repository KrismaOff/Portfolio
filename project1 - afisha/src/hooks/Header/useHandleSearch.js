import { useState, useContext } from "react"
import { useNavigate } from 'react-router'
import { StatusUserContext } from "../../components/App/App"

import useGetEventsListData from "../handleActionDB/RecieveDATA/useGetEventsListData"

export default function useHandleSearch(childElem) {

    const { access } = useContext(StatusUserContext)

    const [searchEvents, setSearcEvents] = useState()
    const navigate = useNavigate();
    const { eventsListData } = useGetEventsListData("all")

    const handleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase();
        setSearcEvents(Object.entries(eventsListData)
            .filter(
                ([, event]) =>
                    event.EVENT_NAME.toLowerCase().includes(searchValue) &&
                    (event.ACCESS_USER_ID === access ||
                        event.ACCESS_USER_ID === "ALL" ||
                        access === "ADMIN" ||
                        access === "ORGANIZER")
            )
            .reduce((obj, [, value]) => {
                obj[value.EVENT_ID] = [value.EVENT_NAME, value.EVENT_DATE];
                return obj;
            }, {}));

        const opts = childElem.current.childNodes;
        for (let i = 0; i < opts.length; i++) {
            if (opts[i].value === e.target.value) {
                const string = opts[i].value.replace(/\(.+\)/, "").trim();
                const EVID = Object.values(eventsListData).find(event => event.EVENT_NAME === string).EVENT_ID;
                navigate(`/Events/${EVID}`);
                setTimeout(() => window.location.reload(), 100);
            }
        }
    };

    return [handleSearch, searchEvents]
}
