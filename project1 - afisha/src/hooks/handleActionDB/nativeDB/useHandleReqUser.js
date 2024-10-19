import useHandleReqEvents from "./useHandleReqEvents";

export default function useHandleReqUser() {

    const handleReqEvents = useHandleReqEvents()

    const handleReqUser = (action, data, id) => {
        let openReq = indexedDB.open("AfishaSPFK_DB", 2);

        openReq.onsuccess = function (e) {
            const db = e.target.result;
            const transaction = db.transaction("user", "readwrite");
            const store = transaction.objectStore("user");

            switch (action) {
                case "add":         //handleReqUser("add", obj)
                    let obj = Object.assign({ "USER_PICKED": [], "USER_PHOTO": "", "USER_ID": "USERID_" + Math.random().toString(16).slice(8) }, data)
                    store.add(obj)
                    localStorage.setItem("userId", obj.USER_ID)
                    break;
                case "del":         //handleReqUser("del", null, id)
                    store.delete(id);
                    window.location.reload();
                    break;
                case "get":         //handleReqUser("get", obj, id)
                    store.get(id).onsuccess = e => data(e.target.result); break;
                case "getAll":      //handleReqUser("getAll", obj)
                    store.getAll().onsuccess = e => data(e.target.result); break;
                case "getKeys":
                    store.openCursor().onsuccess = e => {
                        const cursor = e.target.result;
                        if (cursor) {
                            id.includes(cursor.key) && data(prev => { return { ...prev, [cursor.key]: cursor.value } })
                            cursor.continue()
                        }
                    }; break;
                case "addFavourites":      //handleReqUser("edit", data)
                    store.get(id).onsuccess = e => {
                        let oldReq = e.target.result
                        oldReq.USER_PICKED.push(data)
                        store.put(oldReq)
                        handleReqEvents("addFavourites", id, data)
                    }
                    break;
                case "delFavourites":      //handleReqUser("edit", data)
                    store.get(id).onsuccess = e => {
                        let oldReq = e.target.result
                        let newArr = oldReq.USER_PICKED.filter(n => n !== data)
                        oldReq.USER_PICKED = newArr
                        store.put(oldReq)
                        handleReqEvents("delFavourites", id, data)
                    }

                    break;
                case "edit":
                    store.get(id).onsuccess = (e) => {
                        let oldReq = e.target.result;
                        Object.keys(data).map(key => oldReq[key] = data[key])
                        store.put(oldReq)
                    }
                    window.location.reload()
                    break;
                case "signin":      //handleAccessUser("getAll", obj)
                    store.getAll().onsuccess = e => {
                        let res;
                        for (let obj of e.target.result) {
                            if (obj.USER_EMAIL === id.USER_EMAIL && obj.USER_PASSWORD === id.USER_PASSWORD) {
                                res = obj.USER_ID;
                                break; // останавливаем цикл после нахождения первого соответствия
                            }
                        }
                        data(res);
                    };
                    break;
                case "signup":      //handleAccessUser("getAll", obj)
                    store.getAll().onsuccess = e => {
                        let res;
                        for (let obj of e.target.result) {
                            if (obj.USER_EMAIL === id.USER_EMAIL) {
                                res = obj.USER_NAME;
                                break; // останавливаем цикл после нахождения первого соответствия
                            }
                        }
                        data(res);
                    };
                    break;
                default: break;
            }
        }
    }

    return handleReqUser
}
