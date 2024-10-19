import { handleDataFromUser } from "../../../helper/DBfunc";
import useHandleReqEventsList from "./useHandleReqEventsList";
// import useHandleReqUser from "./useHandleReqUser";

export default function useHandleReqEvents() {

    // const handleReqUser = useHandleReqUser()
    const handleReqEventsList = useHandleReqEventsList()

    const handleReqEvents = (action, data, id) => {

        let openReq = indexedDB.open("AfishaSPFK_DB", 2);

        openReq.onsuccess = function (e) {
            const db = e.target.result;
            const transaction = db.transaction("event", "readwrite");
            const store = transaction.objectStore("event");

            let event, comment

            switch (action) {
                case "add":         //handleReqEvent("add", obj)
                    let processedDataAdd = handleDataFromUser(data)
                    store.add(processedDataAdd.events)
                    handleReqEventsList("add", processedDataAdd.events_list)
                    alert("Пост был успешно создан!")
                    window.location.href = "/Calendar/Filter/allEvents"
                    break;
                case "del":         //handleReqEvent("del", null, id)
                    store.delete(id)
                    handleReqEventsList("del", "", id)
                    window.location.reload()
                    break;
                case "get":         //handleReqEvent("get", obj, id)
                    store.get(id).onsuccess = e => data(e.target.result); break;
                case "getAll":      //handleReqEvent("getAll", obj)
                    store.getAll().onsuccess = e => data(e.target.result); break;
                case "getKeys":
                    store.openCursor().onsuccess = e => {
                        const cursor = e.target.result;
                        if (cursor) {
                            id.includes(cursor.key) && data(prev => { return { ...prev, [cursor.key]: cursor.value } })
                            cursor.continue()
                        }
                    }; break;
                case "edit":        //handleReqEvent("edit", data)
                    let processedDataEdit = handleDataFromUser(data)
                    store.put(processedDataEdit.events)
                    handleReqEventsList("edit", processedDataEdit.events_list)
                    alert("Пост был успешно отредактирован!")
                    window.location.href = "/Admin/allEvents"

                    break;
                case "addComment":
                    event = JSON.parse(JSON.stringify(id));
                    comment = Object.assign({ ID: "CMID_" + Math.random().toString(16).slice(8) }, data)
                    event.EVENT_COMMENTS.push(comment)
                    store.put(event)
                    window.location.reload()

                    break;
                case "delComment":
                    event = JSON.parse(JSON.stringify(data));
                    let doneEvent = event.EVENT_COMMENTS.filter(val => val.ID !== id)
                    event.EVENT_COMMENTS = doneEvent
                    store.put(event)
                    window.location.reload()

                    break;
                case "addFavourites":
                    store.get(id).onsuccess = e => {
                        let oldReq = e.target.result
                        oldReq.EVENT_USERS_PICKED.push(data)
                        store.put(oldReq)
                    }
                    break;
                case "delFavourites":
                    store.get(id).onsuccess = e => {
                        let oldReq = e.target.result
                        let newArr = oldReq.EVENT_USERS_PICKED.filter(n => n !== data)
                        oldReq.EVENT_USERS_PICKED = newArr
                        store.put(oldReq)
                    }
                    break;
                case "put":
                    store.put(data); break;

                default: break;
            }
        }
    }

    return handleReqEvents
}
