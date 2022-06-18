import React from 'react'
import '../Register/Auth.css'
import { useForm } from 'react-hook-form'
import { Link, useNavigate} from 'react-router-dom'
import { renderFormInputs } from '../../../UI/renderFormInputs'
import { getSignInFormControlValues } from '../../../constans'
import { UserAuth } from '../../../context/AuthContext'
import { showLoginError, showResetPasswordError } from '../../../firebase/firebaseErrorsHandle'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../../firebase/firebase'

export const SignIn = () => {
    const { register, handleSubmit,getValues,reset,formState: { errors }} = useForm({});
    const navigate = useNavigate();
    const { userLogIn} = UserAuth();
 

    const loginEmailPassword = async (data) => {

        try {
            await userLogIn(getValues('email'), getValues('password'));
            toast.success(`Welcome, ${getValues('email')}`);
            navigate('/account');
        } catch (error) {
            showLoginError(error);
            console.log(error);
            
        }
    } 

    const resetUserPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, getValues('email'));
            toast.success('Password reset E-mail sent!');
        } catch (error) {
            showResetPasswordError(error);
            console.log(error)
        }
    }

  return (
    
    <div className='Auth'>
            <div className='AuthFormContainer'>
                <form onSubmit={handleSubmit(data => loginEmailPassword(data) || resetUserPassword(data))}>
                    <span className='AuthTitle'>Sign in</span>

                    {renderFormInputs(getSignInFormControlValues(getValues),register,errors)}
                    <div className='UserStatusButtons'>
                        <button className='StatusButton submit' type='sumbit'>Sign In</button>
                        <Link to='/register' className='StatusButton'>
                            <button className='StatusButton option2' type='button' >Not register yet?</button>
                        </Link>
                    </div>
                        <button className='ChangeUserStateButton resetPassword' type='button' onClick={() => resetUserPassword()}>Reset Password</button>
                </form>
            </div>
    </div>
  )
}
