import React from 'react'
import '../Register/Auth.css'
import { ContainerTop } from '../../Containers/ContainerTop/ContainerTop'
import { useForm } from 'react-hook-form'
import { Link, useNavigate} from 'react-router-dom'
import { Input } from '../../../UI/Input/Input'
import { getSignInFormControlValues } from '../../../constans'
import { UserAuth } from '../../../context/AuthContext'
import { showLoginError } from '../../../firebase/firebaseErrorsHandle'
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const SignIn = () => {
    const { register, handleSubmit,getValues,reset,formState: { errors }} = useForm({});
    const navigate = useNavigate();
    const { userLogIn } = UserAuth();
 

    const loginEmailPassword = async (event) => {
        event.preventDefault();

        try {
            await userLogIn(getValues('email'), getValues('password'));
            toast.success(`Welcome, ${getValues('email')}`);
            navigate('/account');
        } catch (error) {
            showLoginError(error);
            console.log(error);
            
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
                <form onSubmit={event => handleSubmit(loginEmailPassword(event))}>
                    <span className='AuthTitle'>Sign in</span>

                    {renderFormInputs()}

                    <div className='UserStatusButtons'>
                        <button className='StatusButton submit' type='sumbit'>Sign In</button>
                        <Link to='/register'>
                            <button className='StatusButton option2'>Not register yet?</button>
                        </Link>
                    </div>
                </form>
            </div>
    </div>
  )
}
