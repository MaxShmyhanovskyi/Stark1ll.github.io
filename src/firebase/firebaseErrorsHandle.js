import { AuthErrorCodes } from "firebase/auth"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showLoginError = (error) => {
    if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
        toast.error('Password invalid!');
        console.log('ERROR');
    } else if (error.code === AuthErrorCodes.USER_DELETED) {
        toast.error('User is not registered!');
    } else if (error.code === AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER) {
        toast.error('Too many attepts! Please, try later')
    } else {
        console.log(error.message)
        console.log(error);
    }
}


export const showSignUpError = (error) => {
    if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
        toast.error('E-mail is already in use!')
    } else if (error.code === AuthErrorCodes.WEAK_PASSWORD) {
        toast.error('Password is too weak!')
    } else {
        console.log(error.message);
    }

}

export const showResetPasswordError = (error) => {
    if (error.code === AuthErrorCodes.USER_DELETED) {
        toast.error('No such E-mail found!')
    } else {
        toast.error('Please, enter E-mail address!')
    }
}