import React from 'react'
import { useForm,useFormState} from 'react-hook-form';
import { UserAuth } from '../../../context/AuthContext';
import { renderFormInputs } from '../../../UI/renderFormInputs';
import { getUserInfoFormControlValues } from '../../../constans';
import { getRegisterFormControlValues } from '../../../constans';
import { auth } from '../../../firebase/firebase';

export const AccountInformation = () => {
    const { user, logout } = UserAuth();
    const { register, handleSubmit,getValues,control,formState: { errors }} = useForm({
        defaultValues: {
            fullName: `${user.displayName}`,
            phoneNumber: `${user.phoneNumber}`,
            email: `${user.email}`,
            
        }
    });

    
  return (
      <div>
        <form className='BookTableForm'>
            <span className='AuthTitle'>Account Information:</span>
            {renderFormInputs(getRegisterFormControlValues(getValues),register,errors)}
            <button className='StatusButton submit' type='sumbit'>Save edits</button>
        </form>
    </div>
  )
}
