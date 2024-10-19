import React from 'react'
import "./BtnIcon.css"

export default function BtnIcon({func, icon, purpose}) {
    return (
        <button 
            className="btnIcon"
            onClick={func}>
            <img
                src={icon}
                className={purpose}
                alt={`${func}_icon`} />
        </button>
    )
}
