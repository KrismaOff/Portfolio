import React, { Component } from 'react'
import './SOC.css'

export default class SOC extends Component {
    render() {
        return (
            <div className="blockSOC hoverable">
                <a href="/" class="waves-effect waves-light btn-small blockWithModuls"><i class="material-icons icon-mat right">cloud</i>Обучающий ресурс</a>
                <a href="/TestWindow" class="waves-effect waves-light btn-small blockWithModuls"><i class="material-icons icon-mat right">cloud</i>Тесты</a>
                <a href="/Test_Exam" class="waves-effect waves-light btn-small blockWithModuls"><i class="material-icons icon-mat right">cloud</i>Экзамены</a>
            </div>
        )
    }
}
