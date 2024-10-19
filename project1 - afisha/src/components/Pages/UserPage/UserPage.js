import React from 'react'
import './UserPage.css'

import { useLoaderData } from 'react-router'

import UserSignUp from '../../templates/PagesTemps/UserPageTemps/UserSign'
import UserProfile from '../../templates/PagesTemps/UserPageTemps/UserProfile'

export default function UserPage() {

    const [action] = useLoaderData()

    return (
        <div className='userPage'>
            {(action === "signup" || action === "signin") && <UserSignUp action={action}/>}
            {action === "profile" && <UserProfile/>}
        </div>
    )
}
