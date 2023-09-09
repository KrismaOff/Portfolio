import React, { useState } from 'react'
import './InputsAddRow.css'

import BtnGroup from '../../templates/BtnGroup'
import Loading from '../../templates/Loading'
import PathClassifierEdit from '../PathClassifierEdit'

import AddRowInput from '../AddRowInput'
import AddRowSelect from '../AddRowSelect'
import AddRowInputColor from '../AddRowInputColor'

import useAddRowMakeTemp from '../../../hooks/Form_AddRow/useAddRowMakeTemp'
import useHandleActionForFormInput from '../../../hooks/Form_AddRow/useHandleToggleList'
import useCatchClassifierData from '../../../hooks/Form_AddRow/useCatchClassifierData'
import useOpenChildCLassifier from '../../../hooks/Form_AddRow/useOpenChildCLassifier'


export default function InputsAddRow({ classifierKeyName, problemName, problemIndex, problemsTotalNum, setProblemArr }) {

    const [classifier, setClassifier] = useState(classifierKeyName)
    const [activePage, setActivePage] = useState({ [classifier.cl_key]: classifier.cl_name })

    const [templateForRow, loadingState, templateToAdd, setTemplateToAdd] = useAddRowMakeTemp(classifier)
    const [setToggleListData, selectedToggleList] = useHandleActionForFormInput()

    const catchClassifierData = useCatchClassifierData(setTemplateToAdd, classifier)
    const addOpenClassifier = useOpenChildCLassifier(setClassifier, setActivePage)

    return (
        <div>
            <div className='inputsAddRowCont'>

                {loadingState && <Loading />}
                <PathClassifierEdit activePage={activePage} problemIndex={problemIndex} />

                {Object.keys(templateForRow).map(key => {

                    const value = (key) => {
                        if (exception.value) return problemName
                        else return templateToAdd[key]
                    }
                    const touch = (key) => {
                        let touch;
                        if (classifier.cl_key === "cl_actives") {
                            if (key === "ACTIVEEDI") touch = true
                            else touch = false
                        } else {
                            touch = true
                        }
                        return touch;
                    }

                    const firstInputId = Object.keys(templateForRow)[0]

                    const exception = {
                        color: !selectedToggleList(key, "list") && key === "COLOR",
                        input: (!selectedToggleList(key, "list") || firstInputId === key) && key !== "COLOR",
                        select: selectedToggleList(key, "list") && firstInputId !== key && key !== "COLOR",
                        value: problemName && classifierKeyName.cl_key === classifier.cl_key && firstInputId === key.replace(classifier.cl_key, "")
                    }
                    const defaultProps = {
                        rowId: key + classifier.cl_key,
                        value: value(key + classifier.cl_key),
                        placeholder: templateForRow[key],
                        changeValueInput: setTemplateToAdd,
                    }

                    return (
                        <div key={key} style={{ width: "100%" }}>
                            {exception.color && <AddRowInputColor{...defaultProps} />}
                            {exception.input && <AddRowInput {...defaultProps} />}
                            {exception.select && <AddRowSelect
                                {...defaultProps}
                                catchClassifierData={catchClassifierData}
                                toggleList={selectedToggleList(key, "list")}
                                toggleListId={selectedToggleList(key, "key")}
                                firstInputId={firstInputId}
                                addOpenClassifier={addOpenClassifier}
                                touch={touch(key)} />
                            }
                        </div>
                    )
                })}
            </div>

            <BtnGroup
                setToggleList={setToggleListData}
                setClassifier={setClassifier}
                templateToAdd={templateToAdd}
                templateForRow={templateForRow}
                activePage={activePage}
                setActivePage={setActivePage}
                classifierId={classifier.cl_key}

                problemName={problemName}
                problemsTotalNum={problemsTotalNum}
                setProblemArr={setProblemArr}
            />

        </div>
    )
}
