export default function useHandleReqEventPlaces() {

    const handleReqEventPlaces = (action, data, id) => {
        let openReq = indexedDB.open("AfishaSPFK_DB", 2);

        openReq.onsuccess = function (e) {

            const db = e.target.result;
            const transaction = db.transaction("event_place", "readwrite");
            const store = transaction.objectStore("event_place");

            switch (action) {
                case "add":         //handleReqEventPlaces("add", obj)
                    let obj = Object.assign({ "EVENT_ID": Math.random().toString(16).slice(8) }, data)
                    store.add(obj)

                    break;
                case "del":         //handleReqEventPlaces("del", null, id)
                    store.delete(id); break;
                case "get":         //handleReqEventPlaces("get", obj, id)
                    store.get(id).onsuccess = e => data(e.target.result); break;
                case "getAll":      //handleReqEventPlaces("getAll", obj)
                    store.getAll().onsuccess = e => data(e.target.result); break;
                case "getKeys":
                    store.openCursor().onsuccess = e => {
                        const cursor = e.target.result;
                        if (cursor) {
                            id.includes(cursor.key) && data(prev => { return { ...prev, [cursor.key]: cursor.value } })
                            cursor.continue()
                        }
                    }; break;
                default: break;
            }
        }
    }

    return handleReqEventPlaces
}
