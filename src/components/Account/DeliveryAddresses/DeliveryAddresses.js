import React, { useState, useEffect,useCallback } from 'react'
import './DeliveryAddresses.css'
import { Link } from 'react-router-dom';
import { FaAddressBook } from 'react-icons/fa'
import { UserAuth } from '../../../context/AuthContext'
import axios from '../../../axios/axios'

export const DeliveryAddresses = () => {
  const { user } = UserAuth();
  const [SavedDeliveryAddresses,setSavedDeliveryAddresses] = useState([]);
  const [isDataLoaded, setDataLoading] = useState(false);

  useEffect(() => {
    if (!user.uid) return;

    axios.get(`users/${user.uid}/addresses.json`)
    .then(response => {
      setSavedDeliveryAddresses(Object.values(response.data));
      setDataLoading(true);
    }
    )},[user.uid]);

  const removeDeliveryAddress =  useCallback((address) => {
    try {
      axios.delete(`users/${user.uid}/addresses.json`);
    } catch (error) {
      console.log(error)
    }
    setSavedDeliveryAddresses(SavedDeliveryAddresses.filter(savedAddress => savedAddress.id !== address.id))
    SavedDeliveryAddresses.forEach(address => axios.post(`users/${user.uid}/addresses.json`, address));
  }, [user.uid,SavedDeliveryAddresses,setSavedDeliveryAddresses])


  const renderSavedAddresses = () => 
    SavedDeliveryAddresses.map((address, index) => 
      <div className='SavedAddressCard' key={index}>
        <span className='AddressTitle'>Address #{index+1}</span>
        {Object.entries(address).map((addressField,index) => {
          return (
            <div className='AddressCardField' key={index}>
              <span className='ProductTitle'>{addressField[0]}: </span> 
              <span className='AddressfieldInfo'>{addressField[1]}</span>
            </div>
            )
          }
        )}
        <button className='StatusButton option2 DeleteAddressAddress' onClick={() =>removeDeliveryAddress(address)}>Delete address</button>
      </div>
    )

  return (
    <div className='DeliveryAddresses'>
      <div className='DeliveryAddressesContainer'>
        <div>
          {
            isDataLoaded && SavedDeliveryAddresses.length > 0
            ? 
            <div className='SavedDeliveryAddresses'>
              {renderSavedAddresses()}
            </div>
            :
            <div className='EmptyShoppingCart'> No Saved Delivery Addresses found! </div>
          }
        </div>

        <div className=''>
          <button className='StatusButton submit addDeliveryAddressButton' type='button'>
            <Link to='/account/delivery/new'>
                <FaAddressBook />
                Add delivery address!
              </Link>          
          </button>
        </div>
      </div>
    </div>
  )
}
