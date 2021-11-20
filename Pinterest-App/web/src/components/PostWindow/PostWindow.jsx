import { useParams } from 'react-router-dom';
import { useState } from 'react';
import "./PostWindow.css"
import MAIN from '../Main/Main'
import React from 'react'
import { Likes } from '../../db.js'

export default function PostWindow(props) {
    const [btnCol, setBtnCol] = useState(false)
    const { id_post } = useParams()
    const arr = {}

    for (let i = 0; i < Object.keys(props.list).length; i++) {
        if (String(props.list[`num${i}`].id) === id_post) {
            arr.list = props.list[`num${i}`]
        }
    }

    const { title, text, img, id, link, author, tags } = arr.list

    return (
        <div>
            <div className="example-post" id={id}>
                <div className="card card-ex-post d-flex">
                    <img src={img} alt="alt" className="card-img" />
                    <div className="second-block-post">
                        <div className="author-block-post d-flex">
                            <div className="author-ex-post">{author}</div>
                            <a className="author-link-ex" href={link} rel="noreferrer" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                    <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                                </svg>
                            </a>
                        </div>
                        <div className="title-ex-post">{title}</div>
                        <div className="hr-ex-post"></div>
                        <div className="text-ex-post">{text}</div>
                        <div className="comment-save-block-post">
                            <div className="tags-ex-post">{tags}</div>
                            <div className="btn-group btn-group-ex-post">
                                <button className={btnCol ? "btn btn-ex-post btn-secondary btn-green" : "btn btn-ex-post btn-secondary"} onClick={() => {
                                    const arr = {
                                        tags: tags,
                                        title: title,
                                        author: author,
                                        text: text,
                                        img: img,
                                        link: link,
                                        id: id
                                    }
                                    if (btnCol) {
                                        setBtnCol(false)
                                    } else {
                                        setBtnCol(true)
                                        Likes(arr, "add")
                                    }
                                }}>Сохранить</button>
                                <button className="btn btn-ex-post btn-secondary" onClick={() => console.log(window.location.href)}>Поделитьтся</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <MAIN list={props.list} idPost={id} listVisible={title} tag={tags} />
        </div>
    )

}
