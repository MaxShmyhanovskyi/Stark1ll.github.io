import React, { useState } from 'react'
import './Auth.css'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { renderFormInputs } from '../../../UI/renderFormInputs'
import { getRegisterFormControlValues } from '../../../constans'
import { UserAuth} from '../../../context/AuthContext'
import { showSignUpError } from '../../../firebase/firebaseErrorsHandle'
import { toast } from 'react-toastify'
import axios from '../../../axios/axios'
import { auth } from '../../../firebase/firebase'
import { sendEmailVerification,updateCurrentUser} from 'firebase/auth'


export const Register = () => {
    const { register, handleSubmit,getValues,reset,formState: { errors }} = useForm({
        defaultValues: {
            telephone: '+38'
        }
    });
    const { createUser, updateUserInfo} = UserAuth();
    const navigate = useNavigate();

    const signUpEmailPassword = async (data) => {
        try {
            await createUser(getValues('email'), getValues('password'));
            await updateUserInfo(getValues('fullName'), getValues('telephone'));
            await sendEmailVerification(auth.currentUser).then(() => toast.warning('E-mail verification sent!'))
            toast.success('Your account has been created!');
            navigate("/account");
        } catch (error) {
            showSignUpError(error);
            console.log(error)
        }
    } 

  return (
    <div className='Auth'>
        <div className='AuthFormContainer'>
            <form onSubmit={handleSubmit(data => signUpEmailPassword(data))}>
                <span className='AuthTitle'>Register Pigga account</span>

                {renderFormInputs(getRegisterFormControlValues(getValues),register,errors)}
                
                <div className='UserStatusButtons'>
                    <button className='StatusButton submit' type='sumbit'>Register</button>
                    
                    <Link to='/sign-in' className='StatusButton'>
                        <button className='StatusButton option2'>Already a Customer?</button>
                    </Link>
                </div>
            </form>
        </div>
    </div>
  )
}