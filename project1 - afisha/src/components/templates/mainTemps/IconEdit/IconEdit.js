import React from 'react'
import './IconEdit.css'

import edit from '../../../../assets/img/IconEvent/edit.svg'
import exit from '../../../../assets/img/IconEvent/exit.svg'


export default function IconEdit({ func, state, setState, icon }) {

    const exeptions = {
        edit: edit,
        exit: exit
    }

    const changeState = () => {
        if (func) { if (window.confirm("Вы точно хотите выйти?")) func() }
        else {
            if (state) setState(false)
            else setState(true)
        }

    }

    return (
        <div className='userPageEditIcon'>
            <img onClick={changeState} src={exeptions[icon]} className='imgEdit' alt="" />
        </div>
    )
}
