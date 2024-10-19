export default function useChangeCheckBoxTable(id, checkBox, val, setVal) {

    const onChange = (e) => {
        if (val) setVal(false)
        else setVal(true)
        checkBox(e, id, !val, e.target.name)
    }

    return onChange
}
