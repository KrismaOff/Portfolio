import React from 'react'
import MAIN from '../Main/Main'
import PostLikes from '../../DATA/Post-likes'
import PostUsers from '../../DATA/Post-users'
import "./Account.css"

export default function Account(props) {
    return (
        <div className="n-s">
            <div className="user-posts">
                <div className="title-crea">Посты созданые вами:</div>
                <MAIN list={PostUsers} userPosts={true} listVisible={""}/>
            </div>
            <div className="user-posts">
                <div className="title-crea">Посты понравившиеся вами:</div>
                <MAIN list={PostLikes} userLikes={true} listVisible={""}/>
            </div>
        </div>
    )
}

