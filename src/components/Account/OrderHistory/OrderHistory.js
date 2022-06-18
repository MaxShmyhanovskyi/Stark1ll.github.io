import React, { useEffect, useState } from 'react'
import axios from '../../../axios/axios'
import './OrderHistory.css'
import { UserAuth } from '../../../context/AuthContext'

export const OrderHistory = () => {
  const { user } = UserAuth();
  const [orderHistory,setOrderHistory] = useState({
    orders: [],
    isDataLoaded: false,
  });

  useEffect(() => {
    if (!user.uid) return;
     axios.get(`users/${user.uid}/orders.json`)
     .then(response => {
       setOrderHistory({
           orders: Object.values(response.data),
           isDataLoaded: true,
         })
     }
     )},[user.uid]);
  
  const renderOrderHistory = () => {
    return orderHistory.orders.map((order,index) => 
      <div className='OrderHistoryCard' key={index}>
        Order: #{index + 1000}
      {
      order.map( (orderField,index) => {
        return (
          
            <div key={index}>{orderField}</div>
            );
          })}
          </div>
    )
  }
  
  const renderEmptyOrderHistory = () =>  {
    return (
      <>
      <div className='ProductTitle'>Past orders not found!</div>
      <div>
        <button className='StatusButton submit'>Create first order</button>
      </div>
      </>
    )
  }

  
  return (
    <div className='OrderHistory'>
      <div className='OrderHistoryContainer'>
          <div className='OrderHistoryInner'>
            {
              (orderHistory.isDataLoaded) ? 
              renderOrderHistory() : 
              renderEmptyOrderHistory()
            }
          </div>
      </div>
    </div>
  )
}