import React, { useState } from 'react'
import './Auth.css'
import { ContainerTop } from '../../Containers/ContainerTop/ContainerTop'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../../../UI/Input/Input'
import { getRegisterFormControlValues } from '../../../constans'
import { UserAuth } from '../../../context/AuthContext'
import { showSignUpError } from '../../../firebase/firebaseErrorsHandle'
import { ToastContainer,toast } from 'react-toastify'


export const Register = () => {
    const { register, handleSubmit,getValues,reset,formState: { errors }} = useForm({});
    const { createUser } = UserAuth();
    const navigate = useNavigate();

    const signUpEmailPassword = async (data) => {
        console.log(data)
        try {
            await createUser(getValues('email'), getValues('password'));
            toast.success('Your account has been created!');
            navigate("/account");
        } catch (error) {
            showSignUpError(error);
            console.log(error)
        }
    } 

    const renderFormInputs = () => 
        Object.values(getRegisterFormControlValues(getValues)).map((field,index) => {
    
        return (
            <Input register={register} key={index} errors={errors} {
                    ...field
                }
            />
            )
        },
    );

  return (
    <div className='Auth'>
        <ContainerTop />
        <div className='AuthFormContainer'>
            <form onSubmit={handleSubmit(data => signUpEmailPassword(data))}>
                <span className='AuthTitle'>Register Pigga account</span>

                {renderFormInputs()}
                
                <div className='UserStatusButtons'>
                    <button className='StatusButton submit' type='sumbit'>Register</button>
                    
                    <Link to='/sign-in' >
                        <button className='StatusButton'>Already a Customer?</button>
                    </Link>
                </div>
            </form>
        </div>
    </div>
  )
}