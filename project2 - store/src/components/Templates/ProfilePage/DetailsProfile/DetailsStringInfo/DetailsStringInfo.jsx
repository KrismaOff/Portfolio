import React from 'react'
import './DetailsStringInfo.css'

export default function DetailsStringInfo({ id, title, value, edit = false }) {

  const confirmChange = () => {
    console.log(1);
  }

  const lengthPassword =  Array.from({length: value.length}, () => <span>*</span>)

  return (
    <div className='details_string_info'>
      <div className='details_string_info_cont'>
        <span>{title}</span>
        {(!edit) ? <span>{id === "password" ? lengthPassword : value}</span>
        : <input defaultValue={value} />}
      </div>
    </div>
  )
}
