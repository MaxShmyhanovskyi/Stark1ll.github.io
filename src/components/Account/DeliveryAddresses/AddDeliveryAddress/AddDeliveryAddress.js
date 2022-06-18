import React from 'react'
import './AddDeliveryAddress.css'
import { useForm } from 'react-hook-form'
import { renderFormInputs } from '../../../../UI/renderFormInputs'
import { getUserDeliveryAddressFormControls } from '../../../../constans'
import { UserAuth } from '../../../../context/AuthContext'
import axios from '../../../../axios/axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


export const AddDeliveryAddress = () => {
    const { user } = UserAuth();
    const navigate = useNavigate();
    const { register, handleSubmit,getValues,reset,formState: { errors }} = useForm({
        defaultValues: {
            'Phone Number': `+380`
        }
    });

    const onSubmit = async data => {
        try {
        await axios.post(`users/${user.uid}/addresses.json`, data, data.id = Date.now());
        toast.success('Address was saved!');
        navigate('/account/delivery')
        } catch (e) {
        console.log(e)
            }
        }

  return (
    <div className='AddDeliveryAddress'>
        <div className='ReturnToSavedAddresses'>
        </div>
        
        <form className='BookTableForm' onSubmit={handleSubmit(onSubmit)}>
            <span className='AddressTitle'>Add delivery address:</span>
            {renderFormInputs(getUserDeliveryAddressFormControls(getValues),register,errors)}
            <div className='UserStatusButtons'>
                <button className='StatusButton submit' type='submit' >Save address!</button>
                <button type='button' className='StatusButton option2' onClick={() => navigate('/account/delivery')}>Back to addresses</button>
            </div>
        </form>
    </div>
  )
}
