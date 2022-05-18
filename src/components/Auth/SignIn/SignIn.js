import React from 'react'
import '../Register/Auth.css'
import { ContainerTop } from '../../Containers/ContainerTop/ContainerTop'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export const SignIn = () => {
    const { register, handleSubmit,getValues,reset} = useForm({
        defaultValues: {
            userName: '',
            password: '',
        }
    });

  return (
    <div className='Auth'>
        <ContainerTop />
        <div className='AuthFormContainer'>
            <form>
            <span className='AuthTitle'>Sign in</span>
                <input type="text" placeholder="User Name" {...register("userName", {required: true, maxLength: 20})} />
                <input type="password" placeholder="Password" {...register("password", {required: true, maxLength: 20})} />
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
