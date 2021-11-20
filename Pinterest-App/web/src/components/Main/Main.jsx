import './Main.css'
import POST from '../Post/Post'
import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        const { list, tag, listVisible } = this.props
        let array = []

        function params(index, i) { return list[`num${i}`].tags.indexOf(tag.split(",")[index]) !== -1 }
        function paramsTwo(index, i) { return list[`num${i}`][index].indexOf(listVisible.toLowerCase()) !== -1 }

        if (this.props.userPosts) {//                                                    UserPosts - Account
            for (let i = 0; i < Object.keys(list).length; i++) {
                array.push(<POST key={this.props.list[`num${i}`].id} x={true} list={this.props.list[`num${i}`]} />)
            }
        } else if (this.props.userLikes) {//                                             UserLikes - Account
            for (let i = 0; i < Object.keys(list).length; i++) {
                array.push(<POST key={list[`num${i}`].id} userLikes={this.props.userLikes} x_l={true} list={list[`num${i}`]} />)
            }
        } else if (listVisible.length === 0) {//                                        liatVisible === 0 - MAIN 
            for (let i = 0; i < Object.keys(list).length; i++) {
                array.push(<POST key={list[`num${i}`].id} list={list[`num${i}`]} />)
            }
        } else if (listVisible !== 0 && tag === null) {//                                listVisible !== 0 - MAIN 
            for (let i = 0; i < Object.keys(list).length; i++) {
                if (paramsTwo("tags", i) || paramsTwo("title", i)) {
                    array.push(<POST key={list[`num${i}`].id} list={list[`num${i}`]} />)
                }
            }
        } else if (tag.length !== 0) {//                                                 POSTWINDOWS
            for (let i = 0; i < Object.keys(list).length; i++) {
                if ((params(0, i) || params(1, i) || params(2, i)) && this.props.list[`num${i}`].id !== this.props.idPost) {
                    array.push(
                        <POST key={this.props.list[`num${i}`].id} list={this.props.list[`num${i}`]} />
                    )
                }
            }
        } else {
            array.push(<div>Error, we know about problem</div>)
        }

        return (
            <div className="main-block">
                {array}
            </div>
        )
    }
}
