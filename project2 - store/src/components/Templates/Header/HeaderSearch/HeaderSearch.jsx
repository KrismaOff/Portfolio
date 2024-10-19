import React, { useState } from 'react'
import './HeaderSearch.css'

import svg from '../../../../assets/image/svg'

export default function HeaderSearch() {

    const stateIntput = ["поиск", "Введите артикул, название или тип одежды"]
    const stateSvg = ["search", "cross"]
    const [focus, setFocus] = useState(0)

    const changeFocus = () => setFocus(prev => prev === 0 ? 1 : 0)

    return (
        <div className='header_search'>
            <div
                className='header_search_cont'>
                <input
                    onFocus={changeFocus}
                    onBlur={changeFocus}
                    type="search"
                    className="header_search_input"
                    placeholder={stateIntput[focus]}
                />
                <div className='header_search_svg'>{svg(stateSvg[focus], 20)}</div>
            </div>
        </div>
    )
}
