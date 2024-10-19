import React, { useState, useEffect } from 'react'
import './CardCarusel.css'

import CardEvent from '../CardEvent';
import arrowNext from '../../../assets/img/IconEvent/arrowNext.svg'
import arrowPrev from '../../../assets/img/IconEvent/arrowPrev.svg'

export default function CardCarusel({ eventsListData, title, conditionName,  conditionValue}) {

    useEffect(() => {
        setObject(Array.isArray(eventsListData) && eventsListData.filter(val => val[conditionName] === conditionValue))
    }, [eventsListData, conditionName,  conditionValue])

    const [count, setCount] = useState(0)
    const [object, setObject] = useState(0)
    const [change, setChange] = useState(false)

    const length = object?.length
    const cards = []

    for (let i = count; i < count + 3 && i < length; i++) cards.push(<CardEvent key={i} id={object[i]?.EVENT_ID} />);

    const movePost = (condition, func) => {
        if (condition) {
            setChange(true)
            setTimeout(() => {
                setCount(func);
                setChange(false)
            }, 300)
        }
    }
    const openP = i => {
        setChange(true)
        setTimeout(() => {
            setCount(i * 3)
            setChange(false)
        }, 300)
    }

    return (
        <div className='cardCarusel'>
            <div className='cardCaruselTitle'>{title}</div>
            <div className='contCardCar'>
                {window.innerWidth > 500 && <img
                    onClick={() => movePost(count !== 0, prev => prev - 3)}
                    className={count !== 0 ? 'arrowCardCar' : 'arrowCardCar hide'}
                    src={arrowPrev}
                    alt='' />}
                <div className={change ? "animation cardCarContainer" : "cardCarContainer"}>{cards}</div>
                {window.innerWidth > 500 && <img
                    onClick={() => movePost(length > count + 3, prev => prev + 3)}
                    className={length > count + 3 ? 'arrowCardCar' : 'arrowCardCar hide'}
                    src={arrowNext}
                    alt='' />}
            </div>
            {Array.from({ length: length % 3 !== 0 ? (length / 3) + 1 : length / 3 }, (_, i) => {
                return <span onClick={() => openP(i)} key={i} className={i === count / 3 ? 'cardCarPoint act' : 'cardCarPoint'}> &bull;</span>
            })}
        </div>
    )
}
