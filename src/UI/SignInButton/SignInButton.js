import React from 'react'
import './SignInButton.css'
import { Link } from 'react-router-dom'

export const SignInButton = () => {
  return (
    <>
    <Link to='/sign-in'>
        <button className='ChangeUserStateButton'>Sign in</button>
    </Link>
    </>
  )
}
