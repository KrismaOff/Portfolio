import { getDateToday } from "./getDateToday";
import { getDayTitle } from './getDayTitle'
import { handleDate } from "./handleDate";

export const getExpectationDate = (fulldate, action) => {
    // - 1 : будет через 1 день
    // + 1 : прошло 1 день назад

    let diff = Math.floor((Date.parse(handleDate(getDateToday())) - Date.parse(fulldate)) / 86400000);
    let days = Math.abs(diff), state = Math.sign(diff)

    let res;
    switch (state) {
        case 0: res = "Сегодня"; break;
        case 1: res = `Было ${days} ${getDayTitle(days)} назад`; break;
        case -1: res = `Будет через ${days} ${getDayTitle(days)}`; break;
        default: break;
    }

    if (action === "system") return { days: diff, state:  Math.sign(diff)}
    else return res
}
