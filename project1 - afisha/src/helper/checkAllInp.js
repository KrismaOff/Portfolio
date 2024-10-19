export const checkAllInp = (data) => {
    let result = true;
    const exeptions = key => key !== "EVENT_COMMENTS" && key !== "EVENT_MODERATORS" && key !== "EVENT_SPEAKERS" && key !== "EVENT_USERS_PICKED" && key !== "EVENT_AUTHOR" && key !== "EVENT_EDITERS" && key !== "EVENT_TABLE"

    Object.keys(data).map(key => {
        let val = data[key]
        if (exeptions(key)) {
            if (typeof val === 'string' && val.length === 0) result = false;
            else if (typeof val === 'object' && Object.values(Object.values(val)).length === 0) result = false;
        }
        return result
    })

    return result
}