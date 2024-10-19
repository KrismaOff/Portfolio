import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

export default function Button({ title, reverse, func, link, params, w = "100%", r = "50px", m = "auto", border }) {

    const style = {
        width: w,
        borderRadius: r,
        margin: m,
        border: border && border
    }

    return (
        <div>
            {link ? <Link to={link} state={params}>
                <button
                    style={style}
                    className={reverse ? "button reverse" : "button"}>
                    {title}
                </button>
            </Link> :
                <button
                    onClick={func}
                    style={style}
                    className={reverse ? "button reverse" : "button"}>
                    {title}
                </button>
            }
        </div>
    )
}
