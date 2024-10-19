export const getDateToday = (act) => {
    const date = new Date()
    let fulldate;
    if (act === "system") fulldate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    else fulldate = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
    
    return fulldate


}