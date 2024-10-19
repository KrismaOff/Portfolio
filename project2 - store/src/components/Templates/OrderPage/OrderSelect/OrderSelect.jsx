import React, { useState } from 'react'
import './OrderSelect.css'

import svg from '../../../../assets/image/svg'

export default function OrderSelect({ params, title, func, w = "30%" }) {


    const pTitle = params[0].title
    const checkArr = (title) => Array.isArray(title) ? title.join(" - ") : title

    const [active, setActive] = useState(false)
    const [activeTitle, setActiveTitle] = useState(title ? title : checkArr(pTitle))

    const changeState = () => setActive(prev => !prev)
    const sendData = (id) => {
        const title = params.filter(val => val.id === id && val)[0].title
        setActiveTitle(checkArr(title))
        changeState()
        func(id)
    }


    return (
        <div style={{ width: w }}>
            <div className='order_select'>
                <div
                    style={{ color: activeTitle ? "#00000090" : "black" }}
                    className='order_select_title'
                    onClick={changeState}>
                    {activeTitle}
                    {svg("arrowBottom", 10, 10)}
                </div>
                {active && <div>

                    <div className='order_select_cont'>
                        {params.map(obj => <span
                            onClick={() => sendData(obj.id)}
                            key={obj.id}>
                            {checkArr(obj.title)}
                        </span>)}
                    </div></div>}
            </div>
            {active && <div className='order_select_empty_block' onClick={changeState} />}
        </div>

    )
}
