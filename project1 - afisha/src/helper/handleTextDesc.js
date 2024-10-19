export const handleTextDesc = (describe) => {
    let arr = []

    if (describe) {
        let split = describe.split('\n\n')
        split.forEach(item => arr.push(item))
    }

    return arr
}