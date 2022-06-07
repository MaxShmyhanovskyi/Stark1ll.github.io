import React from 'react'
import { Navigate, NavLink,useMatch,useNavigate } from 'react-router-dom'
import { OrderHistory } from '../../components/Account/OrderHistory/OrderHistory';
import './AccountNavbar.css'

export const AccountNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className='AccountNavbar'>
        <NavLink to='/account'>
          Account Information
        </NavLink>
        <NavLink to='/account/orders'>
          Order History
        </NavLink>
        <NavLink to='/account/delivery'>
          Your delivery addresses
        </NavLink>
    </div>
  )
}
