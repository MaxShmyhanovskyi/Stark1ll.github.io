import React from 'react'
import './Header.css'
import HeaderIcon from './HeaderIcon'
import { Link, useNavigate } from 'react-router-dom'
import { SignInButton } from '../../../../UI/SignInButton/SignInButton'
import { UserAuth } from '../../../../context/AuthContext'
import { FaShoppingBasket } from 'react-icons/fa'

export const Header = () => {
  const { user, logout } = UserAuth();


  return (
    <div className='Header'>
        <div className='BrandIcon'>
          <Link to={'/'}>
            <HeaderIcon/>
          </Link>
        </div>
        <Link to='/shopping-cart' className='ShoppingBusketButton'>
          <FaShoppingBasket size='85%' />
        </Link>
        {(user) ? 
          <Link to='/account' className='ChangeUserStateButton'>My Account</Link>
        : 
        <SignInButton />}
        <div className='HeaderText'>CALL US: <i className='Number'>8-(800) 555 3535</i></div>
    </div>
  )
}
