import React from 'react'
import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const LogoutButton = () => {
    const { user, logout } = UserAuth();
    const navigate = useNavigate();

    const handleLogOut = async () => {
        try {
            await logout();
            navigate('/ ');
            toast.success('You are Logged Out');
        } catch (error) {
            console.log(error.message);
        }
    }
    
  return (
    <div>
        <button className='ChangeUserStateButton' onClick={handleLogOut}>Log Out</button>
    </div>
  )
}
