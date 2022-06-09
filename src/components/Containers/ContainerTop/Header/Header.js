import React, { useContext } from 'react'
import './Header.css'
import HeaderIcon from './HeaderIcon'
import { Link, useNavigate } from 'react-router-dom'
import { SignInButton } from '../../../../UI/SignInButton/SignInButton'
import { UserAuth } from '../../../../context/AuthContext'
import { FaShoppingBasket } from 'react-icons/fa'
import ShoppingContext from '../../../../context/ShoppingContext'

export const Header = (props) => {
  const { user, logout } = UserAuth();
  const context = useContext(ShoppingContext);
  const cartItemNumber = context.cart.reduce((count, currentItem) => count + currentItem.quantity, 0);

  return (
    <div className='Header'>
        <div className='BrandIcon'>
          <Link to={'/'}>
            <HeaderIcon/>
          </Link>
        </div>
        <Link to='/shopping-cart' className='ShoppingCartButton'>
          <FaShoppingBasket size='12%' className='ShoppingCartIcon'/> Shopping Cart ({cartItemNumber})
        </Link>
        {(user) ? 
          <Link to='/account' className='ChangeUserStateButton'>My Account</Link>
        : 
        <SignInButton />}
        <div className='HeaderText'>CALL US: <i className='Number'>8-(800) 555 3535</i></div>
    </div>
  )
}
