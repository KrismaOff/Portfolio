import React, { Component } from 'react'
import './testOption.css'

export default class testOption extends Component {

    constructor(props) {
        super(props)
        this.clickBtn = this.clickBtn.bind(this);

        this.state = {
            id: "",
        }
    }
    clickBtn(e) {
        this.setState({
            id: e.target.id
        })
    }
    render() {
        const { title, text, img, id } = this.props.option
        return (
            <div className="BlockOptionTest">
                <div class="row">
                    <div class="col s12 m7 main-card">
                        <div class="card">
                            <div class="card-image">
                                <img src={img} alt="" />
                                <span class="card-title">{title}</span>
                            </div>
                            <div class="card-content">
                                <p>{text}</p>
                            </div>
                            <div class="card-action">

                                <form action="/">
                                    <p>

                                        <label>
                                            <input id={id} onClick={(e) => {
                                                this.clickBtn(e)
                                                this.props.updateState(e)
                                            }} type="checkbox" />
                                            <span>Пройти тест</span><br />
                                        </label>
                                    </p>
                                </form>

                                {localStorage.getItem(id) !== null &&
                                    <div className="last-result">Последний результат: {localStorage.getItem(id)} </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
