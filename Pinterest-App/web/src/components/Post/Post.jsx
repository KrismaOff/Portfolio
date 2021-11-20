import './Post.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { News, Likes } from '../../db.js'

export default class Post extends Component {
    constructor(props) {
        super(props)

        this.state = {
            actBtn: false
        }
    }
    render() {
        const { img, id, title } = this.props.list

        return (
            <div className="card-post n-s" onMouseMove={() => { this.setState({ actBtn: true }) }} onMouseOut={() => { this.setState({ actBtn: false }) }}>
                {this.props.x ? <a href="/Pint"><div className={this.state.actBtn ? "x-class" : "d-none"} onClick={() => {
                    let idComp = `${id}`
                    News(idComp, "delete")
                }}>Удалить</div></a> : <div></div>}
                {this.props.x_l ? <a href="/Pint"><div className={this.state.actBtn ? "x-class" : "d-none"} onClick={() => {
                    let idComp = `${id}`
                    Likes(idComp, "delete")
                }}>Удалить</div></a> : <div></div>}
                <Link to={`/posts/${id}`} id={id}>
                    <div className={this.state.actBtn ? "tags-block" : "d-none"}>{title}</div>
                    <img className="img-post" width="100%" src={img} alt={`title: ${title}`} />
                </Link >
            </div>
        )
    }
}
