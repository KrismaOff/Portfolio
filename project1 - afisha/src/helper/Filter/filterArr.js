export const filterRetKey = (obj, word) => Object.keys(obj).filter(a => a.toUpperCase().includes(word && word.toUpperCase())); 
export const filterRetVal = (obj, word) => filterRetKey(obj, word).map(val => { return { [val]: obj[val] } })

