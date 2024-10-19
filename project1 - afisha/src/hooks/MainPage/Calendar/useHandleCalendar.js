import { useState } from 'react'

export default function useHandleCalendar() {
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());    

    const handlePrevClick = () => {
        setMonth(month === 0 ? 11 : month - 1);
        if (month === 0) setYear(year - 1);
    };

    const handleNextClick = () => {
        setMonth(month === 11 ? 0 : month + 1);
        if (month === 11) setYear(year + 1);
    };

    return [handlePrevClick, handleNextClick, month, year]
}
