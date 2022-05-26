import React from 'react'
import './Account.css'
import { UserAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export const Account = () => {
    const { user, logout } = UserAuth();
    const navigate = useNavigate();

    const handleLogOut = async () => {
        try {
            await logout();
            navigate('/ ');
            console.log('You are Logged Out');
        } catch (error) {
            console.log(error.message);
        }
    }

  return (
    <div className='Account'>
        <span>Welcome to Your Account!</span>
        <br/>
        <p>User email: {user && user.email}</p>

        <button className='LogOutButton' onClick={handleLogOut}>Log Out</button>
    </div>
  )
}
