import React from 'react'
import './InputOutputPage.css'
 
import Table from '../TablePage/Table'

export default function InputOutputPage() {

  return (
    <div>
      <Table classifierRoot={{ cl_key: "vv", cl_name: "Вводы/Выводы" }} toggleList={false}/>
    </div>
  )
}
