import React from 'react'
import './ContainerLoopProblem.css'

import InputAddRowProblem from '../InputsAddRowProblem'

import useRecieveToggleList from '../../../hooks/Recieve_API/useRecieveDataToggleList'
// import useRecieveToggleList from '../../../hooks/Recieve_API/useRecieveDataToggleList'

import { useState } from 'react'

export default function ContainerLoopProblem({ classifierKeyName, problems }) {

    const [toggleList] = useRecieveToggleList()

    const [problemArr, setProblemArr] = useState(problems)

    const editProblemArr = (name) => {
        console.log(name);
        let arr = []
        problemArr.map(val=>{
            if (val !== name) return arr.push(val)
            return arr
        })
        setProblemArr(arr)
    }

    return (
        <div>
            {problemArr && problemArr.map((val, index) => {
                return <InputAddRowProblem
                    key={val}
                    classifierKeyName={classifierKeyName}
                    toggleListAll={toggleList}

                    problem={val}
                    problemIndex={index}
                    problemArr={problemArr}
                    setProblemArr={editProblemArr}
                />
            })}
        </div>
    )
}
