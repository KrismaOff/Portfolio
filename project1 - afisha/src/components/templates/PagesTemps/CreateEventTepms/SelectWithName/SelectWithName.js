import React from 'react'
import './SelectWithName.css'

import useHandleIdSelect from '../../../../../hooks/EditEventPage/useHandleIdSelect'

export default function SelectWithName({ valueID, id, name, data, onChange }) {

    const [val] = useHandleIdSelect(id, valueID, data);

    const selectTemp = (i) => {
        return <select className='selectWithName' onChange={onChange} id={id} defaultValue={i}>
            <option disabled>Выберите вариант</option>
            {data && Object.keys(data).map(key => {
                let obj = data[key]
                const describe = obj => {
                    let res;
                    if (obj[id.replace("ID", "DESCRIBE_SHORT")]) res = ` - "${data[key][id.replace("ID", "DESCRIBE_SHORT")]}"`
                    else if (obj[id.replace("ID", "DESCRIBE_SYSTEM")]) res = ` - "${data[key][id.replace("ID", "DESCRIBE_SYSTEM")]}"`
                    else if (obj.CITY_ID) res = ` (${obj.CITY_ID})`
                    else res = ""
                    return res
                }
                return <option id={obj[id]} key={key}>
                    {obj[id.replace("ID", "NAME")]}
                    {describe(obj)}
                </option>
            })}
        </select>
    }

    return (
        <div>
            <div className='selectTitle'>{name}</div>
            {val && selectTemp(val)}
            {!val && selectTemp("Выберите вариант")}
        </div>
    )
}
