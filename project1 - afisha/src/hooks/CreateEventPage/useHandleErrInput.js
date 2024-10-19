import { useState } from 'react'

import { checkUrl } from '../../helper/checkUrl'

export default function useHandleErrInput(minLength, onChange, type) {

    const [err, setErr] = useState()

    const changeVal = e => {
        let val = e.target.value

        if (type === "url" && !checkUrl(val)) setErr(true);
        else if (type === "date" && val.length !== 10) setErr(true);
        else if (type === "time" && val.length !== 5) setErr(true);
        else if (val.length < minLength) { setErr(true); }
        else { setErr(false); onChange(e) }

    }

    return [changeVal, err]

}
