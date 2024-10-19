import { handleDate } from "../../helper/HandleDate/handleDate"

export default function useFilterDate() {

    const sortFunc = (obj, a, b) => handleDate(obj[a].EVENT_DATE, "math") - handleDate(obj[b].EVENT_DATE, "math")
    const upDown = (obj) => obj && Object.keys(obj).sort((a, b) => sortFunc(obj, a, b))
    const downUp = (obj) => obj && Object.keys(obj).sort((b, a) => sortFunc(obj, a, b))

    return [upDown, downUp]
}
