import { createTable } from "../../../helper/DBfunc";

export default function useHandleReqEventsList() {

    const sendEvents = (list, data) => {
        data(list)
    }

    const handleReqEventsList = (action, data, id) => {
        let openReq = indexedDB.open("AfishaSPFK_DB", 2);

        openReq.onupgradeneeded = (e) => { createTable("event_list", "EVENT_ID", e) }

        openReq.onsuccess = function (e) {
            const db = e.target.result;
            const transaction = db.transaction("event_list", "readwrite");
            const store = transaction.objectStore("event_list");

            switch (action) {
                case "add":         //handleReqEventsList("add", obj)
                    let obj = Object.assign({ "EVENT_ID": Math.random().toString(16).slice(8) }, data)
                    store.add(obj)
                    break;
                case "del":         //handleReqEventsList("del", null, id)
                    store.delete(id); break;
                case "get":         //handleReqEventsList("get", obj, id)
                    store.get(id).onsuccess = e => data(e.target.result);
                    break;
                case "getAll":      //handleReqEventsList("getAll", obj)
                    store.getAll().onsuccess = e => data(e.target.result);
                    break;
                case "getAllPag":
                    let cursor = store.openCursor()
                    let posts = []
                    cursor.onsuccess = e => {
                        let curs = e.target.result

                        if (curs && posts.length < 10) {
                            posts.push(curs.value)
                            curs.continue()
                        } else sendEvents(posts, data)
                    }
                    break;
                case "getKeys":
                    id.map((val) => store.get(val).onsuccess = e => data(prev => { return { ...prev, [val]: e.target.result } }))
                    break;
                case "edit":
                    store.put(data); break;
                default: break;
            }
        }
    }

    return handleReqEventsList
}
