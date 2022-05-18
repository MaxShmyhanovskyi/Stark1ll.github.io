import React from 'react'
import './Header.css'
import HeaderIcon from './HeaderIcon'
import { Link } from 'react-router-dom'
import { SignInButton } from '../../../../UI/SignInButton/SignInButton'

export const Header = () => {
  return (
    <div className='Header'>
        <div className='BrandIcon'>
          <Link to={'/'}>
            <HeaderIcon/>
          </Link>
        </div>
        <SignInButton />
        <div className='HeaderText'>CALL US: <i className='Number'>8-(800) 555 3535</i></div>
    </div>
  )
}
