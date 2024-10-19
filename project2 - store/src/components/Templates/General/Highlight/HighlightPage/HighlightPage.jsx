import React, { useState } from 'react'
import './HighlightPage.css'

import svg from '../../../../../assets/image/svg'

export default function HighlightPage({ page }) {

    const [currentPage, allPage] = page

    const [count, setCount] = useState(currentPage)

    const handlerLeftClick = () => {
        setCount(count !== 0 ? count - 1 : 0)
    }
    const handlerRightClick = () => {
        setCount(count !== allPage - 1 ? count + 1 : allPage - 1)
    }
    const handlePointClick = (e) => {
        setCount(Number(e.target.id));
    }

    return (
        <div className='highlight_block_page_cont'>
            <div onClick={handlerLeftClick}>{svg("arrowLeft")}</div>
            {Array.from({ length: allPage }, (_, i) => {
                return <div id={i} onClick={handlePointClick} className={count === i ? "highlight_block_page_act" : "highlight_block_page"} key={i}>{i + 1}</div>
            })}
            <div onClick={handlerRightClick}>{svg("arrowRight")}</div>
        </div>
    )
}
