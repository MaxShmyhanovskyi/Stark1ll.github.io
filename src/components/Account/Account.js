import React from 'react'
import './Account.css'
import { UserAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { ContainerTop } from '../Containers/ContainerTop/ContainerTop'
import { LogoutButton } from '../../UI/LogoutButton/LogoutButton'
import { ToastContainer,toast } from 'react-toastify'

export const Account = () => {
    const { user, logout } = UserAuth();
    const navigate = useNavigate();


  return (
    <div className='Account'>
        <ContainerTop />
        <span>Welcome to Your Account!</span>
        <br/>
        <p>User email: {user && user.email}</p>
        <LogoutButton />
    </div>
  )
}
