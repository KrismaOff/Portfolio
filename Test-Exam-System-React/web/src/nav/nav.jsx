import React from 'react'
import './nav.css'
// import { BrowserRouter as Router, Link, } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function nav() {
    return (
        <div>
            <nav>
                <div class="nav-wrapper wrapper-block">
                    <a href="/" class="brand-logo">РФ</a>
                    <ul id="nav-mobile" class="right ul-list hide-on-med-and-down">
                        <li><Link to="/Documents">Документы</Link></li>
                        <li><Link to="/News">Новости</Link></li>
                        <li><Link to="/Contacts">Контакты</Link></li>
                        <li><Link to="/SOC">ЦОК</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
