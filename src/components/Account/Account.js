import React from 'react'
import './Account.css'
import { UserAuth } from '../../context/AuthContext'
import { Routes,Route } from 'react-router-dom'
import { LogoutButton } from '../../UI/LogoutButton/LogoutButton'
import { AccountNavbar } from '../../UI/AccountNavbar/AccountNavbar'
import { OrderHistory } from './OrderHistory/OrderHistory'
import { DeliveryAddresses } from './DeliveryAddresses/DeliveryAddresses'
import { AccountInformation } from './AccountInformation/AccountInformation'

export const Account = () => {
  const { user, logout } = UserAuth();

  return (
    <div className='Account'>
        <div className='AccountContainer'>
          <AccountNavbar />
          <div className='AccountInner'>
            <div className='AccountHeader'>
              <span className='AuthTitle'>Welcome, {user.displayName}!</span>
            </div>
            <Routes>
              <Route path='/' element={<AccountInformation />} />
              <Route path='/orders' element={<OrderHistory />} />
              <Route path='/delivery' element={<DeliveryAddresses />} />
            </Routes>
            
              <LogoutButton />
          </div>
        </div>
    

    </div>
  )
}
