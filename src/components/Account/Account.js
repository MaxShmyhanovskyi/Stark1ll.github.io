import React, { useMemo } from 'react'
import './Account.css'
import { UserAuth } from '../../context/AuthContext'
import { Routes,Route,useLocation } from 'react-router-dom'
import { LogoutButton } from '../../UI/LogoutButton/LogoutButton'
import { AccountNavbar } from '../../UI/AccountNavbar/AccountNavbar'
import { OrderHistory } from './OrderHistory/OrderHistory'
import { DeliveryAddresses } from './DeliveryAddresses/DeliveryAddresses'
import { AccountInformation } from './AccountInformation/AccountInformation'
import { AddDeliveryAddress } from './DeliveryAddresses/AddDeliveryAddress/AddDeliveryAddress'

export const Account = (props) => {
  const { user, logout } = UserAuth();
  const location = useLocation();

  const pageTitle = useMemo(() => ({
    '/account/orders':  'Past orders:',
    '/account/delivery': 'Delivery addresses: ',

    }[location.pathname]), [location]
  )

  return (
    <div className='Account'>
        <div className='AccountContainer'>
          <div className='AccountSide'>
            <AccountNavbar />
            <LogoutButton />
          </div>
          
          <div className='AccountInner'>
            <div className='AccountHeader'>
              <span className='AuthTitle'>Welcome, {user.displayName}!</span>
            </div>
            <div className='AuthTitle PageTitle'>{pageTitle}</div>
            <Routes>
              <Route path='/' element={<AccountInformation />} />
              <Route path='/orders' element={<OrderHistory />} />
              <Route path='/delivery' element={<DeliveryAddresses />} />
              <Route path='/delivery/new' element={<AddDeliveryAddress />} />
            </Routes>
          </div>
        </div>
    

    </div>
  )
}
