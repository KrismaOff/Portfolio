export const filterStr = (name, obj, act) => {
    let rowName = Object.keys(obj).filter(val => val.includes(name)).at(0)
    if (act === "system") return rowName
    else return obj[rowName]
}