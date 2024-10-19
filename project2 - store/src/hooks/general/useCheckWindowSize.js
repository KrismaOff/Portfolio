import { useEffect, useState } from 'react'

export default function useCheckWindowSize(mode = "mobile") {
    
    // const [size] = useCheckWindowSize()
    
    const [size, setSize] = useState(false)


    useEffect(() => {
        const modeOptions = {
            mobile: [300, 900],
            wide: [2000, 3000],
            // medium: [1400, 1500]
        }
        setSize(window.screen.width >= modeOptions[mode][0] && window.screen.width <= modeOptions[mode][1] && true)
    }, [mode])

    return [size]
}
