import './nav.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class nav extends Component {
    keyFunc = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
        }
    }
    render() {
        return (
            <div className="n-s nav-block">
                <nav className="navbar navbar-dark bg-dark">
                    <div className="btn-nav">
                        <Link to="/Pint"><div className="navbar-brand main">Главное</div></Link>
                        <Link to="/account"><div className="navbar-brand main">Профиль</div></Link>
                        <Link to="/create-post"><div className="navbar-brand main">Создать</div></Link>
                    </div>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" id="searchLine" type="search" onKeyDown={(e) => { this.keyFunc(e) }} onChange={(e) => { this.props.search(e.target.value) }} placeholder="Search" aria-label="Search" />
                        <Link to="/" ><button className="btn btn-search btn-outline-success my-2 my-sm-0" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                            Search
                        </button></Link>
                    </form>
                </nav>
            </div>
        )
    }
}
