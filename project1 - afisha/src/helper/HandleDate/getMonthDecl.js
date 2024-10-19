export const getMonthDecl = (date, act) => {
    let words_arr = ["", "Января", "Февраля", "Марта", "Апреля", 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
    let day, month
    if (date) {
        day = date.split(".").at(-1)
        month = date.split(".").at(1)
        if (date && Number(month[0]) === 0) month = month[1]
        if (date && Number(day[0]) === 0) day = day[1]
    }

    if (act === "system") return month
    else return `${day} ${words_arr[month]}`
}