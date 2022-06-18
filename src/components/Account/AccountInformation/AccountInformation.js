import React from 'react'
import { useForm } from 'react-hook-form';
import { UserAuth } from '../../../context/AuthContext';
import { renderFormInputs } from '../../../UI/renderFormInputs';
import { getRegisterFormControlValues } from '../../../constans';
import './AccountInformation.css'

export const AccountInformation = () => {
    const { user,updateUserInfo } = UserAuth();
    
    const { register, handleSubmit,getValues,formState: { errors }} = useForm({
        defaultValues: {
            fullName: `${user.displayName}`,
            email: `${user.email}`,
        }
    });
    const onSubmit = () => {
        return updateUserInfo(getValues('fullName'));
    }


  return (
      <div>
        <form className='BookTableForm'>
            <span className='AuthTitle'>Account Information:</span>
            {renderFormInputs(getRegisterFormControlValues(getValues),register,errors)}
            <button className='StatusButton submit' type='sumbit' onClick={handleSubmit(onSubmit)}>Save edits</button>
        </form>
    </div>
  )
}
