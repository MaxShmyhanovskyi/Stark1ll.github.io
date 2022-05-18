import React, { useRef } from 'react'
import './Auth.css'
import { ContainerTop } from '../../Containers/ContainerTop/ContainerTop'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import axios from '../../../axios/axios';
import { ReactDOM } from 'react'


export const Register = () => {
    const { register, handleSubmit,getValues,reset,formState: { errors }} = useForm({
        defaultValues: {
            phoneNumber: '+380'
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

  return (
    <div className='Auth'>
        <ContainerTop />
        <div className='AuthFormContainer'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <span className='AuthTitle'>Register Pigga account</span>
                <input type="text" placeholder="User Name" 
                    {...register("userName", {required: "Username required", minLength: {
                        value: 4,
                        message:'Minimum 4 characters'
                        },
                        maxLength: 25})} />
                {errors.userName && <span className='ErrorMessage'>{errors.userName.message}</span>}

                <input type="password" placeholder="Password" 
                    {...register('password', {
                        required: "You must specify a password",
                        minLength: {
                        value: 8,
                        message: "Password must have at least 8 characters"
                        }
                  })} />
                {errors.password && <span className='ErrorMessage'>{errors.password.message}</span>}

                <input  type="password" placeholder="Confirm Password" 
                    {...register('password_repeat', { 
                        required: 'Enter password first',
                        validate: value =>
                            value === getValues('password') || "The passwords do not match"
                    })} />
                {errors.password_repeat && <span className='ErrorMessage'>{errors.password_repeat.message}</span>}

                <input type="email" placeholder="E-mail" 
                    {...register("email", {required: "E-mail adress required", maxLength: 30,
                    pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: 'Please, enter correct E-mail'
                        }},
                )} />
                {errors.email && <span className='ErrorMessage'>{errors.email.message}</span>}

                <input type="tel" placeholder="Phone: +380XXXXXXXXX" 
                    {...register("phoneNumber", {required: "This field is required",  pattern: {
                        value:/^[\+]?[0-9]{12}$/,
                        message: 'Phone number required'
                        }}
                )} />
                {errors.phoneNumber && <span className='ErrorMessage'>{errors.phoneNumber.message}</span>}

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