import React, { useState } from 'react'
import './ContainerLoopProblem.css'

import InputsAddRow from '../InputsAddRow/InputsAddRow'

export default function ContainerLoopProblem({ classifierKeyName, problems }) {

    const [problemArr, setProblemArr] = useState(problems)

    const editProblemArr = (name) => {
        let arr = []
        problemArr.map(val => {
            if (val !== name) return arr.push(val)
            return arr
        })
        setProblemArr(arr)
    }

    return (
        <div>
            {problemArr && problemArr.map((val, index) => {
                return <InputsAddRow
                    key={val}
                    classifierKeyName={classifierKeyName}

                    problemName={val}
                    problemIndex={index}
                    problemsTotalNum={problemArr.length}
                    setProblemArr={editProblemArr}
                />
            })}
        </div>
    )
}
