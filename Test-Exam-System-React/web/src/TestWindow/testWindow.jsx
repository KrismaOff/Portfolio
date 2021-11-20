import React, { Component } from 'react'
import './testWindow.css'
import Option from '../TestOption/testOption'
// import nextId from "react-id-generator";
import { Link } from 'react-router-dom';


export default class test extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            active: ''
        }
    }
    updateState = val => {
        if (this.state.active) {
            this.setState({
                active: false,
                id: val.target.id
            })
        } else {
            this.setState({
                active: true,
                id: val.target.id
            })
        }
    }

    render() {
        const option = this.props.list

        if (this.state.active) {
            return (
                <div className="BlockTest hoverable">
                    <div className="titleTest">
                        <p class="flow-text ">Здравствуйте!</p>
                        <div className="line "></div>
                    </div>
                    <div className="blockWithOptionTest">
                        <Option updateState={this.updateState} option={option[0]} />
                        <Option updateState={this.updateState} option={option[1]} />
                        <Option updateState={this.updateState} option={option[2]} />
                    </div>
                    <div className="btnTest">

                        <Link to={()=> {
                            if (this.state.id === "JS") {
                                if (localStorage.getItem("JS") !== null) {
                                    return "/Passing_the_test/JS-1"
                                } else {
                                    return "/Passing_the_test/JS-0"
                                }
                            } else if (this.state.id === "PY") {
                                if (localStorage.getItem("PY") !== null) {
                                    return "/Passing_the_test/PY-1"
                                } else {
                                    return "/Passing_the_test/PY-0"
                                }  
                            } else if (this.state.id === "PHP") {
                                if (localStorage.getItem("PHP") !== null) {
                                    return "/Passing_the_test/PHP-1"
                                } else {
                                    return "/Passing_the_test/PHP-0"
                                }
                            }
                        }}>
                            <button id="btn-go-test" className="btn">
                                Начать тест!
                            </button>
                        </Link>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="BlockTest hoverable">
                    <div className="titleTest">
                        <p class="flow-text ">Здравствуйте!</p>
                        <div className="line "></div>
                    </div>
                    <div className="blockWithOptionTest">
                        <Option updateState={this.updateState} option={option[0]} />
                        <Option updateState={this.updateState} option={option[1]} />
                        <Option updateState={this.updateState} option={option[2]} />
                    </div>
                </div>
            )
        }
    }
}
