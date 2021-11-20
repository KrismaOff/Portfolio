import './App.css';
import Nav from '../Nav/nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

// import News from '../News/news'
import SOC from '../SOC/SOC'
import TestWindow from '../TestWindow/testWindow'
import Test from '../Test/test'
import TestExam from '../TestExam/test'
import Exam from '../ExamTest/ExamTest'


import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      oneId: 0,
      twoId: 0
    }
  }

  updateData = (oneId, twoId) => {
    this.setState({ oneId: oneId, twoId: twoId })
  }

  render() {

    const option = [
      { title: "JavaScript", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, doloremque?", img: "https://hsto.org/webt/5d/cc/3c/5dcc3c049a4cb541172494.jpeg", id: "JS" },
      { title: "Python", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, doloremque?", img: "https://d9v7j6n3.rocketcdn.me/wp-content/uploads/2020/06/python.png", id: "PY" },
      { title: "PHP", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, doloremque?", img: "https://avatars.mds.yandex.net/get-zen_doc/758638/pub_60ca0390a0acd45cadf9e4eb_60ca0c096f4a071f49e166c5/scale_1200", id: "PHP" },
    ]
    const Array = [
      // JS
      [
        {
          id: "JS",
          title: "JavaScript 1",
          Question: [
            "Зачем web-разработчки используют JavaScript?",
            "В каком годы бы придуман JavaSript?",
            "Вам нравится JavaScript?",
          ],
          Ans: [
            ["Так принято", "для оживления веб-страницы", "не придумал"],
            ["1997 год", "1995 год", "1991 год"],
            ["Да!", "Нет.", "И что я должен ответить?!"]
          ],
          AnsTrue: [
            "для оживления веб-страницы",
            "1995 год",
            "Да!"
          ]
        },
        {
          id: "JS2",
          title: "JavaScript 2",
          Question: [
            "Как в JS создать объект?",
            "Есть ли смысл учить JavaScript?",
            "Вам нравится JavaScript?"
          ],
          Ans: [
            ["Легко", "Сложно", "Не знаю"],
            ["не знаю что ответить", "да", "нет"],
            ["Да!", "Нет.", "И что я должен ответить?!"]
          ],
          AnsTrue: [
            "Легко",
            "да",
            "Да!"
          ]
        },
      ],
      // PYTHON
      [
        {
          id: "PY",
          title: "Python 1",
          Question: [
            "Что такое Python?",
            "В каком годы бы придуман Python?",
            "Вам нравится Python?",
          ],
          Ans: [
            ["змея", "язык программирования", "что-то личное"],
            ["1969 год", "1997 год", "1971 год"],
            ["Да!", "Нет.", "И что я должен ответить?!"]
          ],
          AnsTrue: [
            "язык программирования",
            "1969 год",
            "Да!"
          ]
        },
        {
          id: "PY2",
          title: "Python 2",
          Question: [
            "Стоит ли учить Python?",
            "Что такое переменная?",
            "Вам нравится Python?",
          ],
          Ans: [
            ["Думаю да", "Не стоит", "не придумал"],
            ["Да", "Нет", "емкость для хранения данных"],
            ["Да!", "Нет.", "И что я должен ответить?!"],
          ],
          AnsTrue: [
            "Думаю да",
            "емкость для хранения данных",
            "Да!"
          ]
        },
      ],
      // PHP
      [
        {
          id: "PHP",
          title: "PHP 1",
          Question: [
            "Что такое PHP?",
            "В каком годы бы придуман PHP?",
            "Вам нравится PHP?",
          ],
          Ans: [
            ["пыха", "язык программирования", "вэйп система"],
            ["1997 год", "1995 год", "1991 год"],
            ["Да!", "Нет.", "И что я должен ответить?!"],
          ],
          AnsTrue: [
            "язык программирования",
            "1995 год",
            "Да!"
          ]
        },
        {
          id: "PHP2",
          title: "PHP 2",
          Question: [
            "Кто создатель PHP?",
            "Зачем нужен PHP?",
            "Вам нравится PHP?",
          ],
          Ans: [
            ["Расмус Лердорф", "Коля", "Петя"],
            ["Для души", "для работы с сервером", "да"],
            ["Да!", "Нет.", "И что я должен ответить?!"],
          ],
          AnsTrue: [
            "Расмус Лердорф",
            "для работы с сервером",
            "Да!"
          ]
        }
      ]
    ]


    //   for (let i = 0; i <= 3; i++) {
    //     Array[i][0].Ans[0].sort(() => Math.random() - 0.7);
    //     Array[i][0].Ans[1].sort(() => Math.random() - 0.5);
    //     Array[i][0].Ans[2].sort(() => Math.random() - 0.3);

    //     Array[i][1].Ans[0].sort(() => Math.random() - 0.7);
    //     Array[i][1].Ans[1].sort(() => Math.random() - 0.5);
    //     Array[i][1].Ans[2].sort(() => Math.random() - 0.3);

    //   console.log(i)
    // }

    Array[0][0].Ans[0].sort(() => Math.random() - 0.7);
    Array[0][0].Ans[1].sort(() => Math.random() - 0.5);
    Array[0][0].Ans[2].sort(() => Math.random() - 0.3);

    Array[0][1].Ans[0].sort(() => Math.random() - 0.7);
    Array[0][1].Ans[1].sort(() => Math.random() - 0.5);
    Array[0][1].Ans[2].sort(() => Math.random() - 0.3);

    Array[1][0].Ans[0].sort(() => Math.random() - 0.7);
    Array[1][0].Ans[1].sort(() => Math.random() - 0.5);
    Array[1][0].Ans[2].sort(() => Math.random() - 0.3);

    Array[1][1].Ans[0].sort(() => Math.random() - 0.7);
    Array[1][1].Ans[1].sort(() => Math.random() - 0.5);
    Array[1][1].Ans[2].sort(() => Math.random() - 0.3);

    Array[2][0].Ans[0].sort(() => Math.random() - 0.7);
    Array[2][0].Ans[1].sort(() => Math.random() - 0.5);
    Array[2][0].Ans[2].sort(() => Math.random() - 0.3);

    Array[2][1].Ans[0].sort(() => Math.random() - 0.7);
    Array[2][1].Ans[1].sort(() => Math.random() - 0.5);
    Array[2][1].Ans[2].sort(() => Math.random() - 0.3);

    return (
      <div className="App none-sel">
        <Router>
          <Nav />
          <Switch>
            <Route
              exact path="/"
              render={() => <h1>Main Page</h1>}
            ></Route>

            <Route
              path="/Qualifications"
              render={() => <h2>Qualifications</h2>}
            ></Route>

            <Route
              path="/Documents"
              render={() => <h2>Documents</h2>}
            ></Route>

            <Route
              path="/News"
              render={()=> {
                <h1>News</h1>
              }}>
              </Route>

            <Route
              path="/Contacts"
              render={() => <h2>Contacts</h2>}
            ></Route>

            <Route
              path="/SOC"
              component={SOC}>
            </Route>

            <Route
              path="/TestWindow"
              render={() => {
                return <TestWindow list={option} listTwo={Array} />
              }}
            ></Route>

            <Route
              path="/Exam"
              render={() => <Exam list={Array[this.state.oneId][this.state.twoId]} />}
            ></Route>

            <Route
              path="/Test_Exam"
              render={() => <TestExam updateData={this.updateData} />}
            ></Route>

            <Route
              path="/Passing_the_test/:id"
              render={({ match }) => {
                const { id } = match.params
                let searchList = id.split('-')
                let idSp = searchList[id.split('-').length - 1]

                if (searchList[0] === "JS") {
                  return <Test list={Array[0][idSp]} />
                } else if (searchList[0] === "PY") {
                  return <Test list={Array[1][idSp]} />
                } else if (searchList[0] === "PHP") {
                  return <Test list={Array[2][idSp]} />
                }
              }}
            ></Route>

            <Route path="/404-page" render={() => {
              return <h1>Error - 404<br />Pages not found :(</h1>
            }}></Route>

            <Redirect to="/404-page" />

          </Switch>
        </Router>
        {/* <button onClick={() => { alert(this.state.oneId) }}>Проверка</button>
        <button onClick={() => { alert(this.state.twoId) }}>Проверка</button> */}
        <button className="btn removeBtn" onClick={() => localStorage.clear()}>Remove data</button>
      </div>
    );
  }
}

