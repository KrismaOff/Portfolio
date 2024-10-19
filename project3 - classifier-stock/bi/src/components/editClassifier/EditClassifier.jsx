import React, { useState } from 'react'
import "./EditClassifier.css"

import EditClassifierList from '../editClassifierList'

export default function EditClassifier({ dataColumn, classifier }) {

    const [values, setValues] = useState(dataColumn)
    const [valInput, setValInput] = useState("")

    const [valInputOld, setValInputOld] = useState()


    const deleteOption = () => {

    }
    const editOption = (e) => {
        setValInputOld(e)
        setValInput(e)
    }
    const handlerChange = (e) => {
        setValInput(e.target.value)
    }
    const sendData = () => {
        if (window.confirm("Вы уверены?")) {
            // console.log(valInput);\
            setValInputOld(undefined)
            setValInput("")
        }
    }
    const canselData = () => {
        if (window.confirm("Вы уверены?")) {
            setValInputOld(undefined)
            setValInput("")
        }
    }

    return (
        <div className='editClassifierList'>
            <p>Classifier: {classifier}</p>
            <div>
                {valInputOld !== undefined && <div className='valInputOld'>{valInputOld} </div>}
                <input
                    style={valInput === "" ? { pointerEvents: 'none' } : { pointerEvents: "auto" }}
                    value={valInput}
                    onChange={handlerChange}
                    className="classifierInput"
                    placeholder='Выбирите элемент'
                />
            </div>
            <div className='classifierBtnGroup'>
                <button className='classifierBtn' onClick={sendData}>Сохранить</button>
                <button className='classifierBtn' onClick={canselData}>Отменить</button>
            </div>

            <div className='editClassifierListContainer'>
                <p className='countClassifierOption'>Кол-во элементов : {values.length}</p>
                <hr></hr>
                <div className='scroll-block'>
                    {values.map(val => {

                        return (
                            <EditClassifierList
                                key={Math.random() * 1000}
                                editOption={editOption}
                                deleteOption={deleteOption}
                                valInput={valInput}
                                val={val} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}