import React, { useState } from 'react'
import './InputsAddRowProblem.css'

import useAddRowDataTemp from '../../../hooks/Form_AddRow/useAddRowDataTemp'
import useHandleActionForFormInput from '../../../hooks/Form_AddRow/useHandleActionForFormInput'

import BtnGroupProblem from '../BtnGroupProblem'
import Loading from '../../templates/Loading'

import InputToggleProblem from '../InputToggleProblem'
// import InputToggle from '../../AddNewRowPage/InputToggle'

import PathClassifierEditProblem from '../PathClassifierEditProblem'

export default function InputsAddRowProblem({ classifierKeyName, problem, problemIndex, problemArr, setProblemArr }) {

    const [classifier, setClassifier] = useState(classifierKeyName)
    const [activePage, setActivePage] = useState({ [classifier.cl_key]: classifier.cl_name })

    const [classifierIdName, templateForRow, loadingState, templateToAdd, setTemplateToAdd] = useAddRowDataTemp(classifier, problem, classifierKeyName)
    const [setToggleListData, catchClassifierData, selectedToggleList, addOpenClassifier, touch] = useHandleActionForFormInput(setTemplateToAdd, templateToAdd, classifier, setClassifier, activePage, setActivePage)

    return (
        <div className='InputsAddRowContainerProblem'>
            {/* <button onClick={()=>console.log(problemArr)}>problemArr</button> */}
            <div className='indexProblemReport'>{problemIndex + 1}</div>

            {loadingState && <Loading />}
            {Object.entries(templateForRow).length !== 0 &&
                <div>
                    <PathClassifierEditProblem activePage={activePage} />
                    {Object.keys(templateForRow).map(key => {

                        let firstNameRow = Object.keys(templateForRow)[0]
                        const pasteProblemFirstInput = (key) => {
                            if (classifierKeyName.cl_key === classifier.cl_key && firstNameRow === key) return problem
                            else return templateToAdd[key]
                        }

                        return (
                            <InputToggleProblem
                                addOpenClassifier={addOpenClassifier}
                                catchClassifierData={catchClassifierData}
                                templateToAdd={templateToAdd}
                                setTemplateToAdd={setTemplateToAdd}
                                // value={templateToAdd[key]}
                                value={pasteProblemFirstInput(key)}
                                rowId={key}
                                placeholder={templateForRow[key]}
                                toggleList={selectedToggleList(key, "list")}
                                toggleListId={selectedToggleList(key, "key")}
                                touch={touch(key)}
                                key={key}
                                firstNameRow={firstNameRow}
                            />
                        )
                    })}
                </div>
            }

            <BtnGroupProblem
                problem={problem}
                problemArr={problemArr}
                setProblemArr={setProblemArr}

                setToggleList={setToggleListData}
                setClassifier={setClassifier}
                templateToAdd={templateToAdd}
                templateForRow={templateForRow}
                activePage={activePage}
                setActivePage={setActivePage}
                classifierId={classifierIdName.cl_key} />
        </div>
    )
}
