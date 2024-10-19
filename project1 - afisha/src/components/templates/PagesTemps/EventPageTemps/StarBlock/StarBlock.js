import React from 'react'
import './StarBlock.css'

import startFill from '../../../../../assets/img/IconEvent/startFill.svg'
import starEmpty from '../../../../../assets/img/IconEvent/starEmpty.svg'

export default function StarBlock({score, setScore}) {

    const exeptions = (i, src) => {
        return {
            key: i,
            onClick: e => setScore(e.target.id),
            className: "starCell",
            src: src,
            id: i + 1
        }
    }

    return (
        <div>
            {Array.from({ length: score }, (_, i) => <img {...exeptions(i, startFill)} alt="" />)}
            {Array.from({ length: 5 - score }, (_, i) => <img {...exeptions(i + Number(score), starEmpty)} alt="" />)}
        </div>
    )
}