import { date } from "../../../helper/data";

export default function useGetDayOfWeek() {
    const getDayOfWeek = (year, day, month) => {
        const dateVar = new Date(year, month, day);
        return date.daysOfWeek[dateVar.getUTCDay()];
    };

    return getDayOfWeek
}
