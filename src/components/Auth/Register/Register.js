import React, { useRef } from 'react'
import './Auth.css'
import { ContainerTop } from '../../Containers/ContainerTop/ContainerTop'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import axios from '../../../axios/axios';
import { ErrorMessage } from '@hookform/error-message'
import { Input } from '../../../UI/Input/Input'
import { RegisterFormControlValues } from '../../../constans'



export const Register = () => {
    const { register, handleSubmit,getValues,reset,formState: { errors }} = useForm({
        defaultValues: {
            phoneNumber: '+380',
        }
    });

    const onSubmit = async data => {
        try {
        await axios.post('/users.json', data);
        alert(`Thank you, ${getValues('userName')}! You have been registered!`);
        reset();
          
        } catch (e) {
        console.log(e)
            }
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
                <span className='AuthTitle'>Register Pigga account</span>
                {/* <input type="text" placeholder="User Name" 
                    {...register("userName", {required: "Username required", minLength: {
                        value: 4,
                        message:'Minimum 4 characters'
                        },
                        maxLength: 25})} />
                <ErrorMessage className='ErrorMessage' errors={errors} name="userName" />
                
                <input type="password" placeholder="Password" 
                    {...register('password', {
                        required: "You must specify a password",
                        minLength: {
                        value: 8,
                        message: "Password must have at least 8 characters"
                        }
                  })} />
                <ErrorMessage className='ErrorMessage' errors={errors} name="password" />

                <input  type="password" placeholder="Confirm Password" 
                    {...register('password_repeat', { 
                        required: 'Enter password first',
                        validate: value =>
                            value === getValues('password') || "The passwords do not match"
                    })} />
                <ErrorMessage className='ErrorMessage' errors={errors} name="password_repeat" />

                <input type="email" placeholder="E-mail" 
                    {...register("email", {required: "E-mail adress required", maxLength: 30,
                    pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: 'Please, enter correct E-mail'
                        }},
                )} />
                <ErrorMessage className='ErrorMessage' errors={errors} name="email" />

                <input type="tel" placeholder="Phone: +380XXXXXXXXX" 
                    {...register("phoneNumber", {required: "This field is required",  pattern: {
                        value:/^[\+]?[0-9]{12}$/,
                        message: 'Incorrect phone number'
                        }}
                )} />
                <ErrorMessage className='ErrorMessage' errors={errors} name="phoneNumber" /> */}
                {renderFormInputs()}
                <div className='UserStatusButtons'>
                    <button className='StatusButton submit' type='sumbit'>Register</button>
                    <Link to='/sign-in'>
                        <button className='StatusButton option2' >Already a Customer?</button>
                    </Link>
                </div>
            </form>
        </div>
    </div>
  )
}