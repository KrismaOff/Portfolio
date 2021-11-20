import React, { Component } from 'react'
import './test.css'
// import Test from '../Test/test'
import { Link } from 'react-router-dom';

export default class test extends Component {

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         act: null
    //     }
    // }


    render() {
        let listOfExam = {
            list: ["sheeeeesh", "JS", "PY", "PHP", "JS2", "PY2", "PHP2"]

        }
        let firstLine = []
        for (let i = 1; i <= 3; i++) {
            firstLine.push(
                <div className="exam-window" id={listOfExam.list[i]} onClick={(e) => {
                    if (localStorage.getItem(`exam:${e.target.id}`) !== null) {
                        alert('Вы уже проходили этот экзамен')
                        this.setState({ act: 1 })
                    } else {
                        this.setState({ act: 2 })
                        switch (e.target.id) {
                            case "JS":
                                this.props.updateData(0, 0)
                                break
                            case "PY":
                                this.props.updateData(1, 0)
                                break
                            case "PHP":
                                this.props.updateData(2, 0)
                                break
                            default: break
                        }
                    }

                }}>
                    <div className="Quest" id={listOfExam.list[i]} >Ticket {listOfExam.list[i]}</div>
                </div>
            )
        }
        let secondLine = []
        for (let i = 4; i <= 6; i++) {
            secondLine.push(
                <div className="exam-window" id={listOfExam.list[i]} onClick={(e) => {
                    if (localStorage.getItem(`exam:${e.target.id}`) !== null) {
                        this.setState({ act: 1 })
                        alert("Вы уже проходили этот экзамен")
                    } else {
                        this.setState({ act: 2 })
                        switch (e.target.id) {
                            case "JS2":
                                this.props.updateData(0, 1)
                                break
                            case "PY2":
                                this.props.updateData(1, 1)
                                break
                            case "PHP2":
                                this.props.updateData(2, 1)
                                break
                            default: break
                        }
                    }
                }}>
                    <div className="Quest" id={listOfExam.list[i]} >Ticket {listOfExam.list[i]}</div>
                </div>
            )
        }
        // const ren = () => {
        //     if (act === 2) {
        //         return "/Exam"  
        //     } else if (act === 1) {
        //         return "/Test_Exam"
        //     } else {
        //         alert("Вы должны выбрать экзамен")
        //     }
        // } 
        return (
            <div className="BlockTest hoverable none-sel">
                <div className="titleTest">
                    <p class="flow-text ">Экзамен</p>
                    <div className="line "></div>
                </div>
                <div className="main-block-testExam">

                    <div className="up-line-exam">
                        {firstLine}
                    </div>
                    <div className="down-line-exam">
                        {secondLine}
                    </div>
                    <Link to="/Exam">
                        <button className="btn btn-go-test btn-exam-go">Пройти тестирование</button>
                    </Link>

                    <div className="blockWitchScores">
                        {localStorage.getItem(`exam:${listOfExam.list[1]}`) !== null &&
                            <div className="blockWithScore">
                                JavaScript-1 кол-во: {localStorage.getItem(`exam:${listOfExam.list[1]}`)}
                            </div>
                        }
                        {localStorage.getItem(`exam:${listOfExam.list[2]}`) !== null &&
                            <div className="blockWithScore">
                                JavaScript-2 кол-во: {localStorage.getItem(`exam:${listOfExam.list[1]}`)}
                            </div>
                        }
                        {localStorage.getItem(`exam:${listOfExam.list[3]}`) !== null &&
                            <div className="blockWithScore">
                                Python-1 кол-во: {localStorage.getItem(`exam:${listOfExam.list[1]}`)}
                            </div>
                        }
                        {localStorage.getItem(`exam:${listOfExam.list[4]}`) !== null &&
                            <div className="blockWithScore">
                                Python-2 кол-во: {localStorage.getItem(`exam:${listOfExam.list[1]}`)}
                            </div>
                        }
                        {localStorage.getItem(`exam:${listOfExam.list[5]}`) !== null &&
                            <div className="blockWithScore">
                                PHP-1 кол-во: {localStorage.getItem(`exam:${listOfExam.list[1]}`)}
                            </div>
                        }
                        {localStorage.getItem(`exam:${listOfExam.list[6]}`) !== null &&
                            <div className="blockWithScore">
                                PHP-2 кол-во: {localStorage.getItem(`exam:${listOfExam.list[1]}`)}
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

