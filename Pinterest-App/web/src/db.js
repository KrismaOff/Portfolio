export function News(params, word) {
    let openReq = indexedDB.open("Post_User_DB", 2)
    let db;
    let transaction;

    openReq.onupgradeneeded = function (e) {
        db = e.target.result;
        if (!db.objectStoreNames.contains("post-user")) {
            db.createObjectStore("post-user", { keyPath: "id" })
        }
        if (!db.objectStoreNames.contains("post-user-likes")) {
            db.createObjectStore("post-user-likes", { keyPath: "id" })
        }
    }
    openReq.onsuccess = function (e) {
        console.log("Success! - News");
        db = e.target.result;

        transaction = db.transaction(["post-user"], "readwrite");
        const store = transaction.objectStore("post-user");

        if (word === "add") {
            store.add(params).onsuccess = e => console.log(e);
        } else if (word === "get") {
            store.openCursor().onsuccess = e => {
                const result = e.target.result;
                if (result) {
                    params[`num${Object.keys(params).length}`] = result.value
                    result.continue()
                }
            }
        } else if (word === "delete") {
            store.delete(params)
        } else {
            console.log("error");
        }

    }
    openReq.onerror = function (e) {
        console.log("Error - News", e);
    }
}
export function Likes(params, word) {

    let openReq = indexedDB.open("Post_User_DB", 2)
    let db;
    let transaction;

    openReq.onupgradeneeded = function (e) {
        db = e.target.result;
        if (!db.objectStoreNames.contains("post-user")) {
            db.createObjectStore("post-user", { keyPath: "id" })
        }
        if (!db.objectStoreNames.contains("post-user-likes")) {
            db.createObjectStore("post-user-likes", { keyPath: "id" })
        }
    }
    openReq.onsuccess = function (e) {
        console.log("Success! - News");
        db = e.target.result;

        transaction = db.transaction(["post-user-likes"], "readwrite");
        const store = transaction.objectStore("post-user-likes");

        if (word === "add") {
            store.add(params).onsuccess = e => console.log("OK!");
        } else if (word === "get") {
            store.openCursor().onsuccess = e => {
                const result = e.target.result;
                if (result) {
                    params[`num${Object.keys(params).length}`] = result.value
                    result.continue()
                }
            }
        } else if (word === "delete") {
            store.delete(params)
        } else {
            console.log("error");
        }

    }
    openReq.onerror = function (e) {
        console.log("Error - addNews");
    }
}