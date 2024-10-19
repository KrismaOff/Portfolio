import React, { useContext } from 'react'
import './UserSign.css'

import useRedirect from '../../../../../hooks/mainHooks/useRedirect'

import { StatusUserContext } from '../../../../App/App'

import UserSignUpPart from '../UserSignUpPart'
import UserSignInPart from '../UserSignInPart'

export default function UserSign({ action }) {

  const { user } = useContext(StatusUserContext)

  useRedirect(user, "/User/Profile")

  return (
    <div className='signUpCont'>
      <UserSignInPart act={action === "signin"} />
      <UserSignUpPart act={action === "signup"} />
    </div>
  )
}