export default function useGetWeekends() {
    const getWeekends = (year, day, month) => {
        const dateVar = new Date(year, month, day);
        if (dateVar.getUTCDay() === 0 || dateVar.getUTCDay() === 6) return true
    }

    return getWeekends
}
