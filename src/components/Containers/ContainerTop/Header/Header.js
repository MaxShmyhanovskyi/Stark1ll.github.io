import React from 'react'
import './Header.css'
import HeaderIcon from './HeaderIcon'
import { Link } from 'react-router-dom'
import { SignInButton } from '../../../../UI/SignInButton/SignInButton'
import { UserAuth } from '../../../../context/AuthContext'
import { LogoutButton } from '../../../../UI/LogoutButton/LogoutButton'

export const Header = () => {
  const { user, logout } = UserAuth();

  return (
    <div className='Header'>
        <div className='BrandIcon'>
          <Link to={'/'}>
            <HeaderIcon/>
          </Link>
        </div>
        {(user) ? 
          <Link to='/account' className='ChangeUserStateButton'>My Account</Link>
        : 
        <SignInButton />}
        <div className='HeaderText'>CALL US: <i className='Number'>8-(800) 555 3535</i></div>
    </div>
  )
}
