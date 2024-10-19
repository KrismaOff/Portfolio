import React from 'react'
import './DetailsBlock.css'

import DescribeBlock from '../DescribeBlock/DescribeBlock';
import ScheduleBlock from '../ScheduleTemp/ScheduleBlock/ScheduleBlock';
import InfoBlock from '../InfoBlock/InfoBlock'
import AdressBlock from '../AdressTemp/AdressBlock/AdressBlock';

export default function DetailsBlock({ time, date, place, describe, speakers, moderators, table }) {

    return (
        <div className='detailsBlockCont'>
            <div className='titleDesc'>О событии</div>
            <InfoBlock date={date} speakers={speakers} moderators={moderators} time={time} />
            <DescribeBlock describe={describe} />
            <ScheduleBlock table={table} place={place} />
            <AdressBlock table={table} place={place} />
        </div>
    )
}