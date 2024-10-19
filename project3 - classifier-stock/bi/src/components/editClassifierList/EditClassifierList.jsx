import React, { useState } from 'react'
import "./EditClassifierList.css"

import BtnIcon from '../../templates/BtnIcon'
import editIcon from '../../img/editIcon.svg'
import deleteIcon from '../../img/deleteIcon.svg'

export default function EditClassifierList({ editOption, deleteOption, valInput, val }) {
  
  return (
    <div className='optionClassifierList'>
      
      <BtnIcon
        func={() => { editOption(val) }}
        icon={editIcon}
        purpose="iconClassifier editClassifier"
      />
      <BtnIcon
        func={deleteOption}
        icon={deleteIcon}
        purpose="iconClassifier deleteClassifier"
      />
      {valInput === val ?
        <div className="optionClassifier">{val}</div>
        :
        <div>{val}</div>
      }

    </div>
  )
}
