export const createTable = (name, id, e) => {
    const db = e.target.result;
    if (!db.objectStoreNames.contains(name)) db.createObjectStore(name, { keyPath: id })
}

export const pullDB = (name, data, e) => {
    const db = e.target.result;
    const transaction = db.transaction(name, "readwrite");
    const store = transaction.objectStore(name);
    data.map(val => store.add(val))
}

export const handleDataFromUser = (data) => {
    let objEV = Object.assign({ EVENT_ID: "EVID_" + Math.random().toString(16).slice(8), EVENT_COMMENTS: [], EVENT_EDITERS: [], EVENT_USERS_PICKED: [] }, data)


    const handleObjData = obj => {
        let arr = []
        Object.keys(obj).map(key => {
            Object.keys(obj[key]).map(key1 => {
                if (obj[key][key1] !== null) arr.push(...obj[key][key1])
                return arr
            })
            return arr
        })
        return arr.filter((value, i) => i === arr.indexOf(value))
    }


    objEV.EVENT_SPEAKERS = handleObjData(objEV.EVENT_SPEAKERS)
    objEV.EVENT_MODERATORS = handleObjData(objEV.EVENT_MODERATORS)

    let objEVLS = (({ EVENT_COMMENTS, EVENT_DESCRIBE, EVENT_MODERATORS, EVENT_SPEAKERS, EVENT_TABLE, EVENT_USERS_PICKED, ...others }) => others)(objEV)

    return { events: objEV, events_list: objEVLS }
}
