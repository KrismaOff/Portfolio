export default function useHandleReqCities() {

    const handleReqCities = (action, data, id) => {
        let openReq = indexedDB.open("AfishaSPFK_DB", 2);

        openReq.onsuccess = function (e) {

            const db = e.target.result;
            const transaction = db.transaction("city", "readwrite");
            const store = transaction.objectStore("city");

            switch (action) {
                case "add":         //handleReqCities("add", obj)
                    break;
                case "del":         //handleReqCities("del", null, id)
                    store.delete(id); break;
                case "get":         //handleReqCities("get", obj, id)
                    store.get(id).onsuccess = e => data(e.target.result); break;
                case "getAll":      //handleReqCities("getAll", obj)
                    store.getAll().onsuccess = e => data(e.target.result); break;
                default: break;
            }
        }
    }

    return handleReqCities
}
