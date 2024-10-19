export const handleDate = (str, act) => {
    let arr = []
    let string;
    if (str && str.includes(".")) string = str.split(".")
    else if (str && str.includes("-")) string = str.split("-")

    if (string) {
        for (let i = 0; i < string.length; i++) {
            if (string[i].length === 1) arr.push(`0${string[i]}`);
            else arr.push(string[i])
        }
    }

    if (act === "system") return arr.join('-')
    else if (act === "math") return arr.join('')
    else if (act === "object") return { year: arr[0], month: arr[1], day: arr[2] }
    else return arr.join('.')
}