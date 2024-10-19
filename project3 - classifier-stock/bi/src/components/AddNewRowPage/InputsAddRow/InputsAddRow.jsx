import React, { useState } from 'react'
import './InputsAddRow.css'

import BtnGroup from '../../templates/BtnGroup'
import Loading from '../../templates/Loading'
import PathClassifierEdit from '../PathClassifierEdit'

import AddRowInput from '../AddRowInput'
import AddRowSelect from '../AddRowSelect'
import AddRowInputColor from '../AddRowInputColor'
import AddRowDate from '../AddRowDate'

import useAddRowMakeTemp from '../../../hooks/Form_AddRow/useAddRowMakeTemp'
import useHandleToggleList from '../../../hooks/Form_AddRow/useHandleToggleList'
import useCatchClassifierData from '../../../hooks/Form_AddRow/useCatchClassifierData'
import useOpenChildCLassifier from '../../../hooks/Form_AddRow/useOpenChildCLassifier'

import { exeptionsDataForApiEdit } from '../../../globalvVariable'

export default function InputsAddRow({ classifierKeyName, problemName, problemIndex, problemsTotalNum, setProblemArr }) {

    const [classifier, setClassifier] = useState(classifierKeyName)
    const [activePage, setActivePage] = useState({ [classifier.cl_key]: classifier.cl_name })

    const [templateForRow, loadingState, templateToAdd, setTemplateToAdd] = useAddRowMakeTemp(classifier)
    const [setToggleListData, selectedToggleList] = useHandleToggleList()

    const catchClassifierData = useCatchClassifierData(setTemplateToAdd, classifier)
    const addOpenClassifier = useOpenChildCLassifier(setClassifier, setActivePage)

    return (
        <div>
            <div className='inputsAddRowCont'>

                {loadingState && <Loading />}
                <PathClassifierEdit activePage={activePage} problemIndex={problemIndex} />

                {Object.keys(templateForRow).map(key => {

                    const firstInputId = key !== "SOGLNUM" && Object.keys(templateForRow)[0]
                    const checkDate = key.toLowerCase().includes("date")
                    const exeptionSelectBroker = classifierKeyName.cl_key === "cl_brokers"

                    const exception = {
                        date: !selectedToggleList(key, "list") && checkDate,
                        color: !selectedToggleList(key, "list") && key === "COLOR",
                        input: (!selectedToggleList(key, "list") || firstInputId === key || exeptionSelectBroker) && key !== "COLOR" && !checkDate,
                        select: selectedToggleList(key, "list") && firstInputId !== key && !exeptionSelectBroker && key !== "COLOR",
                        value: problemName && classifierKeyName.cl_key === classifier.cl_key && firstInputId === key.replace(classifier.cl_key, ""),
                    }

                    const value = (key) => {
                        if (exception.value) return problemName
                        else return templateToAdd[key]
                    }
                    const touch = (key) => {
                        let touch;
                        if (classifier.cl_key === "cl_actives" || classifier.cl_key === "vv_operations") {
                            if (key === "ACTIVEEDI") touch = [true, true]
                            else if (key === "OPERCOMM") touch = [true, false]
                            else touch = false
                        } else touch = [true, true]
                        return touch;
                    }

                    const defaultProps = {
                        rowId: key + classifier.cl_key,
                        value: value(key + classifier.cl_key),
                        placeholder: templateForRow[key],
                        changeValueInput: setTemplateToAdd,
                        type: Object.keys(exeptionsDataForApiEdit).includes(key) && exeptionsDataForApiEdit[key].conditionOutput 
                    }

                    return (
                        <div key={key} style={{ width: "100%", userSelect: "none" }}>
                            {exception.date && <AddRowDate {...defaultProps} />}
                            {exception.color && <AddRowInputColor{...defaultProps} />}
                            {exception.input && <AddRowInput {...defaultProps} />}
                            {exception.select && <AddRowSelect
                                {...defaultProps}
                                catchClassifierData={catchClassifierData}
                                toggleList={selectedToggleList(key, "list")}
                                toggleListId={selectedToggleList(key, "key")}
                                firstInputId={firstInputId}
                                addOpenClassifier={addOpenClassifier}
                                touch={touch(key)} />}
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
