export const handleDateForUser = (date) => {
    let fulldate = date.split("-")

    return `${fulldate[2]}.${fulldate[1]}.${fulldate[0]}`
}