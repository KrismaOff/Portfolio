import React from 'react'
import './InfoBlock.css'

import timeIcon from '../../../../../assets/img/IconEvent/time.svg'
import dateIcon from '../../../../../assets/img/IconEvent/date.svg'
import personIcon from '../../../../../assets/img/IconEvent/person.svg'
import supportIcon from '../../../../../assets/img/IconEvent/support.svg'

import InfoCellIconTextTemp from '../InfoCellIconTextTemp'

import { getExpectationDate } from '../../../../../helper/HandleDate/getExpectationDate'
import { getMonthDecl } from '../../../../../helper/HandleDate/getMonthDecl'
import { handleDate } from '../../../../../helper/HandleDate/handleDate'

export default function InfoBlock({ date, speakers, moderators, time }) {

    const exeptions = [
        {
            title: "Дата проведения",
            src: dateIcon,
            val: <>{getMonthDecl(handleDate(date))} <span className='exeption'>({getExpectationDate(date)})</span></>
        },
        {
            title: "Время (начало - конец)",
            src: timeIcon,
            val: time && time.join(" - "),
        },
        {
            title: "Дата проведения",
            src: personIcon,
            val: speakers && speakers.join(", "),
            text: "Спикеров нет"
        },
        {
            title: "Дата проведения",
            src: supportIcon,
            val: moderators && moderators.join(", "),
            text: "Модераторов нет"
        },
    ]

    return (
        <div className='infoBlockCont'>
            {exeptions.map((val, i) => <InfoCellIconTextTemp key={i} {...val}/>)}
        </div>
    )
}
