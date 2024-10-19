import { useState, useEffect } from 'react'

import { recieveValToggleList } from '../helper/makeIdToggleList'

export default function useAddRowFormHandle(rows, toggleList, columnName) {

    const [keysRow, setKeysRow] = useState()                // keysRow - массив с ключами от строки
    const [keysList, setKeysList] = useState()              // keysList - массив с ключами от в.л.
    const [key_name, setKey_name] = useState()              // key_name - объект, где [ключ из строки]:[имя строки]

    useEffect(() => {
        const objectFunc = (objectUser) => {
            let obj = {}
            Object.keys(objectUser).map(key => {
                Object.keys(objectUser[key]).map(keys => {
                    obj[keys] = ""
                    if (keys === "ID") delete obj[keys]
                    return obj
                })
                return obj
            })
            return Object.keys(obj)
        }

        setKeysRow(objectFunc(rows)
            .map((item) => ({ [item]: "" }))
            .reduce((json, val) => Object.assign({}, json, val))
        )
        setKeysList(recieveValToggleList(toggleList))               // keysList - массив с ключами от в.л.
        setKey_name(objectFunc(rows)                        // key_name - объект, где [ключ из строки]:[имя строки]
            .map((item, i) => ({ [item]: columnName[i] }))
            .reduce((json, val) => Object.assign({}, json, val))
        )

    }, [])

    return [keysRow, keysList, key_name]
}
