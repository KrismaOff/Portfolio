import React, { Component } from 'react'
import "./ExamTest.css"
import { Link } from 'react-router-dom';


export default class ExamTest extends Component {
    constructor(props) {
        super(props)

        this.state = {
            countForFirstNum: null,
            countForSecondNum: null,
            countForThirdNum: null,
            mainScore: null,
        }
    }

    answer0 = (e) => {
        if (e.target.id === this.props.list.AnsTrue[0]) {
            this.setState({
                countForFirstNum: 3
            })
        } else {
            this.setState({
                countForFirstNum: 0
            })
        }
    }
    answer1 = (e) => {
        if (e.target.id === this.props.list.AnsTrue[1]) {
            this.setState({
                countForSecondNum: 3
            })
        } else {
            this.setState({
                countForSecondNum: 0
            })
        }
        // alert(e)
    }
    answer2 = (e) => {
        if (e.target.id === this.props.list.AnsTrue[2]) {
            this.setState({
                countForThirdNum: 3
            })
        } else {
            this.setState({
                countForThirdNum: 0
            })
        }
    }
    checkFunc = () => {
        const { countForFirstNum, countForSecondNum, countForThirdNum } = this.state

        if (countForFirstNum === null || countForSecondNum === null || countForThirdNum === null) {
            alert("Вы выполнили не все задания!")
        } else {
            let all = countForFirstNum + countForSecondNum + countForThirdNum
            this.setState({ mainScore: all })
            localStorage.setItem("FirstResult", all)
        }



    }

    render() {

        // let lis = []
        const { id, title, Question, Ans } = this.props.list

        // for (let i = 0; i < Ans.length; i++) {
        //     lis.push(
        //         <div className="blockQ card">
        //             <div className="title-test ">{Question[i]}</div>
        //             <p className="">Ответы:</p>
        //             <div className="test-block-option btn" id={Ans[i][0]} onClick={this.answer}>{Ans[i][0]}</div>
        //             <div className="test-block-option btn" id={Ans[i][1]} onClick={this.answer}>{Ans[i][1]}</div>
        //             <div className="test-block-option btn" id={Ans[i][2]} onClick={this.answer}>{Ans[i][2]}</div>
        //         </div>
        //     )
        // }

        

        return (
            <div className="BlockTestExam hoverable none-sel">
                <div className="titleTest">
                    <p class="flow-text "> Билет по {title.split(' ')[0]} № {title.split(' ')[1]}</p>
                    <div className="line "></div>
                </div>
                <div className="main-block-test">

                    <div className="blockQEx card">
                        <div className="title-test-ex">{Question[0]}</div>
                        <p className="ans-ex">Ответы:</p>
                        <div className="test-block-option-ex  btn" id={Ans[0][0]} onClick={this.answer0}>{Ans[0][0]}</div>
                        <div className="test-block-option-ex  btn" id={Ans[0][1]} onClick={this.answer0}>{Ans[0][1]}</div>
                        <div className="test-block-option-ex  btn" id={Ans[0][2]} onClick={this.answer0}>{Ans[0][2]}</div>
                    </div>


                    <div className="blockQEx card">
                        <div className="title-test-ex">{Question[1]}</div>
                        <div className="block-content-test">
                        <p className="ans-ex">Ответы:</p>
                            <div className="test-block-option-ex  btn" id={Ans[1][0]} onClick={this.answer1}>{Ans[1][0]}</div>
                            <div className="test-block-option-ex  btn" id={Ans[1][1]} onClick={this.answer1}>{Ans[1][1]}</div>
                            <div className="test-block-option-ex  btn" id={Ans[1][2]} onClick={this.answer1}>{Ans[1][2]}</div>
                        </div>
                    </div>

                    <div className="blockQEx card">
                        <div className="title-test-ex">{Question[2]}</div>
                        <div className="block-content-test">
                            <p className="ans-ex">Ответы:</p>
                            <div className="test-block-option-ex  btn" id={Ans[2][0]} onClick={this.answer2}>{Ans[2][0]}</div>
                            <div className="test-block-option-ex  btn" id={Ans[2][1]} onClick={this.answer2}>{Ans[2][1]}</div>
                            <div className="test-block-option-ex  btn" id={Ans[2][2]} onClick={this.answer2}>{Ans[2][2]}</div>
                        </div>
                    </div>

                </div>
                <div className="btnScoreBlock">
                    <button className="btn btn-send-ex" onClick={this.checkFunc}>Сдать экзамен</button>

                    {this.state.mainScore !== null &&
                        <div className="scoreBlockEx">
                            <div className="title-test">Всего баллов: {this.state.mainScore}</div>
                            <Link to="/Test_Exam"><button className="btn btn-save-ex" onClick={() => {
                                localStorage.setItem(`exam:${id}`, this.state.mainScore)
                            }}>Выйти</button></Link>

                            {/* <button className="btn "></button> */}
                        </div>
                    }

                </div>


                {/* <button onClick={() => alert(this.state.countForFirstNum)}>coucountForFirstNumnt</button>
                <button onClick={() => alert(this.state.countForSecondNum)}>countForSecondNum</button>
                <button onClick={() => alert(this.state.countForThirdNum)}>countForThirdNum</button>
                <button onClick={() => alert(this.state.mainScore)}>mainScore</button>
                <button onClick={() => alert(localStorage.getItem(id))}>localStorage</button> */}
                {/* <button onClick={() => alert(localStorage.getItem(`exam:JS`))}>localStorage</button>  */}







            </div>
        )
    }
}