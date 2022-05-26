import React from 'react'
import '../Register/Auth.css'
import { ContainerTop } from '../../Containers/ContainerTop/ContainerTop'
import { useForm } from 'react-hook-form'
import { Link, useNavigate} from 'react-router-dom'
import { Input } from '../../../UI/Input/Input'
import { getSignInFormControlValues } from '../../../constans'
import { UserAuth } from '../../../context/AuthContext'

export const SignIn = () => {
    const { register, handleSubmit,getValues,reset,formState: { errors }} = useForm({});
    const navigate = useNavigate();
    const { userLogIn } = UserAuth();
    const onSubmit = async data => {
        reset();
    }

    const loginEmailPassword = async (event) => {
        event.preventDefault();

        const loginEmail = getValues('email');
        const loginPassword = getValues('password');

        try {
            await userLogIn(loginEmail, loginPassword);
            navigate('/account');
        } catch (error) {
            console.log(error)
        }
    } 
    
    const renderFormInputs = () => 
    Object.values(getSignInFormControlValues(getValues)).map((field,index) => {
    
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
            <form onSubmit={event => handleSubmit(onSubmit(event))}>
                <span className='AuthTitle'>Sign in</span>
                {renderFormInputs()}
                <div className='UserStatusButtons'>
                    <button className='StatusButton submit' type='sumbit' onClick={loginEmailPassword}>Sign In</button>
                    <button className='StatusButton option2'>
                        <Link to='/register'>Not register yet?</Link>
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}
