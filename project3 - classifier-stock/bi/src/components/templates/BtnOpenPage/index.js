import React from 'react'
import "./BtnOpenPage.css"

export default function BtnOpenPage({ name, activeButton, page, btnAction }) {
    return (
        <div>
            <button className={activeButton === page ? 'btnOpenPageActive' : "btnOpenPage"} onClick={() => btnAction(page)}>{name}</button>
        </div>
    )
}
