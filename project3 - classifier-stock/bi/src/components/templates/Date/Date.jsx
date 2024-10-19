import React from 'react'
import './Date.css'

import Moment from 'react-moment'

import useRecieveDate from '../../../hooks/Date/useRecieveDate'

export default function Date() {

    const [day] = useRecieveDate()

    return (
        <div className='dateBlock'>
            <p className='title'>Сегодня: {day}  </p>
            <Moment interval={1000} format="DD.MM.YYYY HH:mm"/> <br></br>
        </div>
    )
}
