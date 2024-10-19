import React, { useContext } from 'react'
import './Back.css'

import { PageContext } from '../../../App/App'

import { Link } from 'react-router-dom'
import svg from '../../../../assets/image/svg'
import useCheckWindowSize from '../../../../hooks/general/useCheckWindowSize'

export default function Back({ page, path }) {

    const value = useContext(PageContext)

    const [size] = useCheckWindowSize()

    const sA = !size ? 25 : 20

    return (
        <div className='back'>
            <p className='back_title'>
                <Link className="back_btn" to={path} state={value}>
                    {svg("fullArrowLeft", sA, sA - 10, "#818181")}
                    <span>Назад</span>
                </Link>
                <span className='back_btn_stick'>|</span>
                <span className='back_page_link'>{page}</span>
            </p>
        </div>
    )
}
