import React, { Component } from 'react'
import './test.css'
import { Link } from 'react-router-dom';

export default class test extends Component {

    constructor(props) {
        super(props)

        this.state = {
            countForFirstNum: null,
            countForSecondNum: null,
            countForThirdNum: null,
            mainScore: null,
        }
    }

    // answer = (e) => {
    //     if (e.target.id === this.props.list.AnsTrue[0]) {
    //         this.setState({
    //             countForFirstNum: 3
    //         })
    //     } else if (e.target.id !== this.props.list.AnsTrue[0]) {
    //         this.setState({
    //             countForFirstNum: 0
    //         })
    //     }
    //     if (e.target.id === this.props.list.AnsTrue[1]) {
    //         this.setState({
    //             countForSecondNum: 3
    //         })
    //     } else if (e.target.id !== this.props.list.AnsTrue[1]) {
    //         this.setState({
    //             countForSecondNum: 0
    //         })           
    //     }

    //     if (e.target.id === this.props.list.AnsTrue[2]) {
    //         this.setState({
    //             countForThirdNum: 3
    //         })
    //     } else if (e.target.id !== this.props.list.AnsTrue[2]) {
    //         this.setState({
    //             countForThirdNum: 0
    //         })
    //     }

    //     // switch (e.target.id) {
    //     //     case this.props.list.AnsTrue[0]: { let sum = this.state.countForFirstNum + 3; this.setState({ countForFirstNum: sum }) } break;
    //     //     case !this.props.list.AnsTrue[0]: { let sum = this.state.countForFirstNum - 3; this.setState({ countForFirstNum: sum }) } break;
    //     //     case this.props.list.AnsTrue[1]: { let sum = this.state.countForSecondNum + 3; this.setState({ countForSecondNum: sum }) } break;
    //     //     case !this.props.list.AnsTrue[1]: { let sum = this.state.countForSecondNum - 3; this.setState({ countForSecondNum: sum }) } break;
    //     //     case this.props.list.AnsTrue[2]: { let sum = this.state.countForThirdNum + 3; this.setState({ countForThirdNum: sum }) } break;
    //     //     case !this.props.list.AnsTrue[2]: { let sum = this.state.countForThirdNum - 3; this.setState({ countForThirdNum: sum }) } break;
    //     //     default: break;
    //     // }
    // }
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
        }



    }

    render() {

        // let lis = []
        const { id, title, Question, Ans } = this.props.list
        // Ans[0].sort(() => Math.random() - 0.5);
        // Ans[1].sort(() => Math.random() - 0.5);
        // Ans[2].sort(() => Math.random() - 0.5);

        // let rand = () => {
        // Ans[0].sort(() => Math.random() - 0.5);
        // Ans[1].sort(() => Math.random() - 0.5);
        // Ans[2].sort(() => Math.random() - 0.5);
        // }
        // rand()

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
            <div className="BlockTest hoverable none-sel">
                <div className="titleTest">
                    <p class="flow-text ">{title}</p>
                    <div className="line "></div>
                </div>
                <div className="main-block-test">
                    {/* {lis} */}

                    <div className="blockQ card">
                        <div className="title-test ">{Question[0]}</div>
                        <p className="">Ответы:</p>
                        <div className="test-block-option  btn" id={Ans[0][0]} onClick={this.answer0}>{Ans[0][0]}</div>
                        <div className="test-block-option  btn" id={Ans[0][1]} onClick={this.answer0}>{Ans[0][1]}</div>
                        <div className="test-block-option  btn" id={Ans[0][2]} onClick={this.answer0}>{Ans[0][2]}</div>
                    </div>


                    <div className="blockQ card">
                        <div className="title-test ">{Question[1]}</div>
                        <div className="block-content-test">
                            <p className="">Ответы:</p>
                            <div className="test-block-option  btn" id={Ans[1][0]} onClick={this.answer1}>{Ans[1][0]}</div>
                            <div className="test-block-option  btn" id={Ans[1][1]} onClick={this.answer1}>{Ans[1][1]}</div>
                            <div className="test-block-option  btn" id={Ans[1][2]} onClick={this.answer1}>{Ans[1][2]}</div>
                        </div>
                    </div>

                    <div className="blockQ card">
                        <div className="title-test">{Question[2]}</div>
                        <div className="block-content-test">
                            <p>Ответы:</p>
                            <div className="test-block-option  btn" id={Ans[2][0]} onClick={this.answer2}>{Ans[2][0]}</div>
                            <div className="test-block-option  btn" id={Ans[2][1]} onClick={this.answer2}>{Ans[2][1]}</div>
                            <div className="test-block-option  btn" id={Ans[2][2]} onClick={this.answer2}>{Ans[2][2]}</div>
                        </div>
                    </div>

                </div>
                <div className="btnScoreBlock">
                    <button className="btn btn-send" onClick={this.checkFunc}>Проверить ответы</button>

                    {this.state.mainScore !== null &&
                        <div className="scoreBlock">
                            <div className="title-test">
                                Всего баллов: {this.state.mainScore}
                            </div>

                            <Link to="/TestWindow">
                                <button
                                    className="btn btn-save"
                                    onClick={() => {
                                        localStorage.setItem(id, this.state.mainScore)
                                    }}>Сохранить</button>
                            </Link>
                            <button
                                className="btn btn-repl"
                                onClick={() => {
                                    this.setState({ mainScore: null })
                                }}>Попробовать еще раз
                            </button>
                        </div>
                    }

                </div>

                {/* <button onClick={() => alert(this.state.countForFirstNum)}>coucountForFirstNumnt</button>
                <button onClick={() => alert(this.state.countForSecondNum)}>countForSecondNum</button>
                <button onClick={() => alert(this.state.countForThirdNum)}>countForThirdNum</button>
                <button onClick={() => alert(this.state.mainScore)}>mainScore</button>
                <button onClick={() => alert(localStorage.getItem(id))}>localStorage</button> */}





            </div>
        )
    }
}