import './CreatePostWindow.css'
import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { News } from '../../db'

export default class CreatePostWindow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: null,
            author: null,
            img: null,
            link: null,
            text: null,
            tags: null,
            active: false,
            arr: { tags: "", title: "", author: "", text: "", img: "", link: "", id: "" }
        }
    }
    render() {
        const { title, author, img, link, text, active, tags, arr } = this.state

        return (
            <div className="create-windows n-s">
                <div className="title-wind">Создание: </div>

                <div className="d-flex wind-block-main">
                    {active ?
                        <div className="example">
                            <div className="card card-ex d-flex">
                                <img src={img} alt={title} className="card-img" />
                                <div className="second-block-cr">
                                    <div className="author-block d-flex">
                                        <div className="author-ex">{author}</div>
                                        <a className="author-link-ex" href={link} rel="noreferrer" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="title-ex">{title}</div>
                                    <div className="hr-ex"></div>
                                    <div className="text-ex">{text}</div>

                                    <div className="comment-save-block">
                                        <div className="tags-ex">{tags}</div>
                                        <div className="btn-group btn-group-ex">
                                            <button className="btn btn-ex-p btn-secondary">Сохранить</button>
                                            <button className="btn btn-ex-p btn-secondary">Подписаться</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex btn-save-try">
                                <a className="btn-wind-save-try" href="/create-post"><button className="btn btn-wind-save-try but" type="button"
                                    onMouseMove={() => {
                                        this.setState({
                                            arr: {
                                                tags: tags,
                                                title: title,
                                                author: author,
                                                text: text,
                                                img: img,
                                                link: link,
                                                id: nanoid(4)
                                            }
                                        })
                                    }} onClick={() => { News(arr, "add") }}> Сохранить</button></a>
                                <button className="btn btn-wind-save-try" type="button" onClick={() => { this.setState({ active: false }) }}>Заново</button>
                            </div>
                        </div>
                        :
                        <form action="#" className="inp-wind-opt">
                            <div className="all-inp">
                                <input className="input-wind" placeholder="Title" maxLength="20" type="text" onChange={(e) => { this.setState({ title: e.target.value }) }} />
                                <div className="d-flex input-groupt-aut-tag">
                                    <input className="input-wind input-wind-author" placeholder="Author" type="text" maxLength="15" onChange={(e) => { this.setState({ author: e.target.value }) }} />
                                    <input className="input-wind input-wind-tags" placeholder="Tags (3)" type="text" maxLength="30" onChange={(e) => { this.setState({ tags: e.target.value }) }} />
                                </div>
                                <input className="input-wind" type="url" placeholder="Link on image" onChange={(e) => { this.setState({ img: e.target.value }) }} />
                                <input className="input-wind" placeholder="Link on author" type="url" onChange={(e) => { this.setState({ link: e.target.value }) }} />
                                <textarea className="input-wind input-wind-text" placeholder="Text" maxLength="270" type="text" onChange={(e) => { this.setState({ text: e.target.value }) }} />
                                <button className="btn btn-wind" type="submit" onClick={() => {
                                    if (title === null || author === null || img === null || link === null || text === null || tags === null) {
                                        alert("Вы должны заполнить все поля!")
                                    } else {
                                        if (img.indexOf("http") === 0 && link.indexOf("http") === 0 && tags.split("")) {
                                            this.setState({ active: true })
                                        }
                                    }
                                }}>Предварительный просмотр</button>
                            </div>
                        </form>
                    }

                </div>
            </div>
        )
    }
}
