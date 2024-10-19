import { useState } from 'react'

export default function useChangeDataSlider(data) {

    const [count, setCount] = useState(0)

    const changeData = (action) => {
        let newCount;
        if (action === "minus") newCount = count === 0 ? data.length - 1 : count - 1;
        else newCount = count === data.length - 1 ? 0 : count + 1;
        setCount(newCount);
    };

    return [count, setCount, changeData]

}
