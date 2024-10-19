export const recieveDate = (e) => {
    const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    let daterFormate = e.toDateString().split(' ')
    let dateForAPI = `${daterFormate[3]}-${months.indexOf(daterFormate[1])}-${daterFormate[2]}`
    let dateForUser = `${daterFormate[2]}.${months.indexOf(daterFormate[1])}.${daterFormate[3]}`

    return { dateForAPI, dateForUser }
}
export const recieveLastWorkDate = () => {

    let dayNum = new Date().getDay()

    if (dayNum === 1) return recieveDate(new Date(Date.now() - (86400000 * 3))).dateForUser
    else if (dayNum === 6) return recieveDate(new Date(Date.now() - 86400000)).dateForUser
    else if (dayNum === 0) return recieveDate(new Date(Date.now() - (86400000 * 2))).dateForUser
    else return recieveDate(new Date(Date.now() - 86400000)).dateForUser
}