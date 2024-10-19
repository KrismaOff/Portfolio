import React, { useState } from 'react'
import './BasketProm.css'

export default function BasketProm({ recieveFunc }) {

    const exeption = {
        normal: {
            title: "Ввести промокод",
            color: ""
        },
        error: {
            title: "Промокод не найден",
            color: "basket_prom_red"
        },
        late: {
            title: "Промокод не действителен",
            color: "basket_prom_red"
        },
        succses: {
            title: "- подтверждено ",
            color: "basket_prom_green"
        },
    }

    const [active, setActive] = useState(false)
    const [actState] = useState(exeption.normal)

    const changeState = () => setActive(prev => !prev)
    const changePromo = (e) => {
        recieveFunc(e.target.value)
    }

    return (
        <div className='basket_prom'>
            {!active && <div
                onClick={changeState}
                className='basket_prom_title'
            >У меня есть промокод</div>}
            {active && <input
                type='text'
                onChange={changePromo}
                className={`basket_prom_title_button ${actState.color}`}
                placeholder={actState.title}
            />}
        </div>
    )
}
