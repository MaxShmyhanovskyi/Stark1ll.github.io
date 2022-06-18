import React from 'react';
import './BookTableForm.css'
import { useForm } from "react-hook-form";
import axios from '../../axios/axios';
import { toast } from 'react-toastify';
import { AuthContextProvider, UserAuth } from '../../context/AuthContext';
import { getBookingFormControlValues } from '../../constans';
import { renderFormInputs } from '../renderFormInputs';

export const BookTableForm = () => {
  const {user} = UserAuth();
  const { register, handleSubmit,getValues,reset,formState: { errors }} = useForm({
      defaultValues: {
          firstName: '',
          lastName: '',
          phoneNumber: '+380',
          seatCount: '',
          desiredDate: new Date().toISOString().slice(0, 10),
      }
  });


  const onSubmit = async data => {
      try {
      console.log(user.uid)
      await axios.post(`/bookings.json`, data);
      toast.success(`Thank you, ${getValues('firstName')}! we're waiting for on ${getValues('desiredDate')}`);
      reset();
      } catch (e) {
      console.log(e)
          }
      }

  return (
    <div className='BookTable'>
      <AuthContextProvider>
        <form className='BookTableForm' onSubmit={handleSubmit(onSubmit)}>
          <span className='BookTableTitle'>Visit Us:</span>
          {renderFormInputs(getBookingFormControlValues(getValues),register,errors)}
          <div>
            <button className='SumbitTableBooking bn22' type='sumbit'>Book a table!</button>
            
          </div>
        </form>
      </AuthContextProvider>
          
    </div>
  )
}