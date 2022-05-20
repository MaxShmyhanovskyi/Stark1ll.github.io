import React from 'react'
import '../Register/Auth.css'
import { ContainerTop } from '../../Containers/ContainerTop/ContainerTop'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Input } from '../../../UI/Input/Input'
import { RegisterFormControlValues } from '../../../constans'
import { ErrorMessage } from '@hookform/error-message'
import axios from '../../../axios/axios'

export const SignIn = () => {
    const { register, handleSubmit,getValues,reset,formState: { errors }} = useForm({
        defaultValues: {
            userName: '',
            password: '',
            telephone: '+380',
        }
    });

    const onSubmit = async data => {
        console.log(data);
        reset();
    }
    
    const renderFormInputs = () => 
    Object.values(RegisterFormControlValues).map((field,index) => {
    
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <span className='AuthTitle'>Sign in</span>
                {renderFormInputs()}
                <div className='UserStatusButtons'>
                    <button className='StatusButton submit' type='sumbit'>Sign In</button>
                    <Link to='/register'>
                        <button className='StatusButton option2' >Not register yet?</button>
                    </Link>
                </div>
            </form>
        </div>
    </div>
  )
}
