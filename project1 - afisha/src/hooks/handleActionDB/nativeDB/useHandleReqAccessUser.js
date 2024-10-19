import { createTable } from "../../../helper/DBfunc";

export default function useHandleReqAccessUser() {

    const handleAccessUser = (action, data, id) => {
        let openReq = indexedDB.open("AfishaSPFK_DB", 2)

        openReq.onupgradeneeded = (e) => { createTable("access_user", "ACCESS_USER_ID", e) }

        openReq.onsuccess = (e) => {
            const db = e.target.result;
            const transaction = db.transaction("access_user", "readwrite");
            const store = transaction.objectStore("access_user");

            switch (action) {
                case "add":         //handleAccessUser("add", obj)
                    let obj = Object.assign({ "ACCESS_USER_ID": Math.random().toString(16).slice(8) }, data)
                    store.add(obj)
                    break;
                case "del":         //handleAccessUser("del", null, id)
                    store.delete(id); break;
                case "get":         //handleAccessUser("get", obj, id)
                    store.get(id).onsuccess = e => data(e.target.result); break;
                case "getAll":      //handleAccessUser("getAll", obj)
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

    return handleAccessUser
}
