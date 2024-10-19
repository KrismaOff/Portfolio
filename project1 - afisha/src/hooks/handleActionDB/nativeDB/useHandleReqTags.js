import { createTable } from "../../../helper/DBfunc";

export default function useHandleReqTags() {

    const handleReqTags = (action, data, id) => {
        let openReq = indexedDB.open("AfishaSPFK_DB", 2)

        openReq.onupgradeneeded = (e) => { createTable("tag", "TAG_ID", e) }

        openReq.onsuccess = (e) => {
            const db = e.target.result;
            const transaction = db.transaction("tag", "readwrite");
            const store = transaction.objectStore("tag");

            switch (action) {
                case "add":         //handleReqTags("add", obj)
                    let obj = Object.assign({ "TAG_ID": Math.random().toString(16).slice(8) }, data)
                    store.add(obj)
                    break;
                case "del":         //handleReqTags("del", null, id)
                    store.delete(id); break;
                case "get":         //handleReqTags("get", obj, id)
                    store.get(id).onsuccess = e => data(e.target.result); break;
                case "getAll":      //handleReqTags("getAll", obj)
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

    return handleReqTags
}
