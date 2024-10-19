import React from 'react'
import "./InputWithName.css"

import useHandleErrInput from '../../../../../hooks/CreateEventPage/useHandleErrInput'

export default function InputWithName({ value, name, placeholder, id, onChange, type, maxLength, minLength, count }) {

  const [changeVal, err] = useHandleErrInput(minLength, onChange, type)

  const exception = (i) => {
    return {
      textarea: {
        defaultValue: value && value,
        className: "inputWithTextarea",
        placeholder: placeholder,
        onBlur: changeVal,
        id: id,
        maxLength: maxLength
      },
      input: {
        defaultValue: value && value,
        className: "inputWithInput",
        autoComplete: "off",
        placeholder: placeholder,
        type: type,
        onBlur: changeVal,
        maxLength: maxLength,
        minLength: minLength
      },
      inputTime: {
        defaultValue: value && value[i],
        className: "inputWithInput",
        autoComplete: "off",
        placeholder: placeholder,
        type: type,
        onBlur: changeVal,
        maxLength: maxLength,
        minLength: minLength
      },
    }
  }

  return (
    <div className='inputWithNameCont'>
      <div className='inputWithName'>{name}</div>
      {type === "textarea" && <textarea {...exception().textarea} />}

      {type !== "textarea" && !count ?
        <input {...exception().input} id={id} /> :
        <div className='inputWithInpCont'>
          {Array.from({ length: count }, (_, i) => {
            return <input key={i} id={id + i} style={{ width: 46 + '%' }} {...exception(i).inputTime} />
          })}
        </div>
      }

      <div className={err ? "inputWithErr" : "inputWithErr opNone"} >{minLength ? `Минимальное кол-во символов: ${minLength}` : "Неверный формат"}</div>
    </div>
  )
}
