import React, { useState } from 'react'
import './AdressEdit.css'

import svg from '../../../../../assets/image/svg'

export default function AdressEdit({ object }) {

    const objDataNat = {
        id: object?.id,
        name: object?.name,
        cord: object?.cord,
        floor: object?.floor,
        entrance: object?.entrance,
        flat: object?.flat,
        comment: object?.comment
    }

    const [act, setAct] = useState(object ? false : true)
    const [obj, setObj] = useState(objDataNat)

    const checkDataSame = JSON.stringify(objDataNat) === JSON.stringify(obj)

    const handlerClick = () => setAct(prev => !prev)

    const handleChange = (e) => {
        const objData = Object.assign({}, obj)
        objData[e.target.name] = e.target.value
        setObj(objData)
    }

    const saveData = () => {
        if (!checkDataSame) {
            console.log(obj);
        }
    }

    return (
        <div>
            <div className='adress_edit'>
                {!act && <span>{obj.name}</span>}
                {act && <div className='adress_edit_form'>
                    <input placeholder='Куда вам удобнее привезти' name='name' defaultValue={obj.name} onChange={handleChange} />
                    <div className='adress_edit_form_group'>
                        <input placeholder='Квартира' name='flat' defaultValue={obj.flat} onChange={handleChange} />
                        <input placeholder='Подъезд' name='entrance' defaultValue={obj.entrance} onChange={handleChange} />
                        <input placeholder='Этаж' name='floor' defaultValue={obj.floor} onChange={handleChange} />
                    </div>
                    <textarea placeholder='Комментарий для курьера' name='comment' defaultValue={obj.comment} onChange={handleChange} />
                    <div
                        className='adress_edit_form_btn'
                        style={{ color: checkDataSame ? "gray" : "black", textAlign: object ? "right" : "left" }}
                        onClick={saveData}>
                        {object ? "Сохранить адрес" : "Сохранить изменения"}
                        </div>
                </div>}

                {object && <button onClick={handlerClick}>еще {svg(act ? "arrowTop" : "arrowBottom", 15, 15)}</button>}
            </div>
            {object && <hr />}
        </div>
    )
}
