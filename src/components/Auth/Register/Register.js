import React, { useState } from 'react'
import './Auth.css'
import { ContainerTop } from '../../Containers/ContainerTop/ContainerTop'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../../../UI/Input/Input'
import { getRegisterFormControlValues } from '../../../constans'
import { UserAuth } from '../../../context/AuthContext'



export const Register = () => {
    const { register, handleSubmit,getValues,reset,formState: { errors }} = useForm({});
    const { createUser } = UserAuth();
    const navigate = useNavigate();

    const signUpEmailPassword = async (event) => {
        event.preventDefault();
        
        const loginEmail = getValues('email');
        const loginPassword = getValues('password');
        try {
            createUser(loginEmail, loginPassword);
            navigate("/account");
            reset();
        } catch (error) {
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
            <form onSubmit={event => handleSubmit(signUpEmailPassword(event))}>
                <span className='AuthTitle'>Register Pigga account</span>

                {renderFormInputs()}
                
                <div className='UserStatusButtons'>
                    <button className='StatusButton submit' type='sumbit'>Register</button>
                    <button className='StatusButton option2'>
                        <Link to='/sign-in'>Already a Customer?</Link>
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}